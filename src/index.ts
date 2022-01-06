import dotenv from "dotenv";
dotenv.config();

import { CommandClient, ShardClient } from "detritus-client";
import { ChannelBase } from "detritus-client/lib/structures";

const packagejson = require("../package.json");

const { TOKEN, PREFIX, VERSION } = {
  TOKEN: process.env.TOKEN!,
  PREFIX: process.env.PREFIX!,
  VERSION: <string>packagejson.version!,
};

export const client = new ShardClient(TOKEN);

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

client.on("messageReactionAdd", async (payload) => {
  if (payload.reaction.emoji.name !== "⭐") return;
  //if (payload.reaction.count !== 10) return;

  const starboardChannel: ChannelBase | undefined =
    client.channels.get("773611028075380776") ||
    (await client.rest.fetchChannel("773611028075380776"));

  console.log(payload);

  if (starboardChannel.canMessage)
    client.rest.createMessage(starboardChannel!.id, {
      embed: {
        color: 0xbdaf4d,
        author: {
          iconUrl: payload.message?.author.avatarUrl,
          name: payload.message?.author?.username,
        },
        fields: [{ name: "Source", value: payload.message?.jumpLink! }],
        description: payload.message?.content || "content",
      },
      content: `💫 <#${payload.channelId}>`,
    });
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
