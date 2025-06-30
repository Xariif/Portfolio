import { Box, Typography, Chip, Stack, Paper } from '@mui/material';
import { memo, useMemo } from 'react';

// Categorized skills - moved outside component for optimization
const skillCategories = {
  frontend: ['React.js', 'Angular', 'JavaScript', 'CSS', 'HTML', 'MUI'],
  backend: ['.NET', 'C#', 'SQL', 'MongoDB', 'PostgreSQL'],
  tools: ['Jira', 'Git', 'Docker'],
  other: ['Linux', 'AWS', 'CI/CD']
} as const;

// Color configurations for skill categories
const categoryColors = {
  frontend: {
    border: '#ffe066',
    shadow: '#ffe06680',
    chipColor: 'primary' as const
  },
  backend: {
    border: '#ff6188',
    shadow: '#ff618880',
    chipColor: 'secondary' as const
  },
  tools: {
    border: '#78dce8',
    shadow: '#78dce880',
    chipColor: 'info' as const
  },
  other: {
    border: '#a9dc76',
    shadow: '#a9dc7680',
    chipColor: 'success' as const
  }
};

const categoryTitles = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools',
  other: 'Other'
};

// Memoized skill category component
const SkillCategory = memo(({ 
  categoryKey, 
  skills, 
  title 
}: { 
  categoryKey: keyof typeof skillCategories;
  skills: readonly string[];
  title: string;
}) => {
  const colors = categoryColors[categoryKey];
  
  const paperStyle = useMemo(() => ({
    p: 2,
    borderRadius: 2,
    backgroundColor: 'rgba(30, 30, 30, 0.8)',
    border: `2px solid ${colors.border}`,
    boxShadow: `0 0 10px ${colors.shadow}`
  }), [colors]);

  const titleStyle = useMemo(() => ({
    mb: 2,
    textAlign: 'center' as const,
    fontFamily: '"Press Start 2P", cursive',
    fontSize: '1.2rem'
  }), []);

  return (
    <Box>
      <Typography variant="h5" sx={titleStyle}>
        {title}
      </Typography>
      <Paper elevation={3} sx={paperStyle}>
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          justifyContent="center"
          sx={{ gap: 1 }}
        >
          {skills.map((skill) => (
            <Chip 
              key={skill} 
              label={skill} 
              color={colors.chipColor}
              variant="outlined" 
              sx={{ 
                m: 0.5,
                '&:hover': {
                  boxShadow: `0 0 8px ${colors.border}`
                }
              }} 
            />
          ))}
        </Stack>
      </Paper>
    </Box>
  );
});

SkillCategory.displayName = 'SkillCategory';

const Skills = memo(() => {
  const categories = useMemo(() => 
    Object.entries(skillCategories).map(([key, skills]) => ({
      key: key as keyof typeof skillCategories,
      skills,
      title: categoryTitles[key as keyof typeof categoryTitles]
    })), []
  );

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      p: 3
    }}>
      <Typography variant="h1" gutterBottom>
        Skills
      </Typography>
      
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 4, 
        width: '100%', 
        maxWidth: 800 
      }}>
        {categories.map(({ key, skills, title }) => (
          <SkillCategory 
            key={key}
            categoryKey={key}
            skills={skills}
            title={title}
          />
        ))}
      </Box>
    </Box>
  );
});

Skills.displayName = 'Skills';

export default Skills;
