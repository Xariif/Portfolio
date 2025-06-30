import { createTheme } from '@mui/material/styles';

// Create a theme instance with Pac-Man inspired colors
// #EE05F2 - Pink/Magenta (Similar to Pinky ghost)
// #24F205 - Bright Green (Similar to Inky ghost)
// #FCE600 - Yellow (Pac-Man color)
// #11AFFE - Blue (Similar to maze color/Blinky ghost)
// #F20505 - Red (Similar to Clyde ghost)

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#FCE600', // Pac-Man Yellow
      light: '#FFF059',
      dark: '#E6C800',
      contrastText: '#000', // Black text for contrast with yellow
    },
    secondary: {
      main: '#EE05F2', // Pink/Magenta (Pinky)
      light: '#FF4BFF',
      dark: '#C700C9',
      contrastText: '#fff',
    },
    background: {
      default: '#000000', // Classic Pac-Man black background
      paper: '#111111', // Slightly lighter than black for paper elements
    },
    text: {
      primary: '#FCE600', // Pac-Man Yellow for primary text
      secondary: '#FFFFFF', // White for secondary text
    },
    success: {
      main: '#24F205', // Bright Green (Inky)
    },
    warning: {
      main: '#FCE600', // Pac-Man Yellow
    },
    error: {
      main: '#F20505', // Red (Clyde)
    },
    info: {
      main: '#11AFFE', // Blue (Blinky/Maze)
    },
  },
  typography: {
    fontFamily: '"Press Start 2P", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Press Start 2P", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400, // Pixel fonts typically look better without extra weight
      letterSpacing: '0px',
      fontSize: '2.5rem',
      lineHeight: 1.5, // Better spacing for pixel fonts
    },
    h2: {
      fontFamily: '"Press Start 2P", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      letterSpacing: '0px',
      fontSize: '1.8rem',
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: '"Press Start 2P", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '1.4rem',
      lineHeight: 1.5,
    },
    h4: {
      fontFamily: '"Press Start 2P", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '1.2rem',
      lineHeight: 1.5,
    },
    h5: {
      fontFamily: '"Press Start 2P", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
    h6: {
      fontFamily: '"Press Start 2P", "Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: 400,
      fontSize: '0.9rem',
      lineHeight: 1.5,
    },
    body1: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif', // Keep body text in normal font for readability
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontSize: '0.9rem',
      lineHeight: 1.7,
    },
    button: {
      fontFamily: '"Press Start 2P", "Roboto", "Helvetica", "Arial", sans-serif',
      textTransform: 'none',
      fontWeight: 400,
      letterSpacing: '0px',
      fontSize: '0.8rem',
    },
  },
  shape: {
    borderRadius: 8, // More pixel-art style with sharper corners
  },
  shadows: [
    'none',
    '0px 2px 8px 0px rgba(252, 230, 0, 0.15)', // Custom shadow using Pac-Man yellow
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)',
    '0px 4px 24px 0px rgba(252, 230, 0, 0.18)'
  ],
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8, // More pixel-art style with sharper corners
          fontWeight: 400,
          boxShadow: '0px 2px 8px 0px rgba(252, 230, 0, 0.15)',
          transition: 'all 0.2s cubic-bezier(.4,0,.2,1)',
          padding: '12px 20px',
          margin: '4px',
          fontSize: '0.8rem',
          letterSpacing: '0px',
        },
        containedPrimary: {
          background: '#FCE600', // Solid Pac-Man yellow
          color: '#000',
          '&:hover': {
            background: '#FFF059', // Lighter yellow on hover
            transform: 'translateY(-2px)',
            boxShadow: '0px 4px 12px rgba(252, 230, 0, 0.25)',
          }
        },
        outlined: {
          borderWidth: '2px', // Thicker border for pixel art style
          '&:hover': {
            borderWidth: '2px',
            transform: 'translateY(-2px)',
          }
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8, // Sharper corners for pixel style
          border: '2px solid rgba(252, 230, 0, 0.4)', // Thicker borders
          boxShadow: '4px 4px 0px rgba(252, 230, 0, 0.2)', // Pixel-style offset shadow
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#000000',
          boxShadow: '0px 2px 0px #FCE600', // Pixel-style bottom border shadow
          borderBottom: '2px solid #FCE600',
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          border: '2px solid #FCE600',
          borderRadius: '8px', // Square-ish for pixel style
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(252, 230, 0, 0.1)',
          color: '#FCE600',
          borderColor: 'rgba(252, 230, 0, 0.3)',
          borderRadius: '4px', // More angular for pixel style
          fontFamily: '"Press Start 2P", "Roboto", "Helvetica", "Arial", sans-serif',
          fontSize: '0.7rem',
        },
      },
    },
  },
});

export default theme;
