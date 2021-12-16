import { Command, CommandClient } from "detritus-client";
import { BaseCommand } from "../../basecommand";
import { firstUppercase } from "../../utils";

type RPSInputs = "rock" | "paper" | "scissors";
type RPSEmojis = "👊" | "🖐" | "✌";

let RPSEmojisMap = new Map<RPSInputs, RPSEmojis>([
  ["rock", "👊"],
  ["paper", "🖐"],
  ["scissors", "✌"],
]);

interface evalRpsResult {
  returning: "It's a draw!" | "wins" | "loses" | "bruh";
  whoWon: "bot" | "user" | null;
}

function evalRps(
  userInput: RPSInputs,
  botInput: RPSInputs
): evalRpsResult | null {
  let win: evalRpsResult = {
    returning: "wins",
    whoWon: "user",
  };
  let lose: evalRpsResult = {
    returning: "loses",
    whoWon: "bot",
  };

  if (userInput === botInput)
    return {
      returning: "It's a draw!",
      whoWon: null,
    };
  if (userInput === "rock") {
    if (botInput === "paper") {
      return lose;
    } else {
      return win;
    }
  } else if (userInput === "paper") {
    if (botInput === "scissors") {
      return lose;
    } else {
      return win;
    }
  } else if (userInput === "scissors") {
    if (botInput === "rock") {
      return lose;
    } else {
      return win;
    }
  }
  return null;
}

export default class RockPaperscissors extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "rps",
      help: "Play Rock Paper Scissors.",
      //args: [{ name: "decision", label: "decision", required: true }],
      metadata: {
        category: "Fun",
      },
    });
  }
  async run(ctx: Command.Context, args: { rps: RPSInputs }) {
    if (!args.rps) return await ctx.reply("You need to choose a decision.");
    let rps_ = Array.from(RPSEmojisMap.keys());
    if (rps_.some((x) => x === args.rps)) {
      let rnd: number = Math.floor(Math.random() * rps_.length);
      let botchoice = rps_[rnd]!;
      let outcome = evalRps(args.rps, botchoice);
      let result = `[**RPS**] I'm choosing **${firstUppercase(
        botchoice
      )}**! ${RPSEmojisMap.get(botchoice)} ${
        outcome?.returning === "It's a draw!"
          ? outcome
          : `**${
              outcome?.whoWon! === "bot"
                ? botchoice.toUpperCase()
                : args.rps.toUpperCase()
            }** ${outcome?.returning}`
      }!`;
      await ctx.reply(result);
    } else ctx.reply("Please choose a valid option.");
  }
}
