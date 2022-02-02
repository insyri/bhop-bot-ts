import { Command } from "detritus-client";

export class BaseCommand extends Command.Command {
  disableDm = true;

  async onRunError(ctx: Command.Context, args: string, error: any) {
    ctx.reply(`An error occurred: ${error}\nWith these arguments: ${args}`);
    console.error(error);
  }
}
