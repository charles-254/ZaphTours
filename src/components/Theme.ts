// theme.ts
import { createTheme } from "@mui/material/styles";

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#00b4d8",
    },
    secondary: {
      main: "#ffd166",
    },
    background: {
      default: "#0a0a0a",
      paper: "#1a1a1a",
    },
    text: {
      primary: "#f5f5f5",
      secondary: "#a3a3a3",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: "capitalize",
          fontWeight: 600,
          padding: "8px 24px",
        },
      },
    },
  },
});
