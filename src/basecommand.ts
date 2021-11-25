import { Command } from "detritus-client";
import { ParsedArgs } from "detritus-client/lib/command";

export class BaseCommand extends Command.Command {
  async onRunError(ctx: Command.Context, args: ParsedArgs, error: any) {
    ctx.reply(`An error occurred: ${error}\nWith these arguments: ${args}`);
  }
}
