import { Box, Typography } from "@mui/material";
import { memo } from "react";
import { useTranslation } from "react-i18next";

const About = memo(() => {
  const { t } = useTranslation();
  
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography color="text.secondary" sx={{ mb: 1 }}>
        {t('about.location')}
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ maxWidth: 600, fontStyle: "italic", textAlign: "center", mb: 2 }}
      >
        {t('about.description')}
      </Typography>
    </Box>
  );
});

About.displayName = 'About';

export default About;
