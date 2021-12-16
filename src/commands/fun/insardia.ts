import { Command, CommandClient } from "detritus-client";
import { Regexes } from "detritus-client/lib/utils/markup";
import { BaseCommand } from "../../basecommand";
import { getRng, cleanup } from "../../utils";

// https://gist.github.com/insyri/a943853042f818682fafd642af029f82

let alpha = /[a-zA-Z]/;
let vowels = ["a", "e", "i", "o", "u"];
let alternatives: Map<string, string[]> = new Map([
  ["hi", ["hi", "hizies"]],
  ["hey", ["hey", "heya"]],
  ["and", ["and", "n"]],
  ["you", ["yu", "you", "u"]],
  ["are", ["are", "r"]],
]);

export default class Insardia extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "insardia",
      help: "Speak lke insrda!!",
      metadata: {
        category: "Fun",
      },
    });
  }
  async run(ctx: Command.Context, args: { insardia: string }) {
    let words = args.insardia.split(" ");
    let formatted_words: string[] = [];
    for (let word of words) {
      for (const property in Regexes)
        if (word.match(Regexes[property]!) || [" ", "\n"].includes(word)) break;
      let new_word = "";
      let rng = getRng(30);

      if (alternatives.has(word))
        formatted_words.push(alternatives.get(word)![rng]!);
      if (word.length - 1 >= 3 && rng == 1) formatted_words.push(word);

      for (let index = 0; index < word.length; index++) {
        let letter = word[index]!;

        // why is this here?
        if (word.length - 1 > 3)
          if (index < word.length - 1)
            if (word[index + 1]?.match(alpha))
              // would only get rid of vowels if word was longer than 3 letters
              if (word[index + 1] == letter || vowels.includes(letter))
                // do not remove vowels if is last or first
                // if words with two of the same characters get rid of one of them OR if the letter is a vowel get rid of it
                continue;

        if ((index === 0 || index === word.length - 1) && getRng(50) === 1)
          // the first or end would be repeated sometimes
          new_word += letter.repeat(2);
        new_word += letter;
      }
      formatted_words.push(new_word);
    }
    await ctx.reply(cleanup(formatted_words.join(" ")));
  }
}
