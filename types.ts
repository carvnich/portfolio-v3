// types/project.ts
export interface StackItem {
	name: string;
	color: string;
}

export interface Project {
	id: string;
	title: string;
	src: string;
	alt: string;
	bgColor: string;
	stack: StackItem[];
	href: string;
	github: string;
	overview?: string;
	challenge?: string;
	category?: string;
}

export interface ProjectPageParams {
	id: string;
}

export interface ProjectPageProps {
	params: Promise<ProjectPageParams>;
}

export interface PortfolioProps {
	excludeProjectId?: string;
	filterByCategory?: string;
}