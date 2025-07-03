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
          Discover the world diffrently.{" "}
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
            <Button
              variant="outlined"
              color="secondary"
              sx={{ m: 2 }}
              endIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
            >
              {" "}
              View Details
            </Button>
          </Card>
        ))}
      </Stack>
    </Stack>
  );
};

interface Destination {
  image: string;
  name: string;
  pricePerGroup: number;
  individualCost: number;
}

const destinations: Destination[] = [
  {
    image: "/images/destinations/paris.png",
    name: "Paris, France",
    pricePerGroup: 1200,
    individualCost: 300,
  },
  {
    image: "/images/tsavoNationalPark.png",
    name: "Tsavo National Park, kenya",
    pricePerGroup: 1000,
    individualCost: 250,
  },
  {
    image: "/images/destinations/capeTown.png",
    name: "Cape Town, South Africa",
    pricePerGroup: 850,
    individualCost: 220,
  },
  {
    image: "/images/destinations/thegreatwallofchina.png",
    name: "The Great wall of China",
    pricePerGroup: 950,
    individualCost: 280,
  },
  {
    image: "/images/nairobiNationalPark.png",
    name: "Nairobi National Park, Kenya",
    pricePerGroup: 1100,
    individualCost: 290,
  },
  {
    image: "/images/destinations/barcelona.png",
    name: "Barcelona, Spain",
    pricePerGroup: 1050,
    individualCost: 270,
  },
  {
    image: "/images/destinations/rome.png",
    name: "Rome, Italy",
    pricePerGroup: 1300,
    individualCost: 240,
  },
  {
    image: "/images/destinations/muai.png",
    name: "Maui, Hawaii",
    pricePerGroup: 1300,
    individualCost: 350,
  },
  {
    image: "/images/coastalKenya.png",
    name: "Coastal Kenya",
    pricePerGroup: 1150,
    individualCost: 320,
  },
  {
    image: "/images/destinations/prague.png",
    name: "Prague, Czech Republic",
    pricePerGroup: 800,
    individualCost: 210,
  },
  {
    image: "/images/destinations/picchu.png",
    name: "Machu Picchu, Peru",
    pricePerGroup: 1350,
    individualCost: 370,
  },
  {
    image: "/images/destinations/sydney.png",
    name: "Sydney, Australia",
    pricePerGroup: 1400,
    individualCost: 390,
  },
  {
    image: "/images/destinations/queenstone.png",
    name: "Queenstown, New Zealand",
    pricePerGroup: 1250,
    individualCost: 330,
  },
  {
    image: "/images/lakeNakuru.png",
    name: "Lake Nakuru, Rift Valley, Kenya",
    pricePerGroup: 1200,
    individualCost: 310,
  },
  {
    image: "/images/destinations/giza.png",
    name: "Giza Cairo, Egypt",
    pricePerGroup: 900,
    individualCost: 230,
  },
  {
    image: "/images/destinations/everest.png",
    name: "Everest Base Camp, Nepal",
    pricePerGroup: 1300,
    individualCost: 340,
  },
  {
    image: "/images/mt.Kenya.png",
    name: "Mount Kenya",
    pricePerGroup: 850,
    individualCost: 200,
  },
  {
    image: "/images/destinations/bali.png",
    name: "Bali, Indonesia",
    pricePerGroup: 950,
    individualCost: 260,
  },
  {
    image: "/images/mt.Ruwenzori.png",
    name: "Mt Ruwenzori, Uganda-Congo border",
    pricePerGroup: 980,
    individualCost: 270,
  },
  {
    image: "/images/destinations/venice.png",
    name: "Venice, Italy",
    pricePerGroup: 1000,
    individualCost: 250,
  },
  {
    image: "/images/destinations/istanbul.png",
    name: "Istanbul, Turkey",
    pricePerGroup: 970,
    individualCost: 240,
  },
  {
    image: "/images/destinations/maldives.png",
    name: "Maldives",
    pricePerGroup: 880,
    individualCost: 210,
  },
  {
    image: "/images/destinations/petra.png",
    name: "Petra, Jordan",
    pricePerGroup: 1050,
    individualCost: 280,
  },
  {
    image: "/images/destinations/brazil.png",
    name: "Rio de Janeiro, Brazil",
    pricePerGroup: 1100,
    individualCost: 290,
  },
];
