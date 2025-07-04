import { Box, Typography } from "@mui/material";
import { Navbar } from "./Navbar";

export const ContactUsLanding = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/contactus.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
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
          variant="h3"
          sx={{
            color: "secondary.main",
            fontFamily: '"Merienda", cursive',
            fontWeight: 600,
            mb: 2,
            pointerEvents: "auto",
            textTransform: "capitalize",
          }}
        >
          plan you trip with us.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Marck Script", cursive',
            fontWeight: 500,
            p: 1,
            textTransform: "capitalize",
            color: "secondary.primary",
          }}
        >
          Let's go together.
        </Typography>
      </Box>
    </Box>
  );
};
