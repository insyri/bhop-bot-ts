import { CommandClient } from "detritus-client";
import { BaseCommand } from "../../basecommand";
import { getRng } from "../../utils";

//let vowels = ["a", "e", "i", "o", "u"]; this is the most useless thing
let alternatives = new Map(); // wjer do u wana use it i think i know what u talking about
// like the possible values for hi woudl be "hi" and "hiziez"
  alternatives.set("hi", ["hi", "hizies"]),//if i say hi, "hi" | "hizies" will be new_word ("hi" or "hizies")
  alternatives.set("hey", ["hey", "heya"]),
  alternatives.set("and", ["and", "n"]),0
  alternatives.set("you", ["yu", "you", "u"]),
  alternatives.set("are", ["are", "r"]),
  alternatives.set("got", ["got", "gto", "tog"]);
  alternatives.set("yo", ["balls","j","mmmmm"]);
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

        while (i < len) { // Iterate through each word via str.split(" ")
          let word = args.insardia.split(" ")[i]!; // index of the word in array
          let alt = alternatives.get(word); // get the alternatives for the word if applcable

          if (alt) { // if there are alternatives
            let rand = getRng(alt.length);
            formattedWords.push(alt[rand]);
          }

          if (word.length - 1 >= 3 && getRng(30) == 1)
            formattedWords.push(word);
            
          while (wi < i) {
            if (word.length - 1 > 3) {
              if (i > 0 && i < (word.length - 1)) {
                let alpha = /[a-zA-Z]/; //wkjat.

                // ALSO
                // Make sure ur not using the same original index variable for a new index stuff
                // Idk all i saw was alpha so i assumed dats what u needed.
                // 
                if (word[wi]!.match(alpha)) { 
                  
                } 
              } // i GOIODN IGHT❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤❤
            }
          } // YEP OK GNN NN ♥♥♥♥♥♥♥♥♥♥❤❤❤❤❤❤
          i++;
        }
        // todo: change multiple !!! and randomly change it to !!1
        await ctx.reply(formattedWords.join(" ")); 
      },
    });
  }
}
