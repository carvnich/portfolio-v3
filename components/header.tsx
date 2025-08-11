import { assets, socialIcons, stats } from "@/assets/assets";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
	return (
		<div className="w-full flex flex-col mt-30">
			<div className="flex items-center gap-3">
				<motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.8, type: "spring", stiffness: 100 }}>
					<Image src={assets.profile_image} alt="profile image" className="rounded-full w-32 border-3 border-[#fbd144] p-2" />
				</motion.div>
				<div className="flex flex-col items-start gap-3">
					<div className="text-2xl font-semibold text-neutral-800">Nicholas Carvalho</div>
					<div className="text-sm text-neutral-600">Software Engineer & Front-End Developer</div>
					<div className="flex items-center gap-6">
						{socialIcons.map((icon, index) => (
							<a key={index} href={icon.href} target="_blank" rel="noopener noreferrer">
								<Image src={icon.src} alt={icon.alt} className="w-5" />
							</a>
						))}
					</div>
				</div>
			</div>
			<div className="py-10 flex justify-evenly items-center gap-8">
				{stats.map((stat, index) => (
					<div key={index} className="flex flex-col items-center">
						<span className="text-center text-xl text-neutral-800">{stat.number}</span>
						<span className="text-center text-sm text-neutral-600">{stat.label}</span>
					</div>
				))}
			</div>
			<div className="flex items-center gap-4 h-14">
				<a href="/Nicholas_Carvalho_Resume.pdf" download="Nicholas_Carvalho_Resume.pdf" className="flex flex-1 items-center bg-[#fbd144] rounded-md justify-center gap-3 h-full cursor-pointer">
					<span className="text-lg font-medium">Download CV</span>
					<Image src={assets.arrow_down} alt="down arrow" />
				</a>
				<Link href="/contact" className="bg-white rounded-md justify-center h-full px-5 flex items-center hover:bg-gray-50 transition-colors">
					<Image src={assets.message} alt="message" title="Send me a message" />
				</Link>
				<a href="https://www.linkedin.com/in/nick-carvalho/" target="_blank" className="bg-white rounded-md justify-center h-full px-5 flex items-center">
					<Image src={assets.linkedin} alt="linked in" />
				</a>
			</div>
		</div>
	);
};

export default Header;