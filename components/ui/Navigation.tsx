import { CollectionIcon } from '@heroicons/react/outline';

import LanguageSwitch from './LanguageSwitch';

import ThemeToggle from './ThemeToggle';
import IconButton from './IconButton';
import GithubIcon from '../icons/GithubIcon';

import Link from './Link';
import Label from './Label';

export default function Navigation() {
	return (
		<div className="sticky border-b border-accent-primary top-0 z-10 w-full h-16 flex items-center backdrop-blur  bg-opacity-30 bg-primary ">
			<div className="flex items-center justify-between w-full">
				<Link to="/">
					<Label> werpers.dev</Label>
				</Link>
				<div className="flex items-center divide-x divide-accent-primary">
					<div className="pr-2">
						<IconButton
							title="Projects"
							variant="ghost"
							href="/projects"
							ariaLabel="projects"
							fullRounded
							size="sm"
							icon={<CollectionIcon />}
						/>
					</div>
					<div className="px-2">
						<IconButton
							title="Github"
							variant="ghost"
							href="https://github.com/Venturh/werpers.dev"
							out
							ariaLabel="github-icon"
							fullRounded
							size="sm"
							icon={<GithubIcon />}
						/>
					</div>
					<div className="pl-2 space-x-2">
						<LanguageSwitch />
						<ThemeToggle />
					</div>
				</div>
			</div>
		</div>
	);
}
