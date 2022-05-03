export type Navlink = {
	name: string;
	to: string;
};

export type Social = {
	name: string;
	link?: string;
	icon?: string;
	internal?: boolean;
};

export type Experience = {
	company: string;
	startTime: string;
	endTime?: string;
	location: string;
	url: string;
	steps: {
		role: string;
		description: string[];
		status: string;
		time: string;
	}[];
};

export type Project = {
	title: string;
	description?: string;
	descriptionEn?: string;
	tech: Array<string>;
	madeAt?: string;
	slug: string;
	type: 'Frontend' | 'Backend' | 'Fullstack';
	year: string;
	githubUrl?: string;
	pageUrl?: string;
	main?: boolean;
};
