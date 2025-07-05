import { Navbar } from "./Navbar";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import {
  HoneymoonTrips,
  FamilyTrips,
  AdventureTrips,
  CulturalTours,
  WildlifeSafaris,
  EcoTours,
  LuxuryVacations,
  BeachHolidays,
  WellnessRetreats,
  CulinaryTours,
} from "../data/TripTypes";
import { FaGreaterThan } from "react-icons/fa";

export interface Destination {
  image: string;
  name: string;
}

export interface TripPackage {
  title: string;
  price: number;
  destinations: Destination[];
}

const allTrips: TripPackage[] = [
  HoneymoonTrips,
  FamilyTrips,
  AdventureTrips,
  CulturalTours,
  WildlifeSafaris,
  EcoTours,
  LuxuryVacations,
  BeachHolidays,
  WellnessRetreats,
  CulinaryTours,
];

const TripTypesList = () => {
  return (
    <Stack sx={{ bgcolor: "background.paper", width: "100%" }}>
      <Navbar />
      <Divider
        orientation="horizontal"
        variant="middle"
        flexItem
        sx={{ border: "1px solid gray", mx: { xs: 2, sm: 5 }, my: 5 }}
      />
      <Stack sx={{ alignItems: "center", px: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"UoqMunThenKhung", serif',
            fontSize: { xs: "1.8rem", sm: "2.4rem", md: "3rem" },
          }}
        >
          Trip Types
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "text.secondary",
            m: 2,
            textAlign: "center",
            fontSize: { xs: "0.95rem", sm: "1rem" },
          }}
        >
          Check out the different Packages we offer
        </Typography>
      </Stack>

      {allTrips.map((trip, index) => (
        <Box key={index} sx={{ mb: 8, px: { xs: 2, md: 6 } }}>
          <Stack sx={{ alignItems: "center", textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Marck Script", cursive',
                fontWeight: 500,
                color: "secondary.main",
                fontSize: { xs: "1.6rem", sm: "2.2rem", md: "2.8rem" },
              }}
            >
              {trip.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
                maxWidth: 800,
                color: "text.secondary",
                px: { xs: 1, sm: 3 },
                fontSize: { xs: "0.95rem", sm: "1rem" },
              }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, in
              quis porro nam quia maxime tempora suscipit ipsum est doloribus
              atque reiciendis assumenda? Aperiam ullam unde rem, voluptatibus
              vitae quis amet, temporibus odio, officia molestiae delectus
              animi. Assumenda, quae repellat!
            </Typography>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              sx={{ gap: 2, mb: 6, alignItems: "center" }}
            >
              <Chip
                label={`Package Price: $${trip.price}`}
                variant="outlined"
                color="primary"
                sx={{
                  fontWeight: 600,
                  fontSize: { xs: 14, sm: 16 },
                  py: 1,
                }}
              />
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
              >
                View Details
              </Button>
            </Stack>
          </Stack>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 3,
              justifyContent: "center",
            }}
          >
            {trip.destinations.map((destination, i) => (
              <Card
                key={i}
                sx={{
                  width: { xs: "100%", sm: 300, md: 350, lg: 400 },
                  borderRadius: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={destination.image}
                  alt={destination.name}
                />
                <CardContent sx={{ bgcolor: "background.default" }}>
                  <Typography
                    variant="subtitle1"
                    fontWeight="medium"
                    sx={{ fontSize: { xs: "1rem", sm: "1.1rem" } }}
                  >
                    {destination.name}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      ))}
    </Stack>
  );
};

export default TripTypesList;
