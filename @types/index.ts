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
	title: string;
	description: string[];
	time: string;
	role: string;
	url: string;
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
