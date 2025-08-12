// components/tabs/TabNavigation.tsx (For any number of tabs)
interface TabNavigationProps {
	tabs: string[];
	activeTab: string;
	onTabChange: (tab: string) => void;
}

export default function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
	const activeIndex = tabs.indexOf(activeTab);

	const getTranslateClass = (index: number) => {
		const translateClasses = ["translate-x-0", "translate-x-full",];
		return translateClasses[index] || "translate-x-0";
	};

	return (
		<div className="relative flex w-full bg-white p-2 rounded-lg">
			<div className={`absolute top-2 bottom-2 bg-gray-200 rounded-lg transition-transform duration-300 ease-out ${getTranslateClass(activeIndex)}`} style={{ width: `calc(${100 / tabs.length}% - 10px)` }} />
			{tabs.map((tab) => (
				<button key={tab} onClick={() => onTabChange(tab)} className={`relative z-10 flex-1 px-6 py-3 font-medium text-sm text-center transition-colors duration-300 cursor-pointer ${activeTab === tab ? "text-black" : "text-neutral-700 hover:text-neutral-900"}`}>
					{tab}
				</button>
			))}
		</div>
	);
}