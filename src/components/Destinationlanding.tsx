import {
  Box,
  Typography,
  Stack,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import { Navbar } from "./Navbar";
import { Search } from "@mui/icons-material";

export const DestinationLanding = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/sea.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        position: "relative",
        px: 4,
        pointerEvents: "none",
      }}
    >
      {" "}
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: "secondary.main",
            fontFamily: '"Merienda", cursive',
            fontWeight: 600,
            mb: 2,
            pointerEvents: "auto",
          }}
        >
          {" "}
          Next Step Destination
        </Typography>
        <Stack>
          <TextField
            label="Search"
            variant="outlined"
            fullWidth
            sx={{
              pointerEvents: "auto",
              bgcolor: "#1717178a",
              borderRadius: 3,
            }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    endIcon={<Search />}
                    sx={{ alignItems: "center" }}
                  >
                    Go
                  </Button>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Box>
    </Box>
  );
};
