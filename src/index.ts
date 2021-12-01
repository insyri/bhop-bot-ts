import dotenv from "dotenv";
dotenv.config();

import { CommandClient, ShardClient } from "detritus-client";

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
  let author = payload.message.author;
  if (author.isWebhook || author.isMe || author.isSystem) return;
  if (
    payload.message.content.startsWith(commandClient.prefixes.custom.first()!)
  )
    return;
  if (Math.random() > 1 / 300) return;
  let messages: string[] = [
    "*Allegedly..*",
    ":thinking: *Hmmmm..*",
    "~~Emily~~ Cobalt is so hot! :heart_eyes: *don't tell my husband tho..* :eyes:",
    "I had so much fun last night titanicguy! :heart::eggplant::sweat_drops:",
    '*"hi"* - drewfc',
    "*Shivers..*",
  ];
  let seed = Math.floor(Math.random() * messages.length);
  await payload.message.reply(messages[seed]);
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
    .then(async (c) => {
      console.log(`Loaded ${c.commands.length.toString()} Commands`);
    })
    .catch((err) => console.error(err));
  await commandClient.run();
  console.log(`Bot Online\nRunning on node ${process.version}`);
})();
