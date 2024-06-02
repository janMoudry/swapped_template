import { LandingLayout } from "@components/layouts";
import { LandingPage } from "@pages";
import { ModalProvider } from "./contexts/ModalProvider";

const App = () => {
	return (
		<ModalProvider>
			<LandingLayout>
				<LandingPage />
			</LandingLayout>
		</ModalProvider>
	);
};

export default App;
