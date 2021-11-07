import { Command } from "detritus-client";

export class BaseCommand<
  ParsedArgsFinished = Command.ParsedArgs
> extends Command.Command<ParsedArgsFinished> {
  triggerTypingAfter = 1000;

  async onRunError(ctx: Command.Context, args: ParsedArgsFinished, error: any) {
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
