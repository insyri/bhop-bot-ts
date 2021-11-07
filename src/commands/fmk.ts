import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";

//broken
export default class FuckMarryKill extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "fmk",
      aliases: ["fuckmarrykill"],
      args: [
        {
          name: "firstUser",
          type: "string",
          required: true,
        },
        {
          name: "secondUser",
          type: "string",
          required: true,
        },
        {
          name: "thirdUser",
          type: "string",
          required: true,
        },
      ],
      help: "FMK",
      metadata: {
        description: "Get the latency time of discord's API in milliseconds.",
      },
      run: async (ctx, args: string) => {
        //args += args.split(" ");
        ////@ts-ignore
        //console.log(args instanceof Array);
        await ctx.reply(`[**FMK**] 😮 \`I would f**k ${args}\``);
      },
    });
  }
}
