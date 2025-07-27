import { Box, CircularProgress, Container, CssBaseline, ThemeProvider, useMediaQuery, useTheme } from "@mui/material";
import { lazy, Suspense } from "react";
import PathBackground from "./components/PathBackground";
import Certifications from "./sections/Certifications";
import theme from "./theme/theme";
const NavigationBar = lazy(() => import("./components/NavigationBar"));

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
	backgroundMap: "backgroundMap"
};

function App() {
	const NAVBAR_HEIGHT = 56;

	const isMobile = useMediaQuery(theme.breakpoints.down("md"));

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
				scrollMarginTop: `${NAVBAR_HEIGHT + 16}px`,
				py: 8
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
				<Container disableGutters sx={{ position: "relative", overflow: "hidden" }}>
					<CookieConsent />
					<NavigationBar />
					<Section id={SECTION_IDS.hero} minHeight={`calc(100vh - ${NAVBAR_HEIGHT}px)`}>
						<PathBackground />

						<div
							style={{
								display: "inline-flex",
								flexDirection: "column",
								alignItems: "center",
								marginLeft: "auto",
								backdropFilter: isMobile ? "blur(10px)" : "none"
							}}
						>
							<Hero />
							<About />
						</div>
					</Section>

					<Section id={SECTION_IDS.skills}>
						<div>
							<Skills />
							<Certifications />
						</div>
					</Section>
					<Section id={SECTION_IDS.projects}>
						<Projects />
					</Section>
					<Section id={SECTION_IDS.contact}>
						<Contact />
					</Section>
				</Container>
			</Suspense>
		</ThemeProvider>
	);
}

export default App;
