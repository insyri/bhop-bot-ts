import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";
import { firstUppercase } from "../utils";

type RPSInputs = "rock" | "paper" | "scissors" | "scissor";
type RPSEmojis = "👊" | "🖐" | "✌";

let RPSEmojisMap = new Map<RPSInputs, RPSEmojis>();

RPSEmojisMap.set("rock", "👊");
RPSEmojisMap.set("paper", "🖐");
RPSEmojisMap.set("scissor", "✌");
RPSEmojisMap.set("scissors", "✌");

export default class RockPaperscissors extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "rps",
      help: "Play Rock Paper Scissors.",
      //args: [{ name: "decision", label: "decision", required: true }],
      metadata: {
        description: "Play Rock Paper Scissors.",
      },
      run: async (ctx, args: { _rps: RPSInputs }) => {
        if (args._rps === undefined)
          return await ctx.reply("You need to choose a decision.");
          
        // Maybe make BaseMap extend Map?
        // https://github.com/detritusjs/utils/blob/master/src/baseset.ts
        
        // Make rps array of RPSEmojisMap values
        let rps;
        //let rps = RPSEmojisMap.values().

        if (rps.some((x) => x === args._rps)) {

          let rnd: number = Math.floor(Math.random() * rps.length);
          let botchoice = rps[rnd];
          console.log(botchoice, "ok");
          let result = `[**RPS**] I'm choosing **${firstUppercase(
            botchoice
          )}**! ${RPSEmojisMap.} **${"test"}** wins!`;
          await ctx.reply(result);
        } else ctx.reply("Please choose a valid option.");
      },
    });
  }
}
