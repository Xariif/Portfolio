import { Box, Typography, Stack, Paper, Chip, useMediaQuery, useTheme, Container } from '@mui/material';
import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

// Types for better type safety
type SkillCategory = keyof typeof skillCategories;

interface SkillCategoryData {
  key: SkillCategory;
  skills: readonly string[];
  title: string;
}

interface SkillCategoryProps {
  categoryKey: SkillCategory;
  skills: readonly string[];
  title: string;
}

// Categorized skills with enhanced organization
const skillCategories = {
  frontend: ['React.js', 'TypeScript', 'JavaScript', 'Next.js', 'CSS3', 'HTML5', 'MUI', 'Responsive Design'],
  backend: ['.NET Core', 'C#', 'Node.js', 'REST APIs', 'GraphQL', 'Microservices'],
  database: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Entity Framework'],
  devops: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Git', 'Azure DevOps']
} as const;

// Modern SkillCategory component with better props interface
const SkillCategory = memo<SkillCategoryProps>(({
  skills,
  title
}) => (
  <Paper
    elevation={2}
    sx={{
      p: 3,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
      '&:hover': {
        transform: 'translateY(-4px)',
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
        color: 'primary.main'
      }}
    >
      {title}
    </Typography>

    <Box sx={{ flexGrow: 1 }}>
      <Stack
        direction="row"
        spacing={1}
        flexWrap="wrap"
        useFlexGap
        sx={{ gap: 1 }}
      >
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            size="small"
          />
        ))}
      </Stack>
    </Box>
  </Paper>
));

SkillCategory.displayName = 'SkillCategory';

// Modern Skills component with improved responsive design
const Skills = memo(() => {
  const { t } = useTranslation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  // Category titles with translations
  const getCategoryTitles = (): Record<SkillCategory, string> => ({
    frontend: t('skills.frontend'),
    backend: t('skills.backend'),
    database: t('skills.databases'),
    devops: t('skills.tools')
  });

  // Memoized categories data
  const categories = useMemo<SkillCategoryData[]>(() => {
    const titles = getCategoryTitles();
    return Object.entries(skillCategories).map(([key, skills]) => ({
      key: key as SkillCategory,
      skills,
      title: titles[key as SkillCategory]
    }));
  }, [t]);

  // Responsive grid columns
  const gridColumns = useMemo(() => {
    if (isMobile) return '1fr';
    if (isTablet) return 'repeat(2, 1fr)';
    return 'repeat(2, 1fr)';
  }, [isMobile, isTablet]);

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h1" gutterBottom align="center">
        {t('skills.title')}
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: gridColumns,
          gap: 3,
          maxWidth: 1000,
          mx: 'auto'
        }}
      >
        {categories.map(({ key, skills, title }) => (
          <SkillCategory
            key={key}
            categoryKey={key}
            skills={skills}
            title={title}
          />
        ))}
      </Box>
    </Container>
  );
});

Skills.displayName = 'Skills';

export default Skills;
