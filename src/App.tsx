import { Box, CircularProgress, Container, CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { lazy, Suspense } from "react";
import PathBackground from "./components/PathBackground";
import Certifications from "./sections/Certifications";
import theme from "./theme/theme";
const NavigationBar = lazy(() => import("./components/NavigationBar"));

const Hero = lazy(() => import("./sections/Hero"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Contact = lazy(() => import("./sections/Contact"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));

const SECTION_IDS = {
	hero: "hero",
	about: "about",
	skills: "skills",
	certifications: "certifications",
	projects: "projects",
	contact: "contact",
	backgroundMap: "backgroundMap"
};

function App() {
	const NAVBAR_HEIGHT = 56;

	type SectionProps = {
		id: string;
		children: React.ReactNode;
		minHeight?: string | number;
	};

	const Section: React.FC<SectionProps> = ({ id, children, minHeight }) => (
		<Box
			id={id}
			sx={{
				minHeight: minHeight || "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				width: "100%"
			}}
		>
			{children}
		</Box>
	);

	return (
		<ThemeProvider theme={theme} defaultMode="light">
			<CssBaseline />
			<Suspense
				fallback={
					<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
						<CircularProgress />
					</Box>
				}
			>
				<CookieConsent />
				<NavigationBar />
				<Section id={SECTION_IDS.hero} minHeight={`calc(100vh - ${NAVBAR_HEIGHT}px)`}>
					<Container
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",						
						}}
					>
						<PathBackground />
						<Hero />
					</Container>
				</Section>
				<Section id={SECTION_IDS.skills}>
					<Skills />
				</Section>
				<Section id={SECTION_IDS.certifications}>
					<Certifications />
				</Section>
				<Section id={SECTION_IDS.projects}>
					<Projects />
				</Section>
				<Section id={SECTION_IDS.contact}>
					<Contact />
				</Section>
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
