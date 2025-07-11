import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider, Box, CircularProgress } from "@mui/material";
import "./index.css";
import "./i18n";
import theme from "./theme/theme";

const App = lazy(() => import("./App"));

console.log(theme)

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<ThemeProvider theme={theme} defaultMode='light'>
			<CssBaseline />
			<Suspense
				fallback={
					<Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
						<CircularProgress />
					</Box>
				}
			>
				<App />
			</Suspense>
		</ThemeProvider>
	</StrictMode>
);
