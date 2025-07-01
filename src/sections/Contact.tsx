import {
  Box,
  Link,
  Paper,
  Tooltip,
  Typography,
  Stack,
} from "@mui/material";
import { useState, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";

// Type definition for contact items
interface ContactItem {
  id: string;
  label: string;
  value: string;
  link: string;
  icon: string;
  hoverText: string;
  color: string;
}

// Static contact info moved outside component
const contactInfo: ContactItem[] = [
  {
    id: "email",
    label: "Email",
    value: "jakubfiliks7@gmail.com",
    link: "mailto:jakubfiliks7@gmail.com",
    icon: "hn hn-threads",
    hoverText: "Send me an email",
    color: "primary.main",
  },
  {
    id: "phone",
    label: "Phone",
    value: "+48 668 022 456",
    link: "tel:+48668022456",
    icon: "hn-phone-ringing-low",
    hoverText: "Call me",
    color: "primary.main",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Jakub Filiks",
    link: "https://www.linkedin.com/in/jakub-filiks-4537b9225/",
    icon: "hn-linkedin",
    hoverText: "View my LinkedIn profile",
    color: "primary.main",
  },
  {
    id: "github",
    label: "GitHub",
    value: "Xariif",
    link: "https://github.com/Xariif",
    icon: "hn-github",
    hoverText: "Check out my GitHub repositories",
    color: "primary.main",
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

  return (
    <Tooltip title={item.hoverText} placement="top" arrow>
      <Link
        href={item.link}
        target={!isCopyable ? "_blank" : undefined}
        rel="noopener noreferrer"
        underline="none"
        onClick={handleClick}
        sx={{ display: 'block', minWidth: 200 }}
      >
        <Paper sx={{ p: 2, textAlign: 'center', height: '100%' }}>
          <i 
            className={`${item.icon} hn`} 
            style={{ 
              fontSize: "2.5rem",
              marginBottom: "16px",
              display: 'block',
              }} 
          />
          
          <Typography variant="caption" color="text.secondary" sx={{ mb: 1, display: 'block' }}>
            {item.label}
          </Typography>

          <Typography variant="body2" color="text.primary">
            {isActive ? "Copied!" : item.value}
          </Typography>
        </Paper>
      </Link>
    </Tooltip>
  );
});

ContactItemComponent.displayName = 'ContactItemComponent';

const Contact = memo(() => {
  const { t } = useTranslation();
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = useCallback((id: string, value: string) => {
    navigator.clipboard.writeText(value);
    setActiveItem(id);
    setTimeout(() => setActiveItem(null), 2000);
  }, []);

  return (
    <Box sx={{ px: 3, py: 5 }}>
      <Typography
        variant="h3"
        component="h2"
        sx={{
          fontSize: { xs: "1.8rem", sm: "2.2rem" },
          mb: 5,
          textAlign: "center",
        }}
      >
        {t('contact.title')}
      </Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
        sx={{ maxWidth: 1000, margin: "0 auto" }}
      >
        {contactInfo.map((item) => (
          <ContactItemComponent
            key={item.id}
            item={item}
            activeItem={activeItem}
            onItemClick={handleItemClick}
          />
        ))}
      </Stack>
    </Box>
  );
});

Contact.displayName = 'Contact';

export default Contact;
