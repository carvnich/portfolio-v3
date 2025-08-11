import Navbar from "@/components/navbar";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"],
	display: "swap",
});

export const metadata: Metadata = {
	title: "Nicholas Carvalho",
	description: "Developer Portfolio",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
	return (
		<html lang="en" className={`${poppins.variable}`}>
			<body className="antialiased bg-gray-200">
				<Navbar />
				<main className="w-full md:max-w-[50%] px-6 md:mx-auto border border-gray-200">
					{children}
				</main>
			</body>
		</html>
	);
}