// components/tabs/TabContainer.tsx
"use client";

import { useState } from "react";
import About from "./about";
import Portfolio from "./portfolio";
import TabNavigation from "./tab-navigation";

export default function TabContainer() {
	const [activeTab, setActiveTab] = useState<string>("Portfolio");

	const tabs = ["Portfolio", "About"];

	const renderContent = () => {
		switch (activeTab) {
			case "About":
				return <About />;
			case "Portfolio":
				return <Portfolio />;
			default:
				return <About />;
		}
	};

	return (
		<div className="w-full mt-6">
			<TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
			<div className="mt-6 rounded-lg">
				{renderContent()}
			</div>
		</div>
	);
}