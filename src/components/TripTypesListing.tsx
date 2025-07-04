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
        sx={{ border: "1px solid gray", m: 5 }}
      />
      <Stack sx={{ alignItems: "center" }}>
        <Typography
          variant="h2"
          sx={{
            fontFamily: '"UoqMunThenKhung", serif',
          }}
        >
          Trip Types
        </Typography>
        <Typography variant="h6" sx={{ color: "text.secondary", m: 2 }}>
          Check out the different Packages we offer
        </Typography>
      </Stack>
      {allTrips.map((trip, index) => (
        <Box key={index} sx={{ mb: 8 }}>
          <Stack sx={{ alignItems: "center", textAlign: "center" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: '"Marck Script", cursive',
                fontWeight: 500,
                color: "secondary.main",
              }}
            >
              {trip.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mb: 2, maxWidth: 800, color: "text.secondary" }}
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, in
              quis porro nam quia maxime tempora suscipit ipsum est doloribus
              atque reiciendis assumenda? Aperiam ullam unde rem, voluptatibus
              vitae quis amet, temporibus odio, officia molestiae delectus
              animi. Assumenda, quae repellat!
            </Typography>
            <Stack direction="row" sx={{ gap: 2, mb: 6 }}>
              <Chip
                label={`Package Price: $${trip.price}`}
                variant="outlined"
                color="primary"
                sx={{ fontWeight: 600, fontSize: 16, paddingBlock: 1 }}
              />
              <Button
                variant="outlined"
                color="secondary"
                endIcon={<FaGreaterThan style={{ fontSize: "15px" }} />}
              >
                {" "}
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
              <Card key={i} sx={{ width: 400, borderRadius: "10px" }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={destination.image}
                  alt={destination.name}
                />
                <CardContent sx={{ bgcolor: "background.default" }}>
                  <Typography variant="subtitle1" fontWeight="medium">
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
