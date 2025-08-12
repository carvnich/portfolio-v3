import { hardSkills, softSkills } from "@/assets/assets";
import Image from "next/image";

export default function Skills() {
	return (
		<div className="flex flex-col gap-6">
			<div className="text-4xl font-semibold text-neutral-900 my-6">Hard Skills</div>
			<div className="grid grid-cols-6 justify-items-center gap-6 mb-8">
				{hardSkills.map((skill) => (
					<Image key={skill.id} src={skill.icon} alt={skill.alt} title={skill.title} className={`w-18 rounded-lg ${skill.hasborder ? "border border-neutral-400" : ""}`} />
				))}
			</div>
			<div>
				<div className="text-4xl font-semibold text-neutral-900 mb-6">Soft Skills</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
					{softSkills.map((skill) => (
						<span key={skill.id} className="text-neutral-800 font-semibold">
							{skill.name}
						</span>
					))}
				</div>
			</div>
		</div>
	);
}