import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon, MenuIcon } from '@heroicons/react/outline';

import Button from './Button';
import IconButton from './IconButton';

type Props = {
	options: { icon?: React.ReactElement; name: string }[];
	withDisplay?: boolean;
	icon?: React.ReactElement;
	defaultSelected?: string;
	direction?: 'topRight' | 'topLeft';
	onClick: (name: string) => void;
};

const Dropdown = ({ options, withDisplay = false, icon, onClick, defaultSelected }: Props) => {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button as="div">
					<span className="sr-only">Open options</span>
					{withDisplay ? (
						<Button
							color="secondary"
							size="sm"
							rightIcon={icon || <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />}
						>
							{defaultSelected}
						</Button>
					) : (
						<IconButton
							fullRounded
							variant="ghost"
							size="sm"
							ariaLabel="Open options"
							icon={icon || <ChevronDownIcon className="w-5 h-5" aria-hidden="true" />}
						/>
					)}
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 flex flex-col mt-2 origin-top-right rounded-md shadow-lg w-28 bg-secondary ring-1 ring-black ring-opacity-5 focus:outline-none">
					{options.map(({ name, icon }) => (
						<Menu.Item key={name}>
							{({ active }) => (
								<Button
									className="inline-flex justify-start"
									color="secondary"
									onClick={() => onClick(name)}
									leftIcon={icon}
								>
									{name}
								</Button>
							)}
						</Menu.Item>
					))}
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

export default Dropdown;
