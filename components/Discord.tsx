import Image from 'next/image';
import { fetcher } from 'lib/swr';
import useSWR from 'swr';

type DiscordPresence = {
  currently: string;
  details: string;
  time: string;
  imgUrl: string;
};

export const DiscordCard = (presence: DiscordPresence) => (
  <div className="flex items-center w-full space-x-2 md:justify-start md:w-72">
    <img className="w-6 h-6 rounded-lg " alt="discord" src={presence.imgUrl} />
    <div className="flex space-x-1 text-sm truncate">
      <span>{presence.currently}</span>
      <span> - </span>
      <span>{presence.details}</span>
    </div>
  </div>
);

const Discord = () => {
  const { data, error } = useSWR<DiscordPresence[]>(
    `https://${process.env.NEXT_PUBLIC_DISCORD_API}/presence`,
    fetcher
  );

  if (!data && !error) return <span />;
  if (error) return <span></span>;
  return (
    <div className="flex flex-col space-y-2 md:space-x-2 md:flex-row md:space-y-0">
      {data.map((presence) => (
        <DiscordCard key={presence.details} {...presence} />
      ))}
    </div>
  );
};

export default Discord;
