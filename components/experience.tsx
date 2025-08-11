import { assets, workExperience } from "@/assets/assets";
import Image from "next/image";

export default function Experience() {
	return (
		<div className="my-16">
			<div className="text-4xl font-semibold text-neutral-900 mb-6">Experience</div>
			{workExperience.map((experience) => (
				<div key={experience.id} className="mb-8 last:mb-0">
					<div className="flex items-center justify-between">
						<div className="flex-1">
							<div className="text-2xl font-semibold text-neutral-900 mb-4">
								{experience.title}
							</div>
							<div className="flex items-center h-6 gap-3 mb-4">
								<span className="flex items-center font-medium text-xs bg-[#fbd144] rounded-sm h-full px-3">
									{experience.startYear} - {experience.endYear}
								</span>
								<div className="flex flex-col">
									<span>{experience.company}</span>
									<span className="text-sm text-neutral-700">{experience.location}</span>
								</div>
							</div>
						</div>
						<div className="mb-4">
							<Image src={assets[experience.icon as keyof typeof assets]} alt={experience.company} className="w-14 h-14 rounded-full object-cover mb-4" />
						</div>
					</div>
					<p className="text-neutral-900 leading-relaxed">
						{experience.description}
					</p>
				</div>
			))}
		</div>
	);
}