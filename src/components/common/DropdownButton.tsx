import { FC, useState, useEffect, useRef } from "react";
import SvgIcon from "./SvgIcon";

interface DropdownButtonProps {
	children: React.ReactNode;
}

const DropdownButton: FC<DropdownButtonProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				containerRef.current &&
				containerRef.current.contains(event.target as Node)
			) {
				return;
			}

			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<>
			<div
				ref={containerRef}
				className="flex items-center justify-center gap-4 text-primary-dark cursor-pointer relative px-2 hover:underline transition-all duration-300 ease-in-out"
				onClick={() => setIsOpen(!isOpen)}
			>
				<p className=" font-[700]">{children}</p>
				<SvgIcon
					icon="ArrowDown"
					className={`transform ${
						isOpen ? "rotate-180" : ""
					} transition-transform duration-300 ease-in-out`}
				/>

				{isOpen && (
					<div
						className="absolute top-full bg-white shadow-md text-primary-dark px-8 rounded-lg w-auto animate-flip-down animate-delay-0 z-50"
						ref={dropdownRef}
					>
						{Array.from({ length: 5 }).map((_, index) => (
							<p
								key={index}
								className="py-2 text-nowrap"
								onClick={(e) => {
									e.stopPropagation();
									console.log(`Item ${index + 1} clicked`);
								}}
							>
								Item {index + 1}
							</p>
						))}
					</div>
				)}
			</div>
		</>
	);
};

export default DropdownButton;
