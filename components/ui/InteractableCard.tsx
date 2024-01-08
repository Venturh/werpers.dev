'use client';

import clsx from 'clsx';
import React, { useState } from 'react';
import Clickable, { ClickableProps } from './Clickable';

export default function InteractableCard({ children, className, href, ...props }: ClickableProps) {
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);
	const [hover, setHover] = useState(false);

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		let { left, top } = currentTarget.getBoundingClientRect();
		setMouseX(((clientX - left) / currentTarget.offsetWidth) * 100);
		setMouseY(((clientY - top) / currentTarget.offsetHeight) * 100);
	}

	const isLink = typeof href !== 'undefined';

	const Component = isLink ? Clickable : 'div';

	return (
		<Component
			href={href}
			className={clsx(
				'border-2 border-accent-primary duration-200 rounded-lg bg-primary hover:border-brand-primary/50 hover:scale-[1.01] shadow-sm dark:shadow-none',
				className,
			)}
			style={
				hover
					? {
							background: `radial-gradient(circle 180px at ${mouseX}% ${mouseY}%, rgba(var(--brand-primary-rgba)), transparent 100%)`,
						}
					: undefined
			}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
			onMouseMove={onMouseMove}
			{...props}
		>
			{children}
		</Component>
	);
}
