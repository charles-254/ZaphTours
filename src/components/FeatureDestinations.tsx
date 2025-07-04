import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Box,
  Tooltip,
  Stack,
} from "@mui/material";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosPricetags } from "react-icons/io";
import { GiAirplaneDeparture } from "react-icons/gi";
import featuredDestinations from "../data/featuredDestinations";

export const FeaturedDestinations = () => {
  return (
    <Stack
      sx={{
        mt: 10,
        backgroundColor: "background.paper",
        paddingBlock: 5,
      }}
    >
      <Stack sx={{ alignItems: "center", textAlign: "center" }}>
        <Typography
          variant="h1"
          sx={{
            fontFamily: '"Marck Script", cursive',
            fontWeight: 500,
            color: "secondary.main",
            mb: 2,
          }}
        >
          Featured Destinations
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"UoqMunThenKhung", serif',
            mb: 2,
            textTransform: "capitalize",
          }}
        >
          {" "}
          best places for you.
        </Typography>
        <Typography sx={{ maxWidth: "70%", mb: 4 }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Perspiciatis, aperiam inventore possimus perferendis exercitationem
          quia cumque asperiores consectetur, provident modi accusamus unde?
          Asperiores ea similique unde magni corrupti hic beatae iste.
          Similique, quos voluptatem. Corrupti sed temporibus fuga. Beatae eum
          fugit odio magni numquam sed ducimus asperiores, inventore, laudantium
          soluta rem nemo id cumque ex architecto ratione ad consequatur dolore.
        </Typography>
      </Stack>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
          margin: 4,
        }}
      >
        {featuredDestinations.map((destination, index) => (
          <Box key={index}>
            <Card
              sx={{
                backgroundColor: "#0a0a0ad4",
                width: 400,
                borderRadius: "10px",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="260"
                  image={destination.img}
                  alt={destination.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {destination.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {destination.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 2,
                  p: 2,
                  mb: 2,
                }}
              >
                <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
                  <Tooltip title={`$${destination.price} per person`}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="primary"
                      startIcon={<IoIosPricetags />}
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        justifyContent: "flex-start",
                        paddingInline: 2,
                      }}
                    >
                      ${destination.price}
                    </Button>
                  </Tooltip>
                  <Tooltip title={destination.location}>
                    <Button
                      size="small"
                      variant="outlined"
                      color="secondary"
                      startIcon={<FaLocationDot />}
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        justifyContent: "flex-start",
                        paddingInline: 2,
                      }}
                    >
                      {destination.location}
                    </Button>
                  </Tooltip>
                </Box>
                <Button
                  variant="contained"
                  endIcon={<GiAirplaneDeparture style={{ fontSize: "24px" }} />}
                >
                  Book now
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Box>
    </Stack>
  );
};
