import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	colorSchemes: { light: true, dark: true },
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920
		}
	},
	palette: {
		mode:'light',
		primary: {
			main: "#89ABE3"
		},
		secondary: {
			main: "#EA738D"
		},
		success: {
			main: "#22bb33"
		},
		error: {
			main: "#bb2124"
		},
		warning: {
			main: "#f0ad4e"
		},
		info: {
			main: "#5bc0de"
		}
	},
	typography: {
		fontFamily: '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
		h1: {
			fontWeight: 700,
			letterSpacing: "3px",
			fontSize: "3rem",
			lineHeight: 1.2
		},
		h2: {
			fontWeight: 600,
			letterSpacing: "2px",
			fontSize: "2.2rem",
			lineHeight: 1.3,
			color: "primary.main"
		},
		h3: {
			fontWeight: 500,
			fontSize: "1.8rem",
			lineHeight: 1.4,
			letterSpacing: "1.5px",
			color: "secondary.main"
		},
		h4: {
			fontWeight: 500,
			fontSize: "1.4rem",
			lineHeight: 1.4,
			letterSpacing: "1px",
			color: "success.main"
		},
		h5: {
			fontWeight: 400,
			fontSize: "1.1rem",
			lineHeight: 1.5,
			letterSpacing: "0.8px",
			color: "info.main"
		},
		h6: {
			fontWeight: 400,
			fontSize: "1rem",
			lineHeight: 1.5,
			letterSpacing: "0.5px",
			color: "text.primary"
		},
		body1: {
			fontSize: "1rem",
			lineHeight: 1.7,
			letterSpacing: "0.3px",
			fontFamily: '"Space Grotesk", "Space Grotesk Placeholder", sans-serif'
		},
		body2: {
			fontSize: "0.9rem",
			lineHeight: 1.6,
			letterSpacing: "0.2px",
			fontFamily: '"Space Grotesk", "Space Grotesk Placeholder", sans-serif'
		},
		button: {
			textTransform: "uppercase",
			fontWeight: 600,
			letterSpacing: "2px",
			fontSize: "0.9rem",
			fontFamily: '"Space Grotesk", "Space Grotesk Placeholder", sans-serif'
		}
	},
	shape: {
		borderRadius: 16
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					fontWeight: 600,
					padding: "14px 28px",
					margin: "4px",
					fontSize: "0.9rem",
					letterSpacing: "2px",
					textTransform: "uppercase",
					border: "1px solid transparent",
					fontFamily: '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
					transition: "all 0.3s ease-in-out",
					"&:hover": {
						transform: "translateY(-2px)"
					}
				},

				outlined: ({ theme }) => ({
					border: "2px solid",
					borderColor: theme.palette.primary.main,
					color: theme.palette.primary.main,
					background: "transparent",
					backdropFilter: "blur(10px)",
					transition: "all 0.3s ease-in-out",
					"&:hover": {
						backgroundColor: theme.palette.primary.main,
						color: theme.palette.primary.contrastText,
						transform: "translateY(-2px)",
						boxShadow: `0 8px 25px ${theme.palette.primary.main}40`
					},
					"&.MuiButton-outlinedSecondary": {
						borderColor: theme.palette.secondary.main,
						color: theme.palette.secondary.main,
						"&:hover": {
							backgroundColor: theme.palette.secondary.main,
							color: theme.palette.secondary.contrastText,
							boxShadow: `0 8px 25px ${theme.palette.secondary.main}40`
						}
					},
					"&.MuiButton-outlinedSuccess": {
						borderColor: theme.palette.success.main,
						color: theme.palette.success.main,
						"&:hover": {
							backgroundColor: theme.palette.success.main,
							color: theme.palette.success.contrastText,
							boxShadow: `0 8px 25px ${theme.palette.success.main}40`
						}
					},
					"&.MuiButton-outlinedInfo": {
						borderColor: theme.palette.info.main,
						color: theme.palette.info.main,
						"&:hover": {
							backgroundColor: theme.palette.info.main,
							color: theme.palette.info.contrastText,
							boxShadow: `0 8px 25px ${theme.palette.info.main}40`
						}
					}
				})
			}
		},
		MuiPaper: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: 12,
					position: "relative",
					overflow: "hidden",
					"&:before": {
						content: '""',
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						height: "1px",
						opacity: 0.6
					}
				})
			}
		},
		MuiTextField: {
			styleOverrides: {
				root: ({ theme }) => ({
					"& .MuiOutlinedInput-root": {
						borderRadius: 8,
						background: theme.palette.background.paper,
						backgroundOpacity: 0.6,
						backdropFilter: "blur(10px)",
						"& fieldset": {
							borderColor: theme.palette.primary.main,
							borderWidth: "1px"
						}
					},
					"& .MuiInputLabel-root": {
						color: theme.palette.text.secondary,
						fontFamily: '"Space Grotesk", "Space Grotesk Placeholder", sans-serif'
					},
					"& .MuiInputLabel-root.Mui-focused": {
						color: theme.palette.primary.main
					}
				})
			}
		},
		MuiChip: {
			styleOverrides: {
				root: ({ theme }) => ({
					borderRadius: 16,
					border: "1px solid",
					borderColor: theme.palette.primary.main,
					fontFamily: '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
					fontSize: "0.75rem",
					fontWeight: 500,
					backgroundOpacity: 0.1,
					backdropFilter: "blur(10px)",
					color: theme.palette.text.primary
				})
			}
		},
		MuiTooltip: {
			styleOverrides: {
				tooltip: ({ theme }) => ({
					color: theme.palette.primary.main,
					border: "1px solid",
					borderColor: theme.palette.primary.main,
					borderRadius: 8,
					fontSize: "0.75rem",
					fontFamily: '"Space Grotesk", "Space Grotesk Placeholder", sans-serif',
					backdropFilter: "blur(20px)",
					padding: "8px 12px"
				}),
				arrow: ({ theme }) => ({
					color: theme.palette.primary.main
				})
			}
		}
	}
});

export default theme;
