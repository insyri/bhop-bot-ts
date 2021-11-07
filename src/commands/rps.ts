import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";

enum RPSEmojis {
  rock = "👊",
  paper = "🖐",
  scissor = "✌",
}

const { rock, paper, scissor } = RPSEmojis;

export default class RockPaperscissors extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "rps",
      help: "Play Rock Paper Scissors.",
      args: [{ name: "decision", label: "decision", required: true }],
      metadata: {
        description: "Play Rock Paper Scissors.",
      },
      run: async (ctx, args: { rps: keyof typeof RPSEmojis }) => {
        console.log(args, rock, paper, scissor);
        let opt = new Map();
        opt.set("scissors", scissor);
        opt.set("rock", rock);
        opt.set("paper", paper);
        if (
          args.rps == "scissor" ||
          args.rps == "rock" ||
          args.rps == "paper"
        ) {
          let rnd = Math.floor(Math.random() * 3);
          let rps = ["scissors", "rock", "paper"];
          let result = "";
          if (rnd == 0) {
            result =
              "You chose " +
              opt.get(args.rps) +
              " and the bot chose " +
              opt.get(rps[rnd]) +
              ".";
          } else if (rnd == 1) {
            result =
              "You chose " +
              opt.get(args.rps) +
              " and the bot chose " +
              opt.get(rps[rnd]) +
              ".";
          } else if (rnd == 2) {
            result =
              "You chose " +
              opt.get(args.rps) +
              " and the bot chose " +
              opt.get(rps[rnd]) +
              ".";
          }
          await ctx.reply(result);
        } else ctx.reply("Please choose a valid option.");
      },
    });
  }
}
