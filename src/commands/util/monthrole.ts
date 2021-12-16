import { Command, CommandClient } from "detritus-client";
import { BaseCommand } from "../../basecommand";
import { consts } from "./../../utils";

export default class MonthRole extends BaseCommand {
  constructor(client: CommandClient) {
    super(client, {
      name: "monthrole",
      help: "Give or remove the Month Role",
      metadata: {
        category: "Util",
      },
    });
  }
  async run(ctx: Command.Context) {
    if (ctx.member?.roles.has(consts.monthRoleId)) {
      await ctx.member.removeRole(consts.monthRoleId);
      return ctx.reply("Removed Month Role");
    } else {
      await ctx.member?.addRole(consts.monthRoleId);
      return ctx.reply("Added Month Role");
    }
  }
}
