import { fetcher } from 'lib/swr';
import Image from 'next/image';
import useSWR from 'swr';

type DiscordPresence = {
	currently: string;
	details: string;
	time: string;
	imgUrl: string;
};

export const DiscordCard = (presence: DiscordPresence) => (
	<div className="flex flex-row-reverse sm:flex-row sm:space-x-2">
		<Image
			width={24}
			height={24}
			className="w-6 h-6 rounded-lg "
			alt="discord"
			src={presence.imgUrl}
		/>
		<div className="inline-flex flex-col w-full truncate sm:flex-row">
			<p className="font-medium truncate text-primary max-w-max">{presence.currently}</p>
			{presence.details && <span className="hidden mx-2 text-secondary sm:block"> - </span>}
			<p className="truncate text-secondary max-w-max">{presence.details}</p>
		</div>
	</div>
);

const Discord = () => {
	const { data, error } = useSWR<DiscordPresence[]>(
		`https://${process.env.NEXT_PUBLIC_DISCORD_API}/presence`,
		fetcher,
		{ shouldRetryOnError: false }
	);

	if (!data && !error) return <span />;
	if (error) return <span></span>;
	return <DiscordCard key={data[0].details} {...data[0]} />;
};

export default Discord;
