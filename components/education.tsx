import { assets, education } from "@/assets/assets";
import Image from "next/image";

export default function Education() {
	return (
		<div className="my-16">
			<div className="text-4xl font-semibold text-neutral-900 mb-6">Education</div>
			{education.map((edu) => (
				<div key={edu.id} className="mb-8 last:mb-0">
					<div className="flex items-center justify-between">
						<div className="flex-1">
							<div className="text-2xl font-semibold text-neutral-900 mb-4">
								{edu.degree}
							</div>
							<div className="flex items-center h-6 gap-3 mb-4">
								<span className="flex items-center font-medium text-xs bg-[#fbd144] rounded-sm h-full px-3">
									{edu.startYear} - {edu.endYear}
								</span>
								<div className="flex flex-col">
									<span>{edu.institution}</span>
									<span className="text-sm text-neutral-700">{edu.location}</span>
								</div>
							</div>
						</div>
						<div className="mb-4">
							<Image src={assets[edu.icon as keyof typeof assets]} alt={edu.institution} className="w-14 h-14 rounded-full object-cover mb-4" />
						</div>
					</div>
					<p className="text-neutral-900 leading-relaxed">
						{edu.description}
					</p>
				</div>
			))}
		</div>
	);
}