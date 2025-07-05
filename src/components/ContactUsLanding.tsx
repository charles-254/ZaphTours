import { Box, Typography } from "@mui/material";
import { Navbar } from "./Navbar";

export const ContactUsLanding = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(/images/contactus.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: {
          xs: "320px",
          sm: "350px",
          md: "450px",
        },
        position: "relative",
        px: { xs: 2, sm: 3, md: 4 },
        overflow: "hidden",
      }}
    >
      <Navbar />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 1,
          mt: { xs: 2, sm: 7, md: 10 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "secondary.main",
            fontFamily: '"Merienda", cursive',
            fontWeight: 600,
            mb: 1,
            fontSize: {
              xs: "1.4rem",
              sm: "2.2rem",
              md: "2.8rem",
            },
            maxWidth: "100%",
            lineHeight: 1.2,
          }}
        >
          Plan your trip with us.
        </Typography>

        <Typography
          variant="h4"
          sx={{
            fontFamily: '"Marck Script", cursive',
            fontWeight: 500,
            fontSize: {
              xs: "1rem",
              sm: "1.5rem",
              md: "2rem",
            },
            px: 2,
            maxWidth: "100%",
            color: "secondary.primary",
            lineHeight: 1.3,
          }}
        >
          Let's go together.
        </Typography>
      </Box>
    </Box>
  );
};
