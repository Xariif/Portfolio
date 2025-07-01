import React, { useState, useEffect, memo, useCallback } from 'react';
import { 
  Dialog, 
  DialogActions, 
  DialogContent, 
  DialogContentText, 
  DialogTitle, 
  Button, 
  Typography,
  Box 
} from '@mui/material';
import CookieIcon from '@mui/icons-material/Cookie';
import { useTranslation } from 'react-i18next';

const COOKIE_CONSENT_KEY = 'portfolioCookieConsent';

const CookieConsent: React.FC = memo(() => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const consentGiven = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consentGiven) {
      setOpen(true);
    }
  }, []);

  const handleAccept = useCallback(() => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'true');
    setOpen(false);
  }, []);

  // Don't render if not open
  if (!open) return null;

  return (
    <Dialog
      open={open}
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      PaperProps={{
        sx: {
          borderRadius: 2,
          maxWidth: '500px',
          width: '100%'
        }
      }}
    >
      <DialogTitle id="cookie-consent-title" sx={{ pb: 1 }}>
        <Box display="flex" alignItems="center" gap={1}>
          <CookieIcon color="primary" />
          <Typography variant="h5" component="div">
            {t('cookies.title')}
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="cookie-consent-description" sx={{ mb: 2 }}>
          {t('cookies.description')}
        </DialogContentText>
        <DialogContentText>
          {t('cookies.consent')}
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ p: 3, pt: 1 }}>
        <Button 
          onClick={handleAccept} 
          color="primary" 
          variant="contained" 
          size="large" 
          fullWidth
        >
          {t('cookies.accept')}
        </Button>
      </DialogActions>
    </Dialog>
  );
});

CookieConsent.displayName = 'CookieConsent';

export default CookieConsent;
