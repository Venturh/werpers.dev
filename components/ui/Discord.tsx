import { fetcher } from 'lib/swr';
import useSWR from 'swr';

type DiscordPresence = {
	currently: string;
	details: string;
	time: string;
	imgUrl: string;
};

export default function Discord() {
	const { data, error } = useSWR<DiscordPresence[]>(
		`https://${process.env.NEXT_PUBLIC_DISCORD_API}/presence`,
		fetcher,
		{ shouldRetryOnError: false }
	);

	if (!data && !error) return <span />;
	if (error) return <span></span>;
	return (
		<div className="flex flex-row-reverse sm:flex-row sm:space-x-2">
			<img className="w-6 h-6 rounded-lg " alt="discord" src={data[0]?.imgUrl} />
			<div className="inline-flex flex-col w-full truncate sm:flex-row">
				<p className="font-medium truncate text-primary max-w-max">{data[0]?.currently}</p>
				{data[0].details && <span className="hidden mx-2 text-secondary sm:block"> - </span>}
				<p className="truncate text-secondary max-w-max">{data[0]?.details}</p>
			</div>
		</div>
	);
}
