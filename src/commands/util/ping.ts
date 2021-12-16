import { Command, CommandClient } from "detritus-client";
import { consts } from "../../utils";
import { BaseCommand } from "../../basecommand";

export default class Ping extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "ping",
      aliases: ["p", "latency"],
      help: "Get the latency time of discord's API in milliseconds.",
      metadata: {
        category: "Util",
      },
    });
  }
  async run(ctx: Command.Context, args: string) {
    await ctx.reply(
      `${args === "-c" ? "" : consts.zeroWidthSpace}\nClient: ${
        (
          await ctx.client.ping()
        ).rest
      }ms\n` + `Gateway: ${await ctx.gateway.ping()}ms`
    );
  }
}
