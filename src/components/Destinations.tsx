import {
  Typography,
  Stack,
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  Button,
  CardContent,
  Chip,
} from "@mui/material";
import { FaGreaterThan } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";
import destinations from "../data/destinations";

export const DestinationsList = () => {
  return (
    <Stack
      sx={{
        backgroundColor: "background.paper",
        paddingBlock: 8,
        paddingInline: { xs: 2, sm: 3, md: 6 },
      }}
    >
      <Stack sx={{ alignItems: "center", textAlign: "center", px: 2 }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"UoqMunThenKhung", serif',
            mb: 2,
            textTransform: "capitalize",
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
          }}
        >
          Discover the world differently.
        </Typography>
        <Typography
          sx={{
            maxWidth: { xs: "100%", sm: "80%", md: "70%" },
            color: "text.secondary",
            fontSize: { xs: "0.95rem", sm: "1rem" },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo
          temporibus dolorum quaerat ipsam nesciunt? Dignissimos deleniti iure,
          totam omnis deserunt veritatis corrupti laboriosam fugit itaque nisi
          natus assumenda harum!
        </Typography>
      </Stack>

      <Stack
        direction="row"
        sx={{
          display: "flex",
          gap: 2,
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 7,
        }}
      >
        {destinations.map((destination, index) => (
          <Card
            sx={{
              width: { xs: "100%", sm: 400, md: 400 },
              backgroundColor: "#0a0a0ad4",
              borderRadius: "10px",
            }}
            key={index}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="250"
                image={destination.image}
                alt={destination.name}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.4rem" },
                  }}
                >
                  {destination.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "text.secondary",
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                  }}
                >
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
                  recusandae quidem nemo quaerat accusamus et dolorum, fugit,
                  sit magni atque possimus exercitationem odio! Autem.
                </Typography>
              </CardContent>
            </CardActionArea>

            <CardActions>
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{
                  gap: 1,
                  display: "flex",
                  width: "100%",
                  alignItems: { xs: "flex-start", sm: "center" },
                }}
              >
                <Chip
                  label={`Individual Cost $${destination.individualCost}`}
                  variant="outlined"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: 14, sm: 16 },
                    py: 1,
                  }}
                />
                <Chip
                  label={`Price Per Group $${destination.pricePerGroup}`}
                  variant="outlined"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: 14, sm: 16 },
                    py: 1,
                  }}
                />
              </Stack>
            </CardActions>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{
                gap: 2,
                m: 2,
                alignItems: "stretch",
              }}
            >
              <Button
                fullWidth
                variant="contained"
                endIcon={<GiAirplaneDeparture style={{ fontSize: "24px" }} />}
                href="/contact-us"
              >
                Book now
              </Button>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                endIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
              >
                View Details
              </Button>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};
