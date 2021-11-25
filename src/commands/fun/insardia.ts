import { Command, CommandClient } from "detritus-client";
import { BaseCommand } from "../../basecommand";
import { getRng } from "../../utils";

//let vowels = ["a", "e", "i", "o", "u"]; this is the most useless thing
let alternatives = new Map();
alternatives.set("hi", ["hi", "hizies"]),
  alternatives.set("hey", ["hey", "heya"]),
  alternatives.set("and", ["and", "n"]),
  0;
alternatives.set("you", ["yu", "you", "u"]),
  alternatives.set("are", ["are", "r"]),
  alternatives.set("got", ["got", "gto", "tog"]);
alternatives.set("yo", ["balls", "j", "mmmmm"]);
export default class Insardia extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "insardia",
      help: "Speak lke insrda!!",
      //args: [{ name: "decision", label: "decision", required: true }],
      metadata: {
        description: "Speak lke insrda!!",
      },
    });
  }
  async run(ctx: Command.Context, args: { insardia: string }) {
    let formattedWords = [];
    let i = 0,
      wi = 0,
      len = args.insardia.split(" ").length;

    while (i < len) {
      let word = args.insardia.split(" ")[i]!;
      let alt = alternatives.get(word);

      if (alt) {
        // if there are alternatives
        let rand = getRng(alt.length);
        formattedWords.push(alt[rand]);
      }

      if (word.length - 1 >= 3 && getRng(30) == 1) formattedWords.push(word);

      while (wi < i) {
        if (word.length - 1 > 3) {
          if (i > 0 && i < word.length - 1) {
            let alpha = /[a-zA-Z]/;
            if (word[wi]!.match(alpha)) {
            }
          }
        }
      }
      i++;
    }
    // todo: change multiple !!! and randomly change it to !!1
    await ctx.reply(formattedWords.join(" "));
  }
}
