import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Summary from "./summary";

export default function About() {
	return (
		<div className="">
			<Summary />
			<Experience />
			<Education />
			<Skills />
		</div>
	);
}