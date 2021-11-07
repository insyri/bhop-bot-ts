import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";

export default class RockPaperSissors extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "rps",
      help: "Play Rock Paper Scissors.",
      args: [{ name: "decision", type: "string", required: true }],
      metadata: {
        description: "Play Rock Paper Scissors.",
      },
      run: async (ctx, args) => {
        let opt = new Map();
        opt.set("sissors", "✌");
        opt.set("rock", "👊");
        opt.set("paper", "🖐");
        if (
          args.decision == "sissors" ||
          args.decision == "rock" ||
          args.decision == "paper"
        ) {
          let rnd = Math.floor(Math.random() * 3);
          let rps = ["sissors", "rock", "paper"];
          let result = "";
          if (rnd == 0) {
            result =
              "You chose " +
              opt.get(args.decision) +
              " and the bot chose " +
              opt.get(rps[rnd]) +
              ".";
          } else if (rnd == 1) {
            result =
              "You chose " +
              opt.get(args.decision) +
              " and the bot chose " +
              opt.get(rps[rnd]) +
              ".";
          } else if (rnd == 2) {
            result =
              "You chose " +
              opt.get(args.decision) +
              " and the bot chose " +
              opt.get(rps[rnd]) +
              ".";
          }
          ctx.reply(result);
        } else ctx.reply("Please choose a valid option.");
      },
    });
  }
}
