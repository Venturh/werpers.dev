import { NextApiRequest, NextApiResponse } from 'next';

function send(res: NextApiResponse, toSend: Object) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(toSend));
}

function makePresence(presence) {
  return presence.map((d) => {
    const type =
      d.name === 'Visual Studio Code'
        ? 'CODING IN'
        : d.type === 'LISTENING'
        ? `${d.type} TO`
        : d.type;
    const currently = `${type} ${d.name.toUpperCase()}`;
    const assetImage =
      d.name === 'Visual Studio Code'
        ? `https://cdn.discordapp.com/app-assets/383226320970055681/${d.assets.largeImage}.png`
        : d.name === 'Spotify'
        ? `https://i.scdn.co/image/${d.assets.largeImage.split(':')[1]}`
        : d.assets.largeImage;

    const state =
      d.type === 'LISTENING' ? `by ${d.state.replace(';', ',')}` : d.state;

    let time: string;
    if (d.timestamps) {
      var ago = require('s-ago');
      time = ago(d.timestamps.start);
    } else time = ago(Date.now());

    return {
      currently,
      details: d.details,
      state,
      time,
      imgUrl: assetImage,
    };
  });
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const Discord = require('discord.js');
  const bot = new Discord.Client();
  await bot.login(process.env.DISCORD_BOT_TOKEN);

  const me = bot.users.cache.get('302595184271687681');
  if (!me) return send(res, { info: 'ERROR' });
  const presence = me.presence;
  if (presence.status === 'offline') send(res, { info: 'Offline' });
  else {
    if (presence.activities.length > 0)
      return send(res, { presence: makePresence(presence.activities) });
    else return send(res, { info: 'NO ACTIVITY' });
  }
};
