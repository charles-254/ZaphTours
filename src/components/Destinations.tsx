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
        paddingInline: 1,
      }}
    >
      <Stack sx={{ alignItems: "center", textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontFamily: '"UoqMunThenKhung", serif',
            mb: 2,
            textTransform: "capitalize",
          }}
        >
          {" "}
          Discover the world differently.{" "}
        </Typography>
        <Typography sx={{ maxWidth: "70%", color: "text.secondary" }}>
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
              maxWidth: 450,
              backgroundColor: "#0a0a0ad4",
              borderRadius: "10px",
            }}
            key={index}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="350"
                image={destination.image}
                alt={destination.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {destination.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
                  recusandae quidem nemo quaerat accusamus et dolorum, fugit,
                  sit magni atque possimus exercitationem odio! Autem.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Stack
                direction="row"
                sx={{ gap: 1, display: "flex", width: "100%" }}
              >
                <Chip
                  label={`Individual Cost $${destination.individualCost}`}
                  variant="outlined"
                  color="primary"
                  sx={{ fontWeight: 600, fontSize: 16, paddingBlock: 1 }}
                />
                <Chip
                  label={`Price Per Group $${destination.pricePerGroup}`}
                  variant="outlined"
                  color="primary"
                  sx={{ fontWeight: 600, fontSize: 16, paddingBlock: 1 }}
                />
              </Stack>
            </CardActions>
            <Stack direction="row" sx={{ gap: 2, m: 2 }}>
              <Button
                variant="contained"
                endIcon={<GiAirplaneDeparture style={{ fontSize: "24px" }} />}
                href="/contact-us"
              >
                Book now
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
              >
                {" "}
                View Details
              </Button>
            </Stack>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};
