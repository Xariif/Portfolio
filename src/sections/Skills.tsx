import { Box, Typography, Stack, Paper, Chip, useMediaQuery, useTheme, Container, Zoom } from "@mui/material";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

// Types for better type safety
type SkillCategory = keyof typeof skillCategories;

interface SkillCategoryData {
	key: SkillCategory;
	skills: readonly string[];
	title: string;
	icon: string;
}

interface SkillCategoryProps {
	categoryKey: SkillCategory;
	skills: readonly string[];
	title: string;
	icon: string;
}

// Categorized skills with enhanced organization
const skillCategories = {
	frontend: {
		skills: ["React.js", "TypeScript", "JavaScript", "Material UI", "CSS3", "HTML5", "Responsive Design"],
		icon: "hn-code-solid"
	},
	backend: {
		skills: [".NET Core", "C#", "Node.js", "REST APIs", "Microservices", "SignalR"],
		icon: "hn-robot-solid"
	},
	database: {
		skills: ["MSSQL", "PostgreSQL", "MongoDB", "Entity Framework"],
		icon: "hn-data-science"
	},
	devops: {
		skills: ["Docker", "CI/CD", "Git", "Azure DevOps", "Oracle Cloud"],
		icon: "hn-globe-solid"
	}
} as const;

// Modern SkillCategory component with better props interface
const SkillCategory = memo<SkillCategoryProps>(({ skills, title, icon }) => (
	<Paper
		elevation={2}
		sx={{
			p: 3,
			height: "100%",
			display: "flex",
			flexDirection: "column",
			transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
			"&:hover": {
				transform: "translateY(-4px)",
				boxShadow: (theme) => theme.shadows[8]
			}
		}}
	>
		<Typography
			variant="h5"
			component="h3"
			gutterBottom
			sx={{
				fontWeight: 600,
				mb: 2,
				color: "primary.main",
				justifyContent: "space-between",
				display: "flex"
			}}
		>
			{title}
			<i
				className={`hn ${icon}`}
				aria-hidden="true"
				style={{
					fontSize: 32
				}}
			></i>
		</Typography>

		<Box>
			<Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ gap: 1 }}>
				{skills.map((skill) => (
					<Chip key={skill} label={skill} size="small" />
				))}
			</Stack>
		</Box>
	</Paper>
));

SkillCategory.displayName = "SkillCategory";

// Modern Skills component with improved responsive design
const Skills = memo(() => {
	const { t } = useTranslation();
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("md"));
	const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	// Category titles with translations
	const getCategoryTitles = (): Record<SkillCategory, string> => ({
		frontend: t("skills.frontend"),
		backend: t("skills.backend"),
		database: t("skills.databases"),
		devops: t("skills.tools")
	});
	

	// Memoized categories data
	const categories = useMemo<SkillCategoryData[]>(() => {
		const titles = getCategoryTitles();
		return Object.entries(skillCategories).map(([key, value]) => ({
			key: key as SkillCategory,
			skills: value.skills,
			title: titles[key as SkillCategory],
			icon: value.icon
		}));
	}, [t]);

	// Responsive grid columns
	const gridColumns = useMemo(() => {
		if (isMobile) return "1fr";
		if (isTablet) return "repeat(2, 1fr)";
		return "repeat(2, 1fr)";
	}, [isMobile, isTablet]);

	return (
		<Container maxWidth="lg" sx={{ py: 8 }}>
			<Typography variant="h1" gutterBottom align="center" display="flex" justifyContent="center" alignItems="center">
				{t("skills.title")}
				<i className="hn hn-life-hacking" style={{ fontSize: 48, marginLeft: 8 }}></i>
			</Typography>
			<Box ref={ref}>
				<Box
					sx={{
						display: "grid",
						gridTemplateColumns: gridColumns,
						gap: 3
					}}
				>
					{categories.map(({ key, skills, title, icon }) => (
						<Zoom in={inView} style={{ transitionDelay: inView ? `${200 * categories.findIndex((c) => c.key === key)}ms` : "0ms" }} key={key}>
							<Box>
								<SkillCategory categoryKey={key} skills={skills} title={title} icon={icon} />
							</Box>
						</Zoom>
					))}
				</Box>
			</Box>
		</Container>
	);
});

Skills.displayName = "Skills";

export default Skills;
