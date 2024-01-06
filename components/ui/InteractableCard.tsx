'use client';

import clsx from 'clsx';
import React, { useRef, useState, MouseEvent } from 'react';
import Clickable, { ClickableProps } from './Clickable';

export default function InteractableCard({ children, className, href, ...props }: ClickableProps) {
	const [mouseX, setMouseX] = useState(0);
	const [mouseY, setMouseY] = useState(0);
	const [over, setOver] = useState(false);

	const gradientStyle: React.CSSProperties | undefined = over
		? {
				background: `radial-gradient(circle 180px at ${mouseX}% ${mouseY}%, rgba(var(--brand-primary-rgba)), transparent 100%)`,
			}
		: undefined;

	function onMouseMove({ currentTarget, clientX, clientY }: any) {
		let { left, top } = currentTarget.getBoundingClientRect();
		setMouseX(((clientX - left) / currentTarget.offsetWidth) * 100);
		setMouseY(((clientY - top) / currentTarget.offsetHeight) * 100);
	}

	return (
		<Clickable
			href={href}
			className={clsx(
				'border-2 border-accent-primary duration-200 rounded-lg bg-primary hover:border-brand-primary/50 hover:scale-[101%]',
				className,
			)}
			style={gradientStyle}
			onMouseEnter={() => setOver(true)}
			onMouseLeave={() => setOver(false)}
			onMouseMove={onMouseMove}
			{...props}
		>
			{children}
		</Clickable>
	);
}
