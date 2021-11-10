import { CommandClient } from "detritus-client";
import { zeroWidthSpace } from "../utils";
import { BaseCommand } from "../basecommand";

export default class Ping extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "ping",
      aliases: ["p", "latency"],
      help: "Get the latency time of discord's API in milliseconds.",
      metadata: {
        description: "Get the latency time of discord's API in milliseconds.",
      },
      run: async (ctx) => {
        await ctx.reply(
          `${zeroWidthSpace}\nClient: ${(await ctx.client.ping()).rest}ms\n` +
            `Gateway: ${await ctx.gateway.ping()}ms`
        );
      },
    });
  }
  /*
  or: ..?
    async run(ctx: Command.Context) {
    await ctx.reply(
      `${zeroWidthSpace}\nClient: ${(await ctx.client.ping()).rest}ms\n` +
        `Gateway: ${await ctx.gateway.ping()}ms`
    );
  }
  */
}
