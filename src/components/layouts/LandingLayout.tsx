import { Footer, Header } from "@components/common";
import { FC } from "react";
import BackgroundDots from "./BackgroundDots";

interface LandingLayoutProps {
	children: React.ReactNode;
}

const LandingLayout: FC<LandingLayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main className="min-h-screen pt-[8rem] bg-transparent overflow-hidden">
				{children}
				<BackgroundDots />
			</main>
			<Footer />
		</>
	);
};

export default LandingLayout;
