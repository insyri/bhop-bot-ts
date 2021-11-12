import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";

//let vowels = ["a", "e", "i", "o", "u"];
let alternatives = new Map();
alternatives.set("hi", ["hi", "hizies"]),
  alternatives.set("hey", ["hey", "heya"]),
  alternatives.set("and", ["and", "n"]),
  alternatives.set("you", ["yu", "you", "u"]),
  alternatives.set("are", ["are", "r"]),
  alternatives.set("got", ["got", "gto", "tog"]);

export default class Insardia extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "insardia",
      help: "Speak lke insrda!!",
      //args: [{ name: "decision", label: "decision", required: true }],
      metadata: {
        description: "Speak lke insrda!!",
      },
      run: async (ctx, args: { insardia: string }) => {
        let formattedWords = [];
        let i = 0,
          wi = 0, // word index
          len = args.insardia.split(" ").length;

        while (i < len) {
          let word = args.insardia.split(" ")[i]!;
          let alt = alternatives.get(word);
          // Replacing words with alternatives if applicable
          if (alt) {
            let rand = Math.floor(Math.random() * alt.length);
            word = alt[rand];
          }
          // idk why this is here
          if (word.length >= 2 && Math.floor(Math.random() * 30) == 1)
            formattedWords.push(word);
          while (wi < i) {}
          i++;
        }
        await ctx.reply(formattedWords.join(" "));
      },
    });
  }
}
