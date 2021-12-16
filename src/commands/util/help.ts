import { Command, CommandClient } from "detritus-client";
import { BaseCommand } from "../../basecommand";
import { insertAt } from "../../utils";

function twoArraysToMap(
  keys: string[],
  values: string[]
): Map<string, string[]> {
  const map = new Map<string, string[]>();
  for (let i = 0; i < keys.length; i++) {
    map.set(keys[i]!, map.get(keys[i]!)!.concat(values[i]!));
  }
  return map;
}

function formatTitleAndSubs(input: Map<string, string[]>): string {
  let output = "";
  for (const [key, value] of input) {
    if (output.includes(key)) {
      output += insertAt(
        output,
        `${value}\n`,
        output.indexOf(key) + key.length + 3
      );
    } else {
      output += `${key}\n  ${value}\n`;
    }
  }
  return output;
}

export default class Insardia extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "help",
      aliases: ["cmds", "commands"],
      help: "help",
      metadata: {
        category: "Util",
      },
    });
  }
  async run(ctx: Command.Context) {
    let ok = twoArraysToMap(
      this.commandClient.commands.flatMap((c) => c.metadata.category),
      this.commandClient.commands.flatMap((c) => c.name)
    );
    console.log(ok);
    let helptxt = formatTitleAndSubs(ok);

    //Object.values(this.commandClient.commands).forEach((c) => {
    //  categories.set(
    //    c.metadata.category,
    //    (categories.get(c.metadata.category) || []).concat(c.name)
    //  );
    //});

    //helptxt += `Type #!help command for more info on a command.\nYou can also type #!help category for more info on a category.`;

    /*
    For every label, create a title as the label, put it into the contents of the title indented
    Those without labels are put into the No Category section
    if disabled show Disabled after command

      EventRole:
        eventrole    
      FasteHander:
        faste        
      Levels:
        daily        
        level        
      MonthRole:
        monthrole    
      Strafes:
        maps         
        personalbest Disabled
        worldrecord  
      ​No Category:
        help         Shows this message

      Type #!help command for more info on a command.
      You can also type #!help category for more info on a category. Shouldnt you iterate through da categories
      make the help command
      copilot aint doin nun :( :()
    */
    await ctx.reply(`\`\`\`\n${helptxt}\`\`\``);
  }
}
