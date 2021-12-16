import { Command, CommandClient } from "detritus-client";
import { BaseCommand } from "../../basecommand";
import { consts } from "./../../utils";

export default class EventRole extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "eventrole",
      help: "Give or remove the Event Role",
      metadata: {
        category: "Util",
      },
    });
  }
  async run(ctx: Command.Context) {
    if (ctx.member?.roles.has(consts.eventRoleId)) {
      await ctx.member.removeRole(consts.eventRoleId);
      return ctx.reply("Removed Event Role");
    } else {
      await ctx.member?.addRole(consts.eventRoleId);
      return ctx.reply("Added Event Role");
    }
  }
}
