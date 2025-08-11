import { assets } from "@/assets/assets";
import Image from "next/image";

const Navbar = () => {
	return (
		<nav className="w-full fixed bg-white px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
			<Image src={assets.logo} alt="logo" title="Nick" className="w-12" />
			<Image src={assets.change_theme_light} alt="change light" title="dark mode coming soon" />
		</nav>
	);
};

export default Navbar;