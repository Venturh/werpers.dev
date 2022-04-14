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

	const presence = data ? data[0] : null;

	if ((!data && !error) || error) return <span />;

	return (
		<div className="flex justify-between  ">
			<div className="truncate text-sm">
				<div className="font-medium  truncate text-primary">{presence?.currently}</div>
				<div className="truncate mt-1 text-secondary">{presence?.details}</div>
			</div>
			<img className="w-10 h-full rounded-lg flex-shrink-0 " alt="discord" src={presence?.imgUrl} />
		</div>
	);
}
