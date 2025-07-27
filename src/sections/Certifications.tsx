import { Box, Typography, Chip, Stack, Link, useTheme, useMediaQuery } from "@mui/material";
import { t } from "i18next";
import { memo } from "react";

const certifications = [
	{
		label: "From Relational Model (SQL) to MongoDB's Document Model",
		year: "2025",
		issuer: "MongoDB",
		url: "https://www.credly.com/badges/996d6a20-7233-41b2-a42e-2adf80e75294/linked_in_profile"
	},
	{
		label: "MongoDB Schema Design Optimization Skill Badge",
		year: "2025",
		issuer: "MongoDB",
		url: "https://www.credly.com/badges/554fbb99-1267-4317-953b-eabd263c84a4/linked_in_profile"
	},
	{
		label: "MongoDB Schema Design Patterns and Anti-patterns Skill Badge",
		year: "2025",
		issuer: "MongoDB",
		url: "https://www.credly.com/badges/87851abd-d2fe-4228-9b59-34172f87e424/linked_in_profile"
	},
	{
		label: "Foundational C# with Microsoft",
		issuer: "freeCodeCamp",
		year: "2023",
		url: "https://www.freecodecamp.org/certification/fcc0069298c-8ef1-4249-a8c6-477745b984ae/foundational-c-sharp-with-microsoft"
	},
	{
		label: "CERTIFICATE IN ENGLISH FOR INFORMATION TECHNOLOGY B2 (CEFR)",
		year: "2023",
		issuer: "Warszawska Wyższa Szkoła Informatyki"
	},
	{
		label: "CCNA: Switching, Routing, and Wireless Essentials",
		year: "2023",
		issuer: "Cisco",
		url: "https://www.credly.com/badges/a17864a7-4c17-4c68-ae96-f5150a0530d8/linked_in_profile"
	},
	{
		label: "CCNA: Introduction to Networks",
		year: "2023",
		issuer: "Cisco",
		url: "https://www.credly.com/badges/cd6fa4b7-7e99-4ce8-a45d-0e36b879a903/linked_in_profile"
	},
	{
		label: "Microsoft Windows Server 2012 (MTA)",
		year: "2020",
		issuer: "ZETO Lublin Sp. z o.o."
	}
];
const Certifications = memo(() => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<Box sx={{ py: 8, px: 2 }} gap={2} display="flex" flexDirection="column" alignItems="center">
			<Typography variant="h2" align="center" gutterBottom>
				{t("certifications.title")}
			</Typography>

	
				{certifications.map((c, idx) => (
					<Box
						key={idx}
						sx={{
							border: "1px solid",
							borderColor: "primary.light",
							borderRadius: "1rem",
							px: 2,
							py: 1,
							boxShadow: 1,
							fontSize: "1rem",
							minWidth: isMobile ? "100%" : 250,
							color: "text.primary",
							"& a": {
								color: "primary.main",
								fontWeight: 600,
								textDecoration: "none",
								"&:hover": {
									color: "primary.dark",
									textDecoration: "underline"
								}
							}
						}}
					>
						{c.url ? (
							<Link href={c.url} target="_blank" rel="noopener">
								{c.label}
							</Link>
						) : (
							<span>{c.label}</span>
						)}
						{c.issuer ? ` – ${c.issuer}` : ""}
						{c.year ? ` (${c.year})` : ""}
					</Box>
				))}
		</Box>
	);
});

export default Certifications;