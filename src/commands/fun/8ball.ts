import { CommandClient } from "detritus-client";
import { BaseCommand } from "../../basecommand";

export default class EightBall extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "8ball",
      aliases: ["8b", "fortune"],
      help: "Grant your fortune with the magic 8ball.",
      metadata: {
        description: "Grant your fortune with the magic 8ball.",
      },
      run: async (ctx) => {
        let quotes: string[] = [
          "As I see it, yes",
          "Ask again later",
          "Better not tell you now",
          "Cannot predict now",
          "Concentrate and ask again",
          "Don't count on it",
          "It is certain",
          "It is decidedly so",
          "Most likely",
          "My reply is no",
          "My sources say no",
          "Outlook good",
          "Outlook not so good",
          "Reply hazy, try again",
          "Signs point to yes",
          "Very doubtful",
          "Without a doubt",
          "Yes",
          "Yes, definitely",
          "You may rely on it",
          "Bet on it",
          "Absolutely",
          "Maybe someday",
          "Probably not",
          "No",
        ];
        let emojis: string[] = [
          ":rolling_eyes:",
          ":blush:",
          ":scream:",
          ":ok_hand:",
          ":smirk:",
          ":stuck_out_tongue:",
          ":stuck_out_tongue_winking_eye:",
        ];
        await ctx.reply(
          `[**8Ball**] 🔮 ${
            quotes[Math.floor(Math.random() * quotes.length)]
          } ${emojis[Math.floor(Math.random() * emojis.length)]}`
        ); // 🪙 : https://emojipedia.org/coin/
      },
    });
  }
}
