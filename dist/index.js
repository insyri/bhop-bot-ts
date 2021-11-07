"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const detritus_client_1 = require("detritus-client");
const { TOKEN, PREFIX } = {
    TOKEN: process.env.TOKEN,
    PREFIX: process.env.PREFIX,
};
const client = new detritus_client_1.ShardClient(TOKEN);
const commandClient = new detritus_client_1.CommandClient(client, {
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
