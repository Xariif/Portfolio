import { StrictMode, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider, Box, CircularProgress } from "@mui/material";
import "./index.css";
import "./optimized-styles.css";
import theme from "./theme/theme";

// Lazy load the main App component
const App = lazy(() => import("./App"));

// Import only necessary font weights to reduce bundle size
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/700.css";
import '@hackernoon/pixel-icon-library/fonts/iconfont.css';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense 
        fallback={
          <Box 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'center', 
              height: '100vh',
              backgroundColor: '#000'
            }}
          >
            <CircularProgress color="primary" />
          </Box>
        }
      >
        <App />
      </Suspense>
    </ThemeProvider>
  </StrictMode>,
);
