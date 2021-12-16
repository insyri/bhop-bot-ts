import { Command, CommandClient } from "detritus-client";
import { BaseCommand } from "../../basecommand";

export default class Roll extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "roll",
      aliases: ["r", "random"],
      args: [
        {
          default: 100,
          label: "max",
          name: "number",
        },
      ],
      help: "Roll a number up to any number, default is 100.",
      metadata: {
        category: "Fun",
      },
    });
  }
  async run(ctx: Command.Context, args: { max: number; roll: string }) {
    console.log(args);
    await ctx.reply(
      `[**Roll**] 🎲 \`${Math.floor(
        Math.random() * Number(args.roll || args.max)
      )}\``
    );
  }
}
