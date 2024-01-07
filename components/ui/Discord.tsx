'use client';
import clsx from 'clsx';
import { fetcher } from 'lib/swr';
import useSWR from 'swr';
import InteractableCard from './InteractableCard';

type DiscordPresence = {
	name: 'Offline' | 'Online' | string;
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
		<InteractableCard className="p-2 block">
			<div className="flex items-center text-sm truncate font-medium">
				<div
					className={clsx(
						'w-2 aspect-square shrink-0 h-2 rounded-full animate-pulse',
						presence?.name === 'Offline' ? ' bg-red-400' : 'bg-emerald-400',
					)}
				/>
				<div className="ml-2">
					{presence?.name !== 'Offline' ? 'Online/Working' : 'Offline/Not working'}
				</div>
			</div>

			<span className="ml-4 truncate">{presence?.name}</span>
		</InteractableCard>
	);
}
