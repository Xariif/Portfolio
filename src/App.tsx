import { Box, CircularProgress, useTheme } from "@mui/material";
import { lazy, Suspense } from "react";
import NavigationBar from "./components/NavigationBar";

const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Contact = lazy(() => import("./sections/Contact"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));

const SECTION_IDS = {
	hero: "hero",
	about: "about",
	skills: "skills",
	projects: "projects",
	contact: "contact",
};

function App() {
	// Adjust this value to match your NavigationBar height
	const NAVBAR_HEIGHT = 72;
	const theme = useTheme();

	type SectionProps = {
		id: string;
		children: React.ReactNode;
		minHeight?: string | number;
	};

	const Section: React.FC<SectionProps> = ({ id, children, minHeight }) => (
		<Box
			id={id}
			sx={{
				minHeight,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				scrollMarginTop: `${NAVBAR_HEIGHT + 16}px`,
				py: 8,
			}}
		>
			{children}
		</Box>
	);

	return (
		< Box >
			<CookieConsent />
			<NavigationBar />
			<Section id={SECTION_IDS.hero} minHeight={`calc(100vh - ${NAVBAR_HEIGHT}px)`}>
				<Hero />
			</Section>
			<Section id={SECTION_IDS.about}>
				<About />
			</Section>
			<Section id={SECTION_IDS.skills}>
				<Skills />
			</Section>
			<Section id={SECTION_IDS.projects}>
				<Projects />
			</Section>
			<Section id={SECTION_IDS.contact}>
				<Contact />
			</Section>
		</Box>
	);
}

export default App;
