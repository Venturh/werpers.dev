import clsx from 'clsx';
import { fetcher } from 'lib/swr';
import useSWR from 'swr';
import BaseCard from './BaseCard';

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

export const DiscordCard = ({
  presence,
  info,
}: {
  presence?: DiscordPresence;
  info?: string;
}) => (
  <BaseCard
    outline
    barPosition="none"
    className="w-full md:max-w-sm md:mx-auto"
  >
    {presence && (
      <span className="text-xs font-medium">{presence.currently}</span>
    )}
    <div className="flex m-2 mt-2 space-x-4">
      <img
        className="h-16 rounded-lg"
        src={
          info
            ? 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
            : presence.imgUrl
        }
      />
      {info && <span>{info}</span>}
      {presence && (
        <div className="space-y-1 text-sm truncate ">
          <p>{presence.details}</p>
          <p>{presence.state}</p>
          <p>{presence.time}</p>
        </div>
      )}
    </div>
  </BaseCard>
);

const Discord = () => {
  const { data, error } = useSWR<DiscordResponse>('/api/discord', fetcher, {
    refreshInterval: 1000,
  });

  if (!data && !error) return <span />;
  if (error) return <span></span>;
  if (data.info) return <DiscordCard info={data.info} />;
  return (
    <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
      {data.presence.map((presence) => (
        <DiscordCard key={presence.details} presence={presence} />
      ))}
    </div>
  );
};

export default Discord;
