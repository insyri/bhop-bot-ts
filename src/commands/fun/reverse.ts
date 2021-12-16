import { Command, CommandClient } from "detritus-client";
import { BaseCommand } from "../../basecommand";

export default class Reverse extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "reverse",
      help: "Flip words in the reverse.",
      //args: [{ name: "decision", label: "decision", required: true }],
      metadata: {
        category: "Fun",
      },
    });
  }
  async run(ctx: Command.Context, args: { reverse: string }) {
    if (!args.reverse) return await ctx.reply("no param");
    await ctx.reply(
      `[**Reverse**] 🙃 ${args.reverse.split("").reverse().join("")}`
    );
    console.log(args.reverse.split("").reverse().join(""));
  }
}
