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

const COOKIE_CONSENT_KEY = 'portfolioCookieConsent';

const CookieConsent: React.FC = memo(() => {
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
            Polityka Cookies
          </Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="cookie-consent-description" sx={{ mb: 2 }}>
          Ta strona używa plików cookies, aby zapewnić najlepsze doświadczenie użytkownika. Cookies pomagają nam analizować ruch na stronie, dostosowywać treści i zapewniać funkcje mediów społecznościowych.
        </DialogContentText>
        <DialogContentText>
          Klikając "Akceptuję", wyrażasz zgodę na używanie przez nas cookies zgodnie z naszą polityką prywatności.
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
          Akceptuję
        </Button>
      </DialogActions>
    </Dialog>
  );
});

CookieConsent.displayName = 'CookieConsent';

export default CookieConsent;
