import fs from "fs";
import path from "path";
import chalk from "chalk";
//import { CommandClient, GatewayClientEvents } from "detritus-client";

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
export const zeroWidthSpace = "\u200B";
