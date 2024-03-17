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
	location: string;
	url: string;
	role: string;
	description?: string;
	startTime: string;
	endTime?: string;
	imageName: string;
};

export type Project = {
	title: string;
	description?: string;
	tech: Array<string>;
	madeAt?: string;
	slug: string;
	type: 'Frontend' | 'Backend' | 'Fullstack';
	year: string;
	githubUrl?: string;
	pageUrl?: string;
	main?: boolean;
};
