import { Command } from "detritus-client";

export class BaseCommand<
  ParsedArgsFinished = Command.ParsedArgs
> extends Command.Command<ParsedArgsFinished> {
  triggerTypingAfter = 1000;
}
