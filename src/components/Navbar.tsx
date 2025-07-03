import { AppBar, Toolbar, Typography, Button, Box, Link } from "@mui/material";
import { FaArrowRightLong } from "react-icons/fa6";

export const Navbar = () => (
  <AppBar color="transparent" position="static" elevation={0}>
    <Toolbar
      sx={{ justifyContent: "center", gap: 30, mt: 3, pointerEvents: "auto" }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "secondary.main",
          fontFamily: '"Merienda", cursive',
        }}
      >
        {" "}
        Zaph Tours{" "}
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 3,
          fontWeight: 600,
          color: "whitesmoke",
          fontSize: 17,
        }}
      >
        <Link href="/" underline="hover" sx={{ color: "whitesmoke" }}>
          Home
        </Link>
        <Link
          href="destinations"
          underline="hover"
          sx={{ color: "whitesmoke" }}
        >
          Destinations
        </Link>
        <Link href="trip-types" underline="hover" sx={{ color: "whitesmoke" }}>
          Trip Types
        </Link>
        <Link href="contact-us" underline="hover" sx={{ color: "whitesmoke" }}>
          Contact Us
        </Link>
      </Box>
      <Box>
        <Button
          endIcon={<FaArrowRightLong />}
          variant="outlined"
          sx={{ paddingInline: 2, fontWeight: 600 }}
        >
          {" "}
          Book Now
        </Button>
      </Box>
    </Toolbar>
  </AppBar>
);
