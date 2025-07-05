import { Box, Typography, Button, Chip } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";
import { Navbar } from "./Navbar";

export const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/hero.jpeg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        position: "relative",
        px: { xs: 2, sm: 3, md: 4 },
        pointerEvents: "none",
      }}
    >
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
          px: 2,
        }}
      >
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: '"Marck Script", cursive',
            fontWeight: 500,
            bgcolor: "rgba(0, 0, 0, 0.31)",
            width: "fit-content",
            px: 2,
            py: 1,
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
          }}
        >
          Get unforgettable pleasure with us.
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: "secondary.main",
            fontFamily: '"Merienda", cursive',
            fontWeight: 600,
            mb: 1,
            fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
            pointerEvents: "auto",
          }}
        >
          Crafting Journeys.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "secondary.main",
            fontFamily: '"Merienda", cursive',
            fontWeight: 600,
            fontSize: { xs: "1.5rem", sm: "2.5rem", md: "3rem" },
            pointerEvents: "auto",
          }}
        >
          Not Just Trips.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 2,
            mt: 3,
            pointerEvents: "auto",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            endIcon={<FaArrowRightLong />}
            sx={{
              px: 3,
              py: 1.5,
              fontWeight: 600,
              fontSize: { xs: 14, sm: 16, md: 18 },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            explore tours
          </Button>
          <Button
            variant="outlined"
            endIcon={<FaArrowRightLong />}
            sx={{
              px: 3,
              py: 1.5,
              fontWeight: 600,
              fontSize: { xs: 14, sm: 16, md: 18 },
              width: { xs: "100%", sm: "auto" },
            }}
          >
            our services
          </Button>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          px: { xs: 2, sm: 4 },
          pb: { xs: 2, sm: 3 },
          pointerEvents: "auto",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Marck Script", cursive',
            fontWeight: 500,
            mb: 1,
            fontSize: { xs: "1rem", sm: "1.25rem" },
          }}
        >
          The facilities we offer:
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 1,
          }}
        >
          {[
            "Tour Guide",
            "Travel Packages",
            "Accommodation",
            "Transportation",
            "Food",
            "Insurance",
            "Online Ordering",
          ].map((label) => (
            <Chip
              key={label}
              label={label}
              variant="outlined"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
