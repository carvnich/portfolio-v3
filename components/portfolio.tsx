import { projects } from "@/assets/assets";
import { PortfolioProps } from "@/types";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio({ excludeProjectId, filterByCategory }: PortfolioProps) {
	let filteredProjects = projects;

	if (excludeProjectId) { filteredProjects = filteredProjects.filter(project => project.id !== excludeProjectId); }
	if (filterByCategory) { filteredProjects = filteredProjects.filter(project => project.category === filterByCategory); }

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
			{filteredProjects.map((project) => (
				<div key={project.id} className="flex flex-col">
					<Link href={`/projects/${project.id}`}>
						<div className="relative h-48 rounded-lg mb-3 cursor-pointer" style={{ backgroundColor: project.bgColor }}>
							<Image src={project.src} alt={project.alt} fill className="object-contain rounded-4xl p-4 hover:scale-105 transition" />
						</div>
					</Link>
					<div className="flex items-center justify-between gap-2 mb-1">
						<div className="flex gap-4">
							{project.stack.map((tech) => (
								<span key={tech.name} className={`text-sm ${tech.color}`}>
									{tech.name}
								</span>
							))}
						</div>
					</div>
					<h3 className="text-lg font-medium text-gray-900 mb-1">
						{project.title}
					</h3>
				</div>
			))}
		</div>
	);
}