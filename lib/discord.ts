import { Client } from 'discord.js';

export default async function getClient() {
  const client = new Client();
  await client.login(process.env.DISCORD_BOT_TOKEN);
  return client;
}
