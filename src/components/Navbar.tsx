import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

export const Navbar = () => (
  <AppBar color="transparent" position="static" elevation={0}>
    <Toolbar
      sx={{
        flexDirection: { xs: "column", md: "row" },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        gap: { xs: 2, md: 10 },
        mt: { xs: 2, md: 3 },
        px: { xs: 2, md: 4 },
        pointerEvents: "auto",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: "bold",
          color: "secondary.main",
          fontFamily: '"Merienda", cursive',
          fontSize: { xs: "1.8rem", md: "2.5rem" },
        }}
      >
        Zaph Tours
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: { xs: 2, md: 3 },
          fontWeight: 600,
          fontSize: { xs: "0.95rem", sm: "1rem" },
          color: "whitesmoke",
        }}
      >
        <Link href="/" underline="hover" sx={{ color: "whitesmoke" }}>
          Home
        </Link>
        <Link
          href="/destinations"
          underline="hover"
          sx={{ color: "whitesmoke" }}
        >
          Destinations
        </Link>
        <Link href="/trip-types" underline="hover" sx={{ color: "whitesmoke" }}>
          Trip Types
        </Link>
        <Link href="/contact-us" underline="hover" sx={{ color: "whitesmoke" }}>
          Contact Us
        </Link>
      </Box>
      <Box sx={{ mt: { xs: 1, md: 0 } }}>
        <Button
          endIcon={<FaArrowRightLong />}
          variant="outlined"
          sx={{
            px: 2,
            py: 1,
            fontWeight: 600,
            fontSize: { xs: "0.9rem", sm: "1rem" },
            width: { xs: "100%", sm: "auto" },
          }}
          href="/contact-us"
        >
          Book Now
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);
