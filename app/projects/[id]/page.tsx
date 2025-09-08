// app/projects/[id]/page.tsx
import { assets, projects } from "@/assets/assets";
import Footer from "@/components/footer";
import Portfolio from "@/components/portfolio";
import { ProjectPageProps } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function ProjectPage({ params }: ProjectPageProps) {
	const { id } = await params;

	// Find the project by ID
	const project = projects.find((p) => p.id === id);

	// If project not found, show 404
	if (!project) {
		notFound();
	}

	return (
		<>
			<div className="pt-20">
				<div className="flex w-full justify-center">
					<Link href="/" className="flex items-center gap-2 justify-center bg-[#fbd144] rounded-full p-4 my-10">
						<Image src={assets.arrow_left} alt="arrow left" className="w-3" />
					</Link>
				</div>
				<div className="flex flex-col items-center justify-center mb-8">
					<div className="text-3xl font-bold text-neutral-900 mb-6">
						{project.title}
					</div>
					<div className="flex gap-4 mb-6">
						{project.stack.map((tech) => (
							<span key={tech.name} className={`text-sm font-medium ${tech.color}`}>
								{tech.name}
							</span>
						))}
					</div>
					<div className="flex items-center gap-8">
						<Link href={project.href} target="_blank" rel="noopener noreferrer" className="">
							<Image src={assets.globe} alt="globe" title="View page" className="w-5" />
						</Link>
						<Link href={project.github} target="_blank" rel="noopener noreferrer" className="">
							<Image src={assets.brand_github} alt="github" title="View code" className="w-5" />
						</Link>
					</div>
				</div>
				<div className={`relative w-full h-96 rounded-lg overflow-hidden mb-8 ${project.bgColor}`}>
					<Image src={project.src} alt={project.alt} fill className="object-contain rounded-4xl p-1" />
				</div>
				<div className="space-y-8">
					{project.overview && (
						<div>
							<div className="text-3xl font-bold text-neutral-900 mb-4">
								Overview
							</div>
							<p className="text-neutral-700">
								{project.overview}
							</p>
						</div>
					)}
					{project.challenge && (
						<div>
							<div className="text-3xl font-bold text-neutral-900 mb-3">
								Challenge
							</div>
							<p className="text-neutral-700">
								{project.challenge}
							</p>
						</div>
					)}
				</div>
				<div className="my-10">
					<div className="text-3xl font-bold text-neutral-900 mb-4">
						Related Projects
					</div>
					<div>
						<Portfolio excludeProjectId={project.id} filterByCategory={project.category} />
					</div>
				</div>
				<div className="flex w-full justify-center">
					<Link href="/" className="flex items-center gap-2 justify-center bg-[#fbd144] rounded-lg px-5 py-3">
						<Image src={assets.arrow_left} alt="arrow left" className="w-2" />
						<span className="text-sm">Back</span>
					</Link>
				</div>
			</div >
			<Footer />
		</>
	);
}