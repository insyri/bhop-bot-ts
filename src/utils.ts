import { Markup } from "detritus-client/lib/utils";

import fs from "fs";
import path from "path";
import chalk from "chalk";

export async function getFilesInDirectory(dir: string): Promise<string> {
  const files = await fs.promises.readdir(dir);
  const filePaths = files.map((file) => path.join(dir, file));
  const filePathsWithExtension = filePaths.filter(
    (filePath) => path.extname(filePath) === ".js"
  );
  return chalk.yellow(
    filePathsWithExtension
      .map((e) => e.slice(e.lastIndexOf("\\") + 1))
      .join("\n")
  );
}

export function firstUppercase(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function getRng(num: number): number {
  return Math.floor(Math.random() * num);
}

export async function loadFile(location: string): Promise<string | Error> {
  return fs.readFileSync(location, "utf8");
}

export function cleanup(str: string): string {
  str = str.replace(Markup.Regexes.EVERYONE, "");
  str = str.replaceAll("  ", " ");
  str = str.replaceAll(/(\>{2}|\<{2})/g, "");
  return str;
}

export module consts {
  export const zeroWidthSpace = "\u200B";
  export const monthRoleId = "914308971173650442";
  export const eventRoleId = "914308971173650442";
  export const evalTrustedIds = [
    "697004725123416095",
    "139853736355823617",
    "127283921787289600",
  ];
}

export module responses {
  export const cancel = {
    missing_dev: "This command is reserved to eval trusted personel.",
  };
  export const error = {
    idk: "I don't know what fucking happened.",
  };
}

/*
export function isNotUser(payload: GatewayClientEvents.MessageCreate) {
  let author = payload.message.author;
  if (author.isWebhook || author.isMe || author.isSystem) return true;
  return false;
}

export function messageCreateChecks(
  payload: GatewayClientEvents.MessageCreate,
  commandClient: CommandClient
): boolean {
  if (isNotUser(payload)) {
    console.log("u is false");
    return false;
  }
  if (
    payload.message.content.startsWith(commandClient.prefixes.custom.first()!)
  ) {
    console.log("p is false");
    return false;
  }
  return true;
}
*/
