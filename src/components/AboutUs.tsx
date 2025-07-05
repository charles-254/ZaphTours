import { Stack, Box, Typography, Button, Chip } from "@mui/material";
import { FaRegHandshake } from "react-icons/fa";

export const AboutUs = () => {
  return (
    <Stack sx={{ m: { md: 7, sm: 5, xm: 2 } }}>
      <Typography
        variant="h1"
        sx={{
          fontFamily: '"Marck Script", cursive',
          fontWeight: 500,
          color: "secondary.main",
          alignSelf: "center",
          fontSize: {
            md: "95px",
            sm: "80px",
            xs: "60px",
          },
        }}
      >
        {" "}
        About Us
      </Typography>

      <Stack
        direction={{
          md: "row",
          xs: "column",
        }}
        spacing={2}
        sx={{ justifyContent: "space-evenly", marginBlock: 7, px: 1 }}
      >
        <Box
          sx={{
            width: { sm: 500, xs: "100%" },
            height: 500,
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          <img
            src="/images/aboutus.png"
            alt="About Us"
            style={{ width: "100%", height: "auto", objectFit: "cover" }}
          />
        </Box>
        <Stack
          sx={{
            maxWidth: {
              md: "50%",
              xs: "100%",
            },
            alignItems: "flex-start",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              color: "text.secondary",
              fontSize: {
                sm: "24px",
                xs: "19px",
              },
            }}
          >
            About Us
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: '"UoqMunThenKhung", serif',
              mb: 2,
              textTransform: "capitalize",
              fontSize: {
                sm: "45px",
                xs: "35px",
              },
            }}
          >
            We always make the best.
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
            minima aspernatur fuga molestiae necessitatibus reprehenderit culpa
            placeat impedit libero assumenda! Est omnis sit tempora quam! Dicta
            corrupti fuga est sed commodi placeat suscipit aut ratione quia
            maxime porro, dolor at impedit eius architecto eum amet nam quae
            culpa ullam earum cumque voluptas quis. Vitae, exercitationem eaque
            veniam aliquam voluptatem quas accusamus. Numquam eligendi et
            quisquam neque incidunt, voluptatibus ipsam esse similique inventore
            cupiditate maxime non ab laboriosam sint ducimus asperiores iusto
            eos iure. Minima quisquam minus quod delectus ut temporibus!
            Laudantium atque illo earum rerum maxime autem fugit quam minima.
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }}>
            {" "}
            Contact us
          </Button>
        </Stack>
      </Stack>
      <Stack
        direction={{ sm: "row", xm: "column" }}
        sx={{ justifyContent: "space-evenly", px: 1 }}
        spacing={2}
      >
        <Stack
          sx={{
            maxWidth: {
              sm: "50%",
              xs: "100%",
            },
          }}
        >
          <Stack>
            <Typography
              variant="h3"
              sx={{
                fontFamily: '"UoqMunThenKhung", serif',
                mb: 2,
                textTransform: "capitalize",
                fontSize: {
                  sm: "45px",
                  xs: "35px",
                },
              }}
            >
              Our skills
            </Typography>
            <Typography sx={{ color: "text.secondary", mb: 2 }}>
              {" "}
              At Zaph Tours, we specialize in custom travel experiences,
              blending local expertise with adventure coordination, safe
              logistics, and outstanding customer care to ensure every trip is
              unforgettable.
            </Typography>
          </Stack>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            <Chip
              label="Eco-Friendly Adventures"
              variant="outlined"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
            <Chip
              label="Safe and Secure Travel"
              variant="outlined"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
            <Chip
              label="Friendly Customer Support"
              variant="outlined"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
            <Chip
              label="Smooth Travel Arrangements"
              variant="outlined"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
            <Chip
              label="Local Destination Knowledge"
              variant="outlined"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
            <Chip
              label="Personalized Trip Planning"
              variant="outlined"
              color="primary"
              sx={{ fontWeight: 600 }}
            />
          </Box>
        </Stack>
        <Stack
          direction={{ md: "row", sm: "column", xs: "row" }}
          sx={{ justifyContent: "space-between", gap: { sm: 7, xs: 3 } }}
        >
          <Stack>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"UoqMunThenKhung", serif',
                  mb: 1,
                  fontWeight: 700,
                  fontSize: {
                    sm: "45px",
                    xs: "35px",
                  },
                }}
              >
                20+
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  mb: 4,
                  textTransform: "capitalize",
                }}
              >
                years of experience
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"UoqMunThenKhung", serif',
                  mb: 1,
                  fontWeight: 700,
                  fontSize: {
                    sm: "45px",
                    xs: "35px",
                  },
                }}
              >
                70,000+
              </Typography>
              <Typography
                sx={{ color: "text.secondary", textTransform: "capitalize" }}
              >
                Trips done
              </Typography>
            </Box>
          </Stack>
          <Stack>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"UoqMunThenKhung", serif',
                  mb: 1,
                  fontWeight: 700,
                  fontSize: {
                    sm: "45px",
                    xs: "35px",
                  },
                }}
              >
                530,000+
              </Typography>
              <Typography
                sx={{
                  color: "text.secondary",
                  mb: 4,
                  textTransform: "capitalize",
                }}
              >
                Customers sutisfied
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: '"UoqMunThenKhung", serif',
                  mb: 1,
                  fontWeight: 700,
                  fontSize: {
                    sm: "45px",
                    xs: "35px",
                  },
                }}
              >
                157
              </Typography>
              <Typography
                sx={{ color: "text.secondary", textTransform: "capitalize" }}
              >
                certified awards
              </Typography>
            </Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Box
          sx={{
            backgroundImage: "url(/images/aboutUs.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mt: 8,
            position: "relative",
            height: {
              xl: "700px",
              lg: "500px",
              md: "400px",
              sm: "300px",
              xs: "200px",
            },
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              textAlign: "center",
              textTransform: "capitalize",
            }}
          >
            <Typography
              sx={{
                fontFamily: '"UoqMunThenKhung", serif',
                mb: 1,
                fontWeight: 700,
                fontSize: {
                  md: "70px",
                  sm: "40px",
                  xs: "25px",
                },
              }}
            >
              We are always ready to
            </Typography>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"UoqMunThenKhung", serif',
                mb: {
                  md: 7,
                  xs: 3,
                },
                fontWeight: 700,
                fontSize: {
                  md: "70px",
                  sm: "40px",
                  xs: "30px",
                },
              }}
            >
              take a perfect shot.
            </Typography>
            <Button
              variant="contained"
              endIcon={<FaRegHandshake style={{ fontSize: "30px" }} />}
              sx={{
                fontSize: {
                  md: 17,
                  sm: 10,
                },
              }}
            >
              {" "}
              hire us now
            </Button>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};
