import { Box, Typography } from "@mui/material";
import { memo } from "react";

const About = memo(() => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Typography color="text.secondary" sx={{ mb: 1 }}>
      Warsaw, Poland
    </Typography>
    <Typography
      color="text.secondary"
      sx={{ maxWidth: 600, fontStyle: "italic", textAlign: "center", mb: 2 }}
    >
      I'm a fullstack developer from Warsaw, passionate about clean code and
      practical development. I specialize in React, .NET and MongoDB. I
      currently work on a shopping center management system and build personal
      projects like a tenant turnover analytics platform. In my spare time, I
      explore cloud services (Oracle), DevOps, and system automation.
    </Typography>
  </Box>
));

About.displayName = 'About';

export default About;
