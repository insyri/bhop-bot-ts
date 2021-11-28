import { Command, CommandClient, Constants, Utils } from "detritus-client";
import { BaseCommand } from "../../basecommand";
import { consts, responses } from "../../utils";
import { transpile } from "typescript";
import { Embed, Markup } from "detritus-client/lib/utils";

interface EvalArgs {
  code: string;
  jsonspacing: number;
}

export default class Eval extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "eval",
      help: "Evaluates given code in TypeScript and JavaScript",
      args: [{ default: 2, name: "jsonspacing", type: "number" }],
      onBefore: (ctx: Command.Context) =>
        ctx.user.isClientOwner || consts.evalTrustedIds.includes(ctx.user.id),
      onCancel: (ctx: Command.Context) =>
        ctx.editOrReply(responses.cancel.missing_dev),
      onError: (ctx: Command.Context, err: Error) => {
        ctx.editOrReply(`${responses.error.idk}\n\n${err}`);
        console.error(err);
      },
    });
  }
  async run(ctx: Command.Context, args: EvalArgs) {
    console.log("start");
    const { matches } = Utils.regex(
      Constants.DiscordRegexNames.TEXT_CODEBLOCK,
      args.code
    );
    let inputLanguage = "ts";

    const match = matches[0];
    if (match) {
      args.code! = match!.text!;
      if (match!.language) inputLanguage = match!.language;
    }

    let language = "ts";
    let output;

    const input = args.code;
    console.log("about to transpile");
    const transpiled = transpile(input, { strict: true });
    console.log("transpiled");
    let ok: boolean | null = true;
    try {
      output = eval(transpiled);
    } catch (e) {
      output = e;
      ok = false;
    }
    console.log("ok");
    output = await Promise.resolve(output);
    if (output === undefined) ok = null;
    if (typeof output === "object") {
      language = "json";
      output = JSON.stringify(output, null, args.jsonspacing);
    }

    const embed = new Embed();
    embed.addField(
      "Input",
      Markup.codeblock(input, { language: inputLanguage })
    );
    embed.addField(
      "Transpiled Code",
      Markup.codeblock(output, { language: "js" })
    );
    embed.addField("Output", Markup.codeblock(output, { language }));
    return await ctx.editOrReply({ embed });
  }
}
