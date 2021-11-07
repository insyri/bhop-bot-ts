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

commandClient.add({
  name: "ping",
  run: async (context) => {
    await context.reply("pong");
  },
});

(async () => {
  await client.run();
  client.gateway.setPresence({
    activity: {
      name: `Bhop Bot ${VERSION} | ${PREFIX}help`,
      type: 1,
      url: "https://twitch.tv/insyri",
    },
  });
  await commandClient.run();
  process.stdout.write(`Bot Online\nRunning on node v${process.version}\n`); // this is cooler than console.log
})();
