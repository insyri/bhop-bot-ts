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

export const zeroWidthSpace = "\u200B";
