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
        minHeight: {
          xs: "420px",
          sm: "480px",
          md: "540px",
        },
        position: "relative",
        px: { xs: 2, sm: 3, md: 4 },
        pb: 4,
      }}
    >
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          textAlign: "center",
          pt: {
            xs: 5,
            sm: 12,
            md: 14,
          },
          px: 2,
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
            fontSize: {
              xs: "1.8rem",
              sm: "2.4rem",
              md: "3rem",
            },
          }}
        >
          Next Step Destination
        </Typography>

        <Stack sx={{ width: { xs: "100%", sm: "80%", md: "50%" } }}>
          <TextField
            label="Search"
            variant="outlined"
            sx={{
              pointerEvents: "auto",
              bgcolor: "#1717178a",
              borderRadius: 3,
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "primary.main",
                  borderRadius: "10px",
                },
              },
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
