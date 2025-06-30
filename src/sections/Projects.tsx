import { 
  Box, 
  CardContent, 
  Stack, 
  Typography, 
  Chip,
  Divider,
  Paper
} from "@mui/material";
import { memo, useMemo } from "react";

// Type definition for experience items
interface Experience {
  title: string;
  company: string;
  location: string;
  date: string;
  description: string;
  skills: string[];
}

// Move experiences outside component for optimization
const experiences: Experience[] = [
	{
		title: "Fullstack C# + React Developer",
		company: "Trackeo",
		location: "Warsaw ",
		date: "10.2024 - present (8 months)",
		description:
			"Developing a system for handling shopping centers using MongoDB, MUI, and a modern frontend/backend stack. Maintaining and implementing new features, ensuring code quality and data integration.",
    skills: ["React", "C#", "MongoDB", "MUI"]
	},
	{
		title: "Support",
		company: "Trackeo",
		location: "Warsaw",
		date: "01.2022 - present (3 years 5 months)",
		description:
			"Email customer service, solving problems related to the production system, close communication with the team. Tools: Office Suite, Azure DevOps, Teams, Slack, FreshDesk.",
    skills: ["Azure DevOps", "FreshDesk", "Teams", "Slack"]
	},
	{
		title: "Programmer - Intern",
		company: "Simeo IO",
		location: "Warsaw",
		date: "01.2024 - 10.2024 (10 months)",
		description:
			"Fullstack Angular + C# .NET, and MSSQL developer. Responsible for creating internal tools for client/team needs.",
    skills: ["Angular", "C#", ".NET", "MSSQL"]
	},
	{
		title: "Professional Practice",
		company: "JMP Flowers",
		location: "Stezyca",
		date: "10.2019 – 10.2019 (1 month)",
		description:
			"Internship under the supervision of a programmer, creating first desktop applications in Windows Forms (C#). Learned basics of programming, interfaces, and application logic.",
    skills: ["C#", "Windows Forms"]
	},
];

// Memoized experience item component
const ExperienceItem = memo(({ experience }: { experience: Experience }) => {
  const paperStyle = useMemo(() => ({
    borderRadius: 2,
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    border: '2px solid #ffe066',
    boxShadow: '0 0 10px rgba(255, 224, 102, 0.4)',
    overflow: 'hidden',
    transition: 'transform 0.2s, box-shadow 0.2s',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 6px 16px rgba(255, 224, 102, 0.5)'
    }
  }), []);

  const headerStyle = useMemo(() => ({
    p: 1,
    background: 'linear-gradient(90deg, rgba(255,224,102,0.2) 0%, rgba(255,224,102,0.4) 100%)'
  }), []);

  const titleStyle = useMemo(() => ({
    color: '#ffe066',
    textShadow: '1px 1px 3px rgba(0,0,0,0.8)',
    fontFamily: '"Press Start 2P", cursive',
    fontSize: { xs: '0.9rem', sm: '1.1rem' },
    lineHeight: 1.4
  }), []);

  return (
    <Paper elevation={3} sx={paperStyle}>
      <Box sx={headerStyle}>
        <Typography variant="h5" fontWeight={700} sx={titleStyle}>
          {experience.title}
        </Typography>
      </Box>
      
      <CardContent sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', mb: 2 }}>
          <Typography
            sx={{
              fontWeight: 'bold',
              color: '#f8f8f2',
              mb: 1
            }}
          >
            <span style={{ color: '#ffe066' }}>@</span> {experience.company} — {experience.location}
          </Typography>
          
          <Typography
            sx={{
              fontWeight: 'bold',
              color: '#ff6188',
              mb: 1,
              fontFamily: '"Press Start 2P", cursive',
              fontSize: '0.7rem',
              display: 'inline-block',
              border: '1px solid #ff6188',
              px: 1.5,
              py: 0.5,
              borderRadius: 1
            }}
          >
            {experience.date}
          </Typography>
        </Box>
        
        <Divider sx={{ mb: 2, borderColor: 'rgba(255, 224, 102, 0.3)' }} />
        
        <Typography 
          variant="body2" 
          sx={{ 
            mb: 2, 
            color: '#f8f8f2',
            lineHeight: 1.6
          }}
        >
          {experience.description}
        </Typography>
        
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
          {experience.skills.map((skill, skillIndex) => (
            <Chip
              key={skillIndex}
              label={skill}
              size="small"
              variant="outlined"
              sx={{
                borderColor: '#78dce8',
                color: '#78dce8',
                '&:hover': {
                  boxShadow: '0 0 8px rgba(120, 220, 232, 0.6)'
                }
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Paper>
  );
});

ExperienceItem.displayName = 'ExperienceItem';

const Projects = memo(() => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 8,
        px: 3,
      }}
    >
      <Typography 
        variant="h3" 
        component="h2" 
        gutterBottom
        sx={{ 
          fontFamily: '"Press Start 2P", cursive',
          fontSize: { xs: '1.8rem', sm: '2.2rem' },
          textAlign: 'center',
          mb: 4,
          textShadow: '0 0 10px rgba(255, 224, 102, 0.6)'
        }}
      >
        Experience
      </Typography>
      
      <Stack spacing={4} sx={{ width: "100%", maxWidth: 800 }}>
        {experiences.map((exp, idx) => (
          <ExperienceItem key={idx} experience={exp} />
        ))}
      </Stack>
    </Box>
  );
});

Projects.displayName = 'Projects';

export default Projects;
