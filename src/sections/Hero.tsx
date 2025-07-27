import { Box, Button, Stack, Typography, useTheme, useMediaQuery, Menu, MenuItem, Divider } from "@mui/material";
import React, { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

type HeroProps = {
	onViewWork?: () => void;
	onAboutMe?: () => void;
};

const Hero: React.FC<HeroProps> = memo(({ onViewWork, onAboutMe }) => {
	const { t, i18n } = useTranslation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);

	const handleViewWork = useCallback(() => {
		onViewWork?.();
	}, [onViewWork]);

	const handleAboutMe = useCallback(() => {
		onAboutMe?.();
	}, [onAboutMe]);

	const handleCVClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	}, []);

	const handleCVClose = useCallback(() => {
		setAnchorEl(null);
	}, []);

	const handleDownloadCV = useCallback(
		(language?: "en" | "pl") => {
			const currentLanguage = language || i18n.language;
			const fileName = currentLanguage === "pl" ? "/CV_Jakub_Filiks_PL.docx" : "/CV_Jakub_Filiks_EN.docx";
			const link = document.createElement("a");
			link.href = fileName;
			link.download = fileName;
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			handleCVClose();
		},
		[handleCVClose, i18n.language]
	);

	const handleDirectDownload = useCallback(() => {
		handleDownloadCV();
	}, [handleDownloadCV]);

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				position: "relative",
				textAlign: "center",
				pt: 8,
				pb: 8,
				px: 2,
				zIndex: 6
			}}
		>
			<img alt="Jakub Filiks" src="/Portfolio/profile_photo.jpeg" style={{ width: 200, height: 200 }} />
			<Typography
				variant="h1"
				sx={{
					fontWeight: 900,
					letterSpacing: "-2px",
					mb: 1,
					fontSize: { xs: "2.5rem", md: "3.5rem" }
				}}
			>
				{t("hero.title")}
			</Typography>
			<Typography variant="h5" color="text.secondary" sx={{ mb: 2, fontWeight: 400 }}>
				{t("hero.subtitle")}
			</Typography>
			<Typography color="text.secondary" sx={{ maxWidth: 600, mb: 4, mx: "auto" }}>
				{t("hero.description")}
			</Typography>
			<Stack
				direction={isMobile ? "column" : "row"}
				spacing={2}
				sx={{
					width: "auto",
					flexWrap: "nowrap",
					justifyContent: "center",
					mb: 2
				}}
			>
				<Button disabled variant="outlined" size="large" onClick={handleAboutMe} endIcon={<i className="hn hn-info-circle"></i>}>
					{t("hero.aboutMe")}
				</Button>
				<Button
					disabled
					variant="outlined"
					size="large"
					onClick={handleViewWork}
					// color="success"
					endIcon={<i className="hn hn-eye"></i>}
				>
					{t("hero.viewWork")}
				</Button>
				<Button variant="outlined" size="large" color="secondary" href="https://github.com/Xariif" target="_blank" rel="noopener noreferrer" endIcon={<i className="hn hn-github"></i>}>
					{t("hero.github")}
				</Button>
				<Button variant="outlined" size="medium" color="info" onClick={handleDirectDownload} startIcon={<i className="hn hn-download"></i>}>
					{t("hero.downloadCV")}
				</Button>
			</Stack>
		</Box>
	);
});

Hero.displayName = "Hero";

export default Hero;
