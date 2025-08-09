import { Box, CardContent, Stack, Typography, Chip, Divider, Paper, Zoom } from "@mui/material";
import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useInView } from "react-intersection-observer";

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
interface ExperienceItemProps {
	id: number;
	experience: Experience;
	inView: boolean;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({ id, experience, inView }) => {
	return (
		<Zoom in={inView} timeout={id*1000}>
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
		</Zoom>
	);
};

ExperienceItem.displayName = "ExperienceItem";

const Projects = memo(() => {
	const { t } = useTranslation();
	const { ref, inView } = useInView({
		threshold: 0.2,
		triggerOnce: true
	});

	// Get experiences from translations
	const experiences: Experience[] = t("projects.experiences", { returnObjects: true }) as Experience[];

	return (
		<Box sx={{ py: 8, px: 3 }} ref={ref}>
			<Typography variant="h1" gutterBottom align="center" display="flex" justifyContent="center" alignItems="center">
				{t("projects.experience")}
				<i className="hn hn-business" style={{ fontSize: 48, marginLeft: 8 }}></i>
			</Typography>

			<Stack spacing={4} sx={{ maxWidth: 800, mx: "auto" }}>
				{experiences.map((exp: Experience, idx: number) => (
					<ExperienceItem key={idx} id={idx} experience={exp} inView={inView} />
				))}
			</Stack>
		</Box>
	);
});

Projects.displayName = "Projects";

export default Projects;
