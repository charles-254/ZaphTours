import {
  Stack,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  Avatar,
  IconButton,
  CardActionArea,
} from "@mui/material";
import { Facebook, X, LinkedIn, Instagram, Star } from "@mui/icons-material";
import testimonialsData from "../data/testimonial";

export const Testimonials = () => {
  return (
    <Stack sx={{ paddingBlock: 8 }}>
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
        Testimonials
      </Typography>
      <Stack
        direction={{ md: "row", xs: "column" }}
        sx={{ justifyContent: "space-evenly", marginBlock: 6 }}
      >
        <Box sx={{ justifyItems: "center", gap: 2 }}>
          <Typography
            variant="h5"
            sx={{
              textTransform: "uppercase",
              color: "text.secondary",
              fontSize: { md: 24, xs: 0 },
            }}
          >
            Testimonials
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
            What our clients say
          </Typography>
        </Box>
        <Typography
          sx={{
            color: "text.secondary",
            maxWidth: { md: "50%", xs: "100%" },
            textAlign: "center",
          }}
        >
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          quaerat odit molestias, delectus alias, consequatur deserunt soluta
          nemo amet obcaecati laborum. Perspiciatis repudiandae saepe doloribus
          vitae illum optio. Modi, tempora illum velit dolore error aliquid
          magnam assumenda consectetur pariatur quasi. Dolorem fugiat esse
          mollitia praesentium voluptatibus exercitationem? Porro, repudiandae
          eum.
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          gap: 4,
          justifyContent: "center",
          mt: 4,
          display: "flex",
          flexWrap: "wrap",
          px: 1,
        }}
      >
        {testimonialsData.map((testimonial, index) => (
          <Card
            sx={{
              width: 400,
              bgcolor: "transparent",
              border: "1px solid rgb(37, 37, 37)",
              borderRadius: "12px",
            }}
            key={index}
          >
            <CardActionArea>
              <CardContent>
                <Box sx={{ display: "flex" }}>
                  <IconButton>
                    {" "}
                    <Star sx={{ color: "orange" }} fontSize="small" />
                  </IconButton>
                  <IconButton>
                    {" "}
                    <Star sx={{ color: "orange" }} fontSize="small" />
                  </IconButton>
                  <IconButton>
                    {" "}
                    <Star sx={{ color: "orange" }} fontSize="small" />
                  </IconButton>
                  <IconButton>
                    {" "}
                    <Star sx={{ color: "orange" }} fontSize="small" />
                  </IconButton>
                  <IconButton>
                    {" "}
                    <Star sx={{ color: "orange" }} fontSize="small" />
                  </IconButton>
                </Box>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Eaque inventore quidem deserunt laudantium autem nobis aliquid
                  nesciunt temporibus eius omnis eligendi sequi sed laborum
                  corporis, reiciendis eveniet, aperiam quis! Inventore numquam
                  dolore ut nam debitis. Nobis molestiae, sapiente nulla rem cum
                  debitis dolores ducimus cumque nostrum veritatis iure,
                  inventore a!
                </Typography>
              </CardContent>

              <CardContent sx={{ display: "flex", gap: 2 }}>
                <Avatar sx={{ height: 70, width: 70 }}>
                  <img src={testimonial.img} alt="" width={70} />
                </Avatar>
                <Box>
                  <Typography gutterBottom variant="h5" component="div">
                    {testimonial.name}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    Traveller
                  </Typography>
                </Box>
              </CardContent>
              <CardActions>
                <IconButton size="small">
                  <Instagram sx={{ color: "primary.main" }} />
                </IconButton>
                <IconButton size="small">
                  <Facebook sx={{ color: "primary.main" }} />
                </IconButton>
                <IconButton size="small">
                  <LinkedIn sx={{ color: "primary.main" }} />
                </IconButton>
                <IconButton size="small">
                  <X sx={{ color: "primary.main" }} />
                </IconButton>
              </CardActions>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};
