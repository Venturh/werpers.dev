import Image from 'next/image';
import { fetcher } from 'lib/swr';
import useSWR from 'swr';
import BaseCard from './BaseCard';

type DiscordPresence = {
  currently: string;
  details: string;
  time: string;
  imgUrl: string;
};

export const DiscordCard = (presence: DiscordPresence) => (
  <BaseCard outline barPosition="none" className="w-full py-2 md:w-72">
    <div className="flex space-x-3">
      <img
        className="w-16 h-16 rounded-lg"
        alt="discord"
        src={presence.imgUrl}
      />
      <div className="w-56 space-y-1 md:w-48 ">
        <p className="text-xs font-medium truncate ">{presence.currently}</p>
        <p className="truncate">{presence.details}</p>
        <p className="text-xs truncate">{presence.time}</p>
      </div>
    </div>
  </BaseCard>
);

const Discord = () => {
  const { data, error } = useSWR<DiscordPresence[]>(
    `https://${process.env.NEXT_PUBLIC_DISCORD_API}/presence`,
    fetcher
  );

  if (!data && !error) return <span />;
  if (error) return <span></span>;
  return (
    <div className="flex flex-col space-y-2 md:justify-center md:space-x-2 md:flex-row md:space-y-0">
      {data.map((presence) => (
        <DiscordCard key={presence.details} {...presence} />
      ))}
    </div>
  );
};

export default Discord;
