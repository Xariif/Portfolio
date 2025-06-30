import {
  Box,
  Link,
  Paper,
  Tooltip,
  Typography,
} from "@mui/material";
import { useState, memo, useCallback, useMemo } from "react";

// Type definition for contact items
interface ContactItem {
  id: string;
  label: string;
  value: string;
  link: string;
  icon: string;
  color: string;
  hoverText: string;
}

// Static contact info moved outside component
const contactInfo: ContactItem[] = [
  {
    id: "email",
    label: "Email",
    value: "jakubfiliks7@gmail.com",
    link: "mailto:jakubfiliks7@gmail.com",
    icon: "hn hn-threads",
    color: "#ffe066", // Yellow - Pac-Man color
    hoverText: "Send me an email",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+48 668 022 456",
    link: "tel:+48668022456",
    icon: "hn-phone-ringing-low",
    color: "#ff6188", // Pink - Ghost color
    hoverText: "Call me",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Jakub Filiks",
    link: "https://www.linkedin.com/in/jakub-filiks-4537b9225/",
    icon: "hn-linkedin",
    color: "#78dce8", // Blue - Ghost color
    hoverText: "View my LinkedIn profile",
  },
  {
    id: "github",
    label: "GitHub",
    value: "Xariif",
    link: "https://github.com/Xariif",
    icon: "hn-github",
    color: "#a9dc76", // Green - Pixel color
    hoverText: "Check out my GitHub repositories",
  },
];

// Memoized contact item component
const ContactItemComponent = memo(({ 
  item, 
  activeItem,
  onItemClick 
}: { 
  item: ContactItem;
  activeItem: string | null;
  onItemClick: (id: string, value: string) => void;
}) => {
  const isActive = activeItem === item.id;
  const isCopyable = item.id === "phone" || item.id === "email";

  const handleClick = useCallback((e: React.MouseEvent) => {
    if (isCopyable) {
      onItemClick(item.id, item.value);
      e.preventDefault();
    }
  }, [isCopyable, item.id, item.value, onItemClick]);

  const paperStyle = useMemo(() => ({
    p: 2,
    display: "flex",
    flexDirection: "column" as const,
    alignItems: "center",
    backgroundColor: "rgba(40, 40, 40, 0.7)",
    border: `2px solid ${item.color}`,
    borderRadius: 2,
    transition: "all 0.3s ease",
    position: "relative" as const,
    overflow: "hidden" as const,
    height: "100%",
    "&:hover": {
      transform: "translateY(-5px)",
      boxShadow: `0 10px 20px rgba(0,0,0,0.2), 0 0 15px ${item.color}80`,
      "& .icon": {
        transform: "scale(1.2)",
        color: item.color,
      },
    },
    ...(isActive && {
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: `${item.color}30`,
        animation: "pulse 1s infinite",
      }
    })
  }), [item.color, isActive]);

  const iconStyle = useMemo(() => ({
    fontSize: "2.5rem",
    color: item.color,
    marginBottom: "16px",
    transition: "all 0.3s ease",
    textShadow: `0 0 8px ${item.color}80`,
  }), [item.color]);

  return (
    <Box sx={{ display: "flex", minWidth: "200px", justifyContent: "center" }}>
      <Tooltip title={item.hoverText} placement="top" arrow>
        <Link
          href={item.link}
          target={!isCopyable ? "_blank" : undefined}
          rel="noopener noreferrer"
          underline="none"
          sx={{ width: "100%", display: "block" }}
          onClick={handleClick}
        >
          <Paper sx={paperStyle}>
            <i className={`${item.icon} icon hn`} style={iconStyle} />

            <Typography
              sx={{
                fontFamily: '"Press Start 2P", cursive',
                fontSize: "0.7rem",
                color: item.color,
                mb: 1,
              }}
            >
              {item.label}
            </Typography>

            <Typography
              sx={{
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#f8f8f2",
                textAlign: "center",
                wordBreak: "break-word",
              }}
            >
              {isActive ? "Copied!" : item.value}
            </Typography>
          </Paper>
        </Link>
      </Tooltip>
    </Box>
  );
});

ContactItemComponent.displayName = 'ContactItemComponent';

const Contact = memo(() => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = useCallback((id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setActiveItem(id);
    setTimeout(() => setActiveItem(null), 2000);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        px: 3,
        py: 5,
      }}
    >
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontFamily: '"Press Start 2P", cursive',
          fontSize: { xs: "1.8rem", sm: "2.2rem" },
          mb: 5,
          textAlign: "center",
          textShadow: "0 0 10px rgba(255, 224, 102, 0.6)",
        }}
      >
        Contact Me
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 4,
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {contactInfo.map((item) => (
          <ContactItemComponent
            key={item.id}
            item={item}
            activeItem={activeItem}
            onItemClick={handleItemClick}
          />
        ))}
      </Box>
    </Box>
  );
});

Contact.displayName = 'Contact';

export default Contact;
