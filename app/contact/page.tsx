// app/contact/page.tsx
"use client";

import { assets } from "@/assets/assets";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
	const timeout = 5000;
	const [result, setResult] = useState("");

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setResult("Sending....");

		const formData = new FormData(event.target as HTMLFormElement);
		formData.append("access_key", "288ce446-b1bf-41f4-a4fc-ad2ed3a6882f");

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData
			});

			const data = await response.json();

			if (data.success) {
				setResult("Message sent successfully!");
				(event.target as HTMLFormElement).reset();
				// Clear success message after 5 seconds
				setTimeout(() => setResult(""), timeout);
			} else {
				console.log("Error", data);
				setResult(data.message || "Something went wrong. Please try again.");
				// Clear error message after 5 seconds
				setTimeout(() => setResult(""), timeout);
			}
		} catch (error) {
			console.error("Error:", error);
			setResult("Something went wrong. Please try again.");
			setTimeout(() => setResult(""), timeout);
		}
	};

	return (
		<>
			<div className="pt-20">
				<div className="flex w-full justify-center">
					<Link href="/" className="flex items-center gap-2 justify-center bg-[#fbd144] rounded-full p-4 my-10">
						<Image src={assets.arrow_left} alt="arrow left" className="w-2" />
					</Link>
				</div>
				<div className="flex flex-col items-center justify-center mb-8">
					<div className="text-3xl font-bold text-neutral-900 mb-4">
						Get in touch
					</div>
					<p className="text-neutral-700 text-center max-w-md">
						Have a project in mind or want to collaborate? I'd love to hear from you.
						Send me a message and I'll get back to you as soon as possible.
					</p>
				</div>
				<div className="max-w-lg mx-auto">
					<form onSubmit={onSubmit} className="space-y-6">
						<div>
							<label htmlFor="name" className="block text-sm font-medium text-neutral-900 mb-2">
								Name
							</label>
							<input type="text" id="name" name="name" required className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#fbd144] focus:border-transparent outline-none transition-colors" />
						</div>
						<div>
							<label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
								Email
							</label>
							<input type="email" id="email" name="email" required className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#fbd144] focus:border-transparent outline-none transition-colors" />
						</div>
						{/* <div>
							<label htmlFor="subject" className="block text-sm font-medium text-neutral-900 mb-2">
								Subject
							</label>
							<input type="text" id="subject" name="subject" required className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#fbd144] focus:border-transparent outline-none transition-colors" />
						</div> */}
						<div>
							<label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
								Message
							</label>
							<textarea id="message" name="message" required rows={6} className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-[#fbd144] focus:border-transparent outline-none transition-colors resize-none" />
						</div>
						<button type="submit" disabled={result === "Sending...."} className="w-full bg-[#fbd144] hover:bg-[#f5c935] disabled:bg-neutral-300 disabled:cursor-not-allowed text-neutral-900 font-medium py-3 px-6 rounded-lg transition-colors duration-200">
							{result === "Sending...." ? (
								<div className="flex items-center justify-center gap-2">
									<div className="w-4 h-4 border-2 border-neutral-900 border-t-transparent rounded-full animate-spin" />
									Sending...
								</div>
							) : result ? (
								result
							) : (
								"Send"
							)}
						</button>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
}