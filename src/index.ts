import dotenv from "dotenv";
dotenv.config();

import { CommandClient, ShardClient } from "detritus-client";

const { TOKEN, PREFIX } = {
  TOKEN: process.env.TOKEN!,
  PREFIX: process.env.PREFIX!,
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
  await commandClient.run();
  await console.log("ok.");
})();
