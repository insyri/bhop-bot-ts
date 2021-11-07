import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";

export default class Roll extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "roll",
      aliases: ["r", "random"],
      args: [
        {
          name: "number",
          type: "number",
          default: 100,
        },
      ],
      help: "Roll a number up to any number, default is 100.",
      metadata: {
        description: "Roll a number up to any number, default is 100.",
      },
      run: async (ctx, args: { number: number; roll: string }) => {
        console.log(args);
        await ctx.reply(
          `[**Roll**] 🎲 \`${Math.floor(
            Math.random() * Number(args.roll || args.number)
          )}\``
        );
      },
    });
  }
}
