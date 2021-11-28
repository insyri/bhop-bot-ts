import { Command, CommandClient } from "detritus-client";
import { BaseCommand } from "../../basecommand";
import { getRng } from "../../utils";

// https://gist.github.com/insyri/a943853042f818682fafd642af029f82

let vowels = ["a", "e", "i", "o", "u"];
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
    let lines = args.insardia.split("\n");
    let formatted_string = "";

    for (let line of lines) {
      let words = line.split(" ");
      let formatted_words: string[] = [];
      for (let word of words) {
        console.log(word);
        console.log(word);
        let new_word = "";
        let rng = getRng(30);

        if (alternatives.has(word))
          formatted_words.push(alternatives.get(word)[rng]);
        if (word.length - 1 >= 3 && rng == 1) formatted_words.push(word);

        for (let index = 0; index < word.length; index++) {
          let letter = word[index];
          console.log(word, letter);
          if (!letter) return;
          if (word.length - 1 > 3) {
            if (index > 0 && index < word.length - 1) {
              let alpha = /[a-zA-Z]/;
              if (word[index + 1]?.match(alpha)) {
                if (word[index + 1] == letter) {
                  continue;
                }
                if (vowels.includes(letter)) {
                  continue;
                }
              }
            }
          }

          if (index === 0) {
            rng = getRng(50);
            if (rng == 1) {
              new_word += letter + letter;
            }
          }

          if (index === word.length - 1) {
            rng = getRng(50);
            if (rng == 1) {
              new_word += letter + letter;
            }
          }

          new_word += letter;
        }
        formatted_words.push(new_word);
      }
      formatted_string += formatted_words.join(" ") + "\n";
    }
    await ctx.reply(formatted_string.trim());
  }
}

/*
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
*/
