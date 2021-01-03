import clsx from 'clsx';
import { fetcher } from 'lib/swr';
import useSWR from 'swr';
import BaseCard from './BaseCard';

type DiscordPresence = {
  currently: string;
  details: string;
  state: string;
  time: string;
  imgUrl: string;
};

export const DiscordCard = (presence: DiscordPresence) => (
  <BaseCard
    outline
    barPosition="none"
    className="w-full md:max-w-sm md:mx-auto"
  >
    {presence && (
      <span className="text-xs font-medium">{presence.currently}</span>
    )}
    <div className="flex m-2 mt-2 space-x-4">
      <img className="h-16 rounded-lg" src={presence.imgUrl} />
      <div className="space-y-1 text-sm truncate ">
        <p>{presence.details}</p>
        <p>{presence.state}</p>
        <p>{presence.time}</p>
      </div>
    </div>
  </BaseCard>
);

const Discord = () => {
  const { data, error } = useSWR<DiscordPresence[]>(
    process.env.NEXT_PUBLIC_DISCORD_API,
    fetcher,
    { refreshInterval: 1000 }
  );

  if (!data && !error) return <span />;
  if (error) return <span></span>;
  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      {data.map((presence) => (
        <DiscordCard key={presence.details} {...presence} />
      ))}
    </div>
  );
};

export default Discord;
