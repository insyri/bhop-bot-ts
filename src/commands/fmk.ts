import { CommandClient } from "detritus-client";
import { BaseCommand } from "../basecommand";

export default class FMK extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "fmk",
      aliases: ["fuckmarrykill"],
      args: [
        {
          name: "user",
          type: "user",
          required: true,
        },
        {
          name: "user",
          type: "user",
          required: true,
        },
        {
          name: "user",
          type: "user",
          required: true,
        },
      ],
      help: "FMK",
      metadata: {
        description: "Get the latency time of discord's API in milliseconds.",
      },
      run: async (context, args) => {
        console.log(args);
        await context.reply(`[**FMK**] 😮 \`I would f**k ${args}\``);
      },
    });
  }
}
