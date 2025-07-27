import { Box, CardContent, Stack, Typography, Chip, Divider, Paper } from "@mui/material";
import { memo } from "react";
import { useTranslation } from "react-i18next";

// Type definition for experience items
interface Experience {
	title: string;
	company: string;
	location: string;
	date: string;
	description: string;
	skills: string[];
}

// Memoized experience item component
const ExperienceItem = memo(({ experience }: { experience: Experience }) => {
	return (
		<Paper>
			<Box sx={{ p: 2 }}>
				<Typography variant="h5" gutterBottom>
					{experience.title}
				</Typography>
			</Box>

			<CardContent>
				<Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", mb: 2 }}>
					<Typography variant="body1">
						@ {experience.company} — {experience.location}
					</Typography>

					<Chip label={experience.date} />
				</Box>

				<Divider sx={{ mb: 2 }} />

				<Typography variant="body2" sx={{ mb: 2 }}>
					{experience.description}
				</Typography>

				<Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2 }}>
					{experience.skills.map((skill, skillIndex) => (
						<Chip key={skillIndex} label={skill} size="small" />
					))}
				</Box>
			</CardContent>
		</Paper>
	);
});

ExperienceItem.displayName = "ExperienceItem";

const Projects = memo(() => {
	const { t } = useTranslation();

	// Get experiences from translations
	const experiences: Experience[] = t("projects.experiences", { returnObjects: true }) as Experience[];

	return (
		<Box sx={{ py: 8, px: 3 }}>
			<Typography variant="h1" gutterBottom align="center" display="flex" justifyContent="center" alignItems="center">
				{t("projects.experience")}
				<i className="hn hn-business" style={{ fontSize: 48, marginLeft: 8 }}></i>
			</Typography>

			<Stack spacing={4} sx={{ maxWidth: 800, mx: "auto" }}>
				{experiences.map((exp: Experience, idx: number) => (
					<ExperienceItem key={idx} experience={exp} />
				))}
			</Stack>
		</Box>
	);
});

Projects.displayName = "Projects";

export default Projects;
