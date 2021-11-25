import { Command } from "detritus-client";
import { ParsedArgs } from "detritus-client/lib/command";

export class BaseCommand<
  ParsedArgsFinished = Command.ParsedArgs
> extends Command.Command<ParsedArgsFinished> {
  async onRunError(ctx: Command.Context, args: ParsedArgs, error: any) {
    ctx.reply(`An error occurred: ${error}\nWith these arguments: ${args}`);
  }

  onTypeError(
    ctx: Command.Context,
    args: ParsedArgsFinished,
    errors: Command.ParsedErrors
  ) {
    ctx.reply(
      `An error occurred: ${
        Array.isArray(errors) ? errors.join("\n") : errors
      }\nWith these arguments: ${args}`
    );
    console.log(errors, args);
  }
}
