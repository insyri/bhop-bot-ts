import { Command, CommandClient } from "detritus-client";
import { BaseCommand } from "../../basecommand";

interface IFuckMarryKill {
  name: "firstUser" | "secondUser" | "thirdUser";
  type: "string";
  required: true;
}

export default class FuckMarryKill extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "fmk",
      aliases: ["fuckmarrykill"],
      args: [
        {
          name: "firstUser",
          type: "string",
          required: true,
        },
        {
          name: "secondUser",
          type: "string",
          required: true,
        },
        {
          name: "thirdUser",
          type: "string",
          required: true,
        },
      ] as IFuckMarryKill[],
      help: "FMK",
      metadata: {
        category: "Fun",
      },
    });
  }
  async run(ctx: Command.Context, args: string) {
    //args += args.split(" ");
    ////@ts-ignore
    //console.log(args instanceof Array);
    await ctx.reply(`[**FMK**] 😮 \`I would f\*\*k ${args}\``);
  }
}
