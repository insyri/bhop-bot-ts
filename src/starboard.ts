import { client } from "./index";

async function evalStars(count: number): Promise<5 | 4 | 3 | 2 | 1> {
  // 7 or more votes, 1
  // 30 or more votes, 2
  // 70 or more votes, 3
  // 100 or more votes, 4
  // 150 or more votes, 5

  if (count >= 7) return 1;
  else if (count >= 30) return 2;
  else if (count >= 70) return 3;
  else if (count >= 100) return 4;
  else if (count >= 150) return 5;
  else return 5;
}

client.on("messageReactionAdd", async (payload) => {
  if (payload.reaction.emoji.name === "⭐") {
    let ct = payload.reaction.count;

    // Evaluate level, 5 highest and 1 lowest.
    let level = await evalStars(ct);

    // Update starboard
    await payload.message?.reply(level.toString());
  }
});
