import clsx from 'clsx';
import { fetcher } from 'lib/swr';
import useSWR from 'swr';
import { BaseCard } from './ProjectCard';

type DiscordResponse = {
  info?: string;
  presence?: DiscordPresence[];
};

type DiscordPresence = {
  currently: string;
  details: string;
  state: string;
  time: string;
  imgUrl: string;
};

const Discord = () => {
  const { data, error } = useSWR<DiscordResponse>(
    process.env.NEXT_PUBLIC_DISCORD_API,
    fetcher
  );

  if (!data && !error) return <span>Error</span>;
  if (error) return <span>Error</span>;
  if (data.info)
    return (
      <BaseCard className="w-full md:w-1/2 md:mx-auto">{data.info}</BaseCard>
    );
  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      {data.presence.map(({ currently, details, state, imgUrl, time }) => (
        <BaseCard className="md:max-w-xs md:mx-auto" key={details}>
          <span className="text-sm font-medium">{currently}</span>
          <div className="flex mt-2 space-x-4">
            <img className="h-16 rounded-lg" src={imgUrl} />
            <div className="flex flex-col space-y-1 text-sm">
              <span>{details}</span>
              <p className="overflow-hidden overflow-ellipsis">{state}</p>
              <span>{time}</span>
            </div>
          </div>
        </BaseCard>
      ))}
    </div>
  );
};

export default Discord;
