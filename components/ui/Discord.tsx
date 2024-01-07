'use client';
import { fetcher } from 'lib/swr';
import useSWR from 'swr';

type DiscordPresence = {
	name: string;
	state: string | null;
	details?: string;
	time?: string;
	imgUrl?: string;
};

export default function Discord() {
	const { data, error } = useSWR<DiscordPresence[]>(
		`https://${process.env.NEXT_PUBLIC_DISCORD_API}/presence`,
		fetcher,
		{ shouldRetryOnError: false },
	);

	const presence = data ? data[0] : null;

	if ((!data && !error) || error) return <span />;

	return (
		<div className="flex justify-between p-2 border rounded-lg border-accent-primary bg-secondary">
			<div className="text-sm truncate">
				<div className="truncate text-brand-primary">{presence?.name}</div>
				<div className="mt-1 truncate text-primary">{presence?.state ?? presence?.details}</div>
			</div>
			{presence?.imgUrl && (
				<img
					// style={{ filter: 'invert(1)' }}
					className="flex-shrink-0 w-10 h-full transform rounded-lg filter invert dark:invert-0"
					alt="discord"
					src={presence?.imgUrl}
				/>
			)}
		</div>
	);
}
