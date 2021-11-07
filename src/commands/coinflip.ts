import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";

export default class CoinFlip extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "coinflip",
      aliases: ["cf", "flip", "cointoss"],
      help: "Flip a coin.",
      metadata: {
        description: "Flip a coin.",
      },
      run: async (ctx) => {
        await ctx.reply(
          `[**CoinFlip**] 🪙 Landed on **${
            Math.random() > 0.5 ? "Tails" : "Heads"
          }**`
        ); // 🪙 : https://emojipedia.org/coin/
      },
    });
  }
}
