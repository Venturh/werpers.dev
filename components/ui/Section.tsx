import Clickable from './Clickable';

type Props = {
	title: string;
	subtitle?: string;
	button?: { text: string; to: string };
	children: React.ReactNode;
};

export default function Section({ title, button, children }: Props) {
	return (
		<div>
			<div className="flex justify-between items-center">
				<h1 className=" uppercase font-semibold text-secondary text-sm">{title}</h1>

				{button && (
					<Clickable
						className="group transition ease-in-out text-sm duration-200 text-brand-primary hover:text-brand-secondary"
						href={button.to}
					>
						{button.text}
						<span
							aria-hidden="true"
							className="inline-block ml-1 transition-transform ease-in-out duration-200 translate-x-0 group-hover:translate-x-1"
						>
							→
						</span>
					</Clickable>
				)}
			</div>
			<div className="mt-3">{children}</div>
		</div>
	);
}
