// import { client } from "./index";

// (async () => {
//   const starboard = await client.rest
//     .fetchGuild("759174794968301569")
//     .then((guild) =>
//       guild
//         .fetchChannels()
//         .then((channels) =>
//           channels.find((channel) => channel.name === "starboard")
//         )
//     );

//   client.on("messageReactionAdd", async (payload) => {
//     console.log("messageReactionAdd");
//     if (!payload.message?.fromUser) return;
//     if (payload.reaction.emoji.name !== "⭐") return;
//     // if (payload.reaction.count !== 10) return;

//     // Update starboard
//     await client.rest.createMessage(starboard!.id, `hi`);
//   });
// })();
