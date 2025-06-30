import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import React, { memo, useCallback } from "react";

type HeroProps = {
  onViewWork?: () => void;
  onAboutMe?: () => void;
};

const Hero: React.FC<HeroProps> = memo(({ onViewWork, onAboutMe }) => {
  const handleViewWork = useCallback(() => {
    onViewWork?.();
  }, [onViewWork]);

  const handleAboutMe = useCallback(() => {
    onAboutMe?.();
  }, [onAboutMe]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        textAlign: "center",
        px: 2,
      }}
    >
      <Box
        sx={{
          width: 150,
          height: 150,
          overflow: "hidden",
          mb: 3,
          border: "4px solid #FCE600",
          boxShadow: 4,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Avatar
          alt="Jakub Filiks"
          src="/profile_photo.jpeg"
          sx={{ width: 160, height: 160 }}
        />
      </Box>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 900,
          letterSpacing: "-2px",
          mb: 1,
          fontSize: { xs: "2.5rem", md: "3.5rem" },
        }}
      >
        Jakub Filiks
      </Typography>
      <Typography
        variant="h5"
        color="text.secondary"
        sx={{ mb: 2, fontWeight: 400 }}
      >
        Fullstack Developer · C# · React · SQL · MongoDB
      </Typography>
      <Typography
        color="text.secondary"
        sx={{ maxWidth: 600, mb: 4, mx: "auto" }}
      >
        I am a fullstack developer with over 1.5 years of commercial experience
        working with .NET, React, MongoDB, and SQL. I build end-to-end web
        applications – from backend architecture to modern user interfaces.

        I work on a shopping center management system (Trackeo) and develop
        open-source projects – including a tenant turnover analytics app (C# /
        PostgreSQL / React).

        In my free time, I explore cloud technologies (Oracle Cloud), DevOps, and
        automation. I value clean code, thorough documentation, and collaborative
        team development.
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: "auto",
          flexWrap: "nowrap",
          justifyContent: "center",
          mb: 2,
        }}
      >
        <Button
          variant="contained"
          size="large"
          onClick={handleAboutMe}
          endIcon={<i className="hn hn-info-circle"></i>}
        >
          About Me
        </Button>
        <Button
          variant="outlined"
          size="large"
          onClick={handleViewWork}
          color="success"
          endIcon={<i className="hn hn-eye"></i>}
        >
          View My Work
        </Button>
        <Button
          variant="outlined"
          size="large"
          color="secondary"
          href="https://github.com/Xariif"
          target="_blank"
          rel="noopener noreferrer"
          endIcon={<i className="hn hn-github"></i>}
        >
          GitHub
        </Button>
        <Button
          variant="outlined"
          size="medium"
          href="/CV_Jakub_Filiks_EN.docx"
          download
          color="info"
          endIcon={<i className="hn hn-download"></i>}
        >
          Download CV
        </Button>
      </Stack>
    </Box>
  );
});

Hero.displayName = 'Hero';

export default Hero;
