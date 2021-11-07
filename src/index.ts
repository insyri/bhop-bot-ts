import dotenv from "dotenv";
dotenv.config();

import { CommandClient, ShardClient } from "detritus-client";
import * as utils from "./utils";

const packagejson = require("../package.json");

const { TOKEN, PREFIX, VERSION } = {
  TOKEN: process.env.TOKEN!,
  PREFIX: process.env.PREFIX!,
  VERSION: <string>packagejson.version!,
};

const client = new ShardClient(TOKEN);

const commandClient = new CommandClient(client, {
  prefix: PREFIX,
  ignoreMe: true,
  useClusterClient: false,
});

client.on("messageCreate", async (payload) => {
  if (payload.message.author.isMe) return;
  if (payload.message.content.startsWith(PREFIX)) return;
  if (Math.random() < 1 / 300) return;
  let messages: string[] = [
    "*Allegedly..*",
    ":thinking: *Hmmmm..*",
    "~~Emily~~ Cobalt is so hot! :heart_eyes: *don't tell my husband tho..* :eyes:",
    "I had so much fun last night titanicguy! :heart::eggplant::sweat_drops:",
    '*"hi"* - drewfc',
    "*Shivers..*",
  ];
  let seed = Math.floor(Math.random() * messages.length);
  payload.message.reply(messages[seed]);
});

(async () => {
  await client.run();
  client.gateway.setPresence({
    activity: {
      name: `Bhop Bot v${VERSION.slice(0, 1)} | ${PREFIX}help`,
      type: 1,
      url: "https://twitch.tv/insyri",
    },
  });
  await commandClient
    .addMultipleIn("./commands", { subdirectories: true })
    .then(async () => {
      console.log(
        `Loaded JavaScript Files: \n\n${await utils.getFilesInDirectory(
          __dirname + "/commands"
        )}\n`
      );
    })
    .catch((err) => console.error(err));
  await commandClient.run();
  console.log(`Bot Online\nRunning on node ${process.version}`);
})();
