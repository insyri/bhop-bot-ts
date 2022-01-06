import { Command, CommandClient } from "detritus-client";
import { Embed } from "detritus-client/lib/utils";
import { BaseCommand } from "../../basecommand";

export default class VoteMute extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "poll",
      aliases: ["vote", "strawpoll"],
      help: "Cast a vote.",
      metadata: {
        category: "Util",
      },
    });
  }
  async run(ctx: Command.Context, args: { poll: string }) {
    let embed = new Embed();
    embed.setTitle("Poll");
    embed.setDescription(args.poll);
    embed.setColor(0xffffff);
    embed.setFooter("Vote with reactions!");

    await ctx.reply({ embed }).then((m) => {
      m.react("👍");
      m.react("👎");
    });
  }
}
