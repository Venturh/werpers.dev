import Redis from 'ioredis';
import { NextApiRequest, NextApiResponse } from 'next';

const isDev = process.env.NODE_ENV === 'development';

const redis = new Redis(
  isDev ? 'redis://127.0.0.1:6379' : process.env.REDIS_URL
);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { slug } = req.query;
    const current = JSON.parse(
      (await redis.hget('views', slug as string)) || null
    );
    if (current === null) {
      await redis.hset('views', slug as string, JSON.stringify({ views: 1 }));
      return res.status(200).json({});
    } else {
      const updated = {
        ...current,
        views: current.views + 1,
      };
      await redis.hset('views', slug, JSON.stringify(updated));
      return res.status(201).json(updated);
    }
  }

  if (req.method === 'GET') {
    const current: { views: number } = JSON.parse(
      (await redis.hget('views', req.query.slug as string)) || null
    );
    if (current === null) return res.status(404);

    return res.status(200).json({ views: current.views });
  }
};
