import { Box } from "@mui/material";
import { lazy, Suspense } from "react";

// Lazy load components for better performance
const Hero = lazy(() => import("./sections/Hero"));
const About = lazy(() => import("./sections/About"));
const Projects = lazy(() => import("./sections/Projects"));
const Skills = lazy(() => import("./sections/Skills"));
const Contact = lazy(() => import("./sections/Contact"));
const CookieConsent = lazy(() => import("./components/CookieConsent"));
const PacmanBackground = lazy(() => import("./components/PacmanBackground"));

// Loading placeholder component
const SectionLoader = () => (
	<Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
		<Box sx={{ color: 'primary.main' }}>Loading...</Box>
	</Box>
);

function App() {
	return (
		<>
			<Suspense fallback={null}>
				<PacmanBackground />
			</Suspense>
			<Suspense fallback={null}>
				<CookieConsent />
			</Suspense>

			<Box
				sx={{
					height: "100vh",
					overflowY: "auto"
				}}
				data-scroll-container
			>
				<Box
					sx={{
						marginTop: "25%",
						marginBottom: "25%"
					}}
				>
					<Suspense fallback={<SectionLoader />}>
						<Hero />
					</Suspense>

					<Suspense fallback={<SectionLoader />}>
						<About />
					</Suspense>

					<Suspense fallback={<SectionLoader />}>
						<Skills />
					</Suspense>

					<Suspense fallback={<SectionLoader />}>
						<Projects />
					</Suspense>

					<Suspense fallback={<SectionLoader />}>
						<Contact />
					</Suspense>
				</Box>
			</Box>
		</>
	);
}

export default App;
