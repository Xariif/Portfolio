import { Box, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useColorScheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import TranslateIcon from '@mui/icons-material/Translate';
import React from "react";

export default function NavigationBar() {
  const theme = useTheme();
  const { mode, setMode } = useColorScheme();
  const { i18n } = useTranslation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <Box sx={{
      width: '100%'
    }}>
      <Box sx={{
        maxWidth: theme.breakpoints.values.lg,
        px: 2,
        py: 1,
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: 'center',
        margin: "0 auto",
        gap: 1,
      }}>


        <IconButton
          onClick={(event) => setAnchorEl(event.currentTarget)}
        >
          <TranslateIcon   />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem
        onClick={() => changeLanguage('en')}
            selected={i18n.language === 'en'}
          >
            {i18n.t('language.english')}
          </MenuItem>
          <MenuItem
            onClick={() => changeLanguage('pl')}
            selected={i18n.language === 'pl'}
          >
            {i18n.t('language.polish')}
          </MenuItem>
        </Menu>

        <IconButton

          onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
        >
          {theme.palette.mode === 'dark' ? <LightModeIcon  /> : <DarkModeIcon />}
        </IconButton>
      </Box>
    </Box>
  );
}
