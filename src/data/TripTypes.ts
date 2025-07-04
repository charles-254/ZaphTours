export interface Destination {
  image: string;
  name: string;
}

export interface TripPackage {
  title: string;
  price: number;
  destinations: Destination[];
}

export const HoneymoonTrips: TripPackage = {
  title: "Honeymoon Trips",
  price: 4200,
  destinations: [
    { image: "/images/destinations/paris.png", name: "Paris, France" },
    {
      image: "/images/destinations/capeTown.png",
      name: "Cape Town, South Africa",
    },
    {
      image: "/images/destinations/queenstone.png",
      name: "Queenstown, New Zealand",
    },
    { image: "/images/destinations/maldives.png", name: "Maldives" },
    { image: "/images/destinations/bali.png", name: "Bali, Indonesia" },
    { image: "/images/destinations/rome.png", name: "Rome, Italy" },
  ],
};

export const FamilyTrips: TripPackage = {
  title: "Family Trips",
  price: 3900,
  destinations: [
    {
      image: "/images/mt.Ruwenzori.png",
      name: "Mt Ruwenzori, Uganda-Congo border",
    },
    { image: "/images/destinations/venice.png", name: "Venice, Italy" },
    { image: "/images/destinations/istanbul.png", name: "Istanbul, Turkey" },
    { image: "/images/destinations/petra.png", name: "Petra, Jordan" },
    {
      image: "/images/destinations/brazil.png",
      name: "Rio de Janeiro, Brazil",
    },
    {
      image: "/images/destinations/capeTown.png",
      name: "Cape Town, South Africa",
    },
  ],
};

export const AdventureTrips: TripPackage = {
  title: "Adventure Trips",
  price: 4600,
  destinations: [
    { image: "/images/destinations/muai.png", name: "Maui, Hawaii" },
    { image: "/images/destinations/picchu.png", name: "Machu Picchu, Peru" },
    { image: "/images/destinations/giza.png", name: "Giza Cairo, Egypt" },
    {
      image: "/images/destinations/everest.png",
      name: "Everest Base Camp, Nepal",
    },
    { image: "/images/mt.Kenya.png", name: "Mount Kenya" },
    { image: "/images/destinations/sydney.png", name: "Sydney, Australia" },
  ],
};

export const CulturalTours: TripPackage = {
  title: "Cultural Tours",
  price: 4100,
  destinations: [
    {
      image: "/images/destinations/thegreatwallofchina.png",
      name: "The Great Wall of China",
    },
    { image: "/images/destinations/rome.png", name: "Rome, Italy" },
    { image: "/images/destinations/istanbul.png", name: "Istanbul, Turkey" },
    { image: "/images/destinations/petra.png", name: "Petra, Jordan" },
    {
      image: "/images/destinations/prague.png",
      name: "Prague, Czech Republic",
    },
    { image: "/images/destinations/barcelona.png", name: "Barcelona, Spain" },
  ],
};

export const WildlifeSafaris: TripPackage = {
  title: "Wildlife Safaris",
  price: 4000,
  destinations: [
    {
      image: "/images/tsavoNationalPark.png",
      name: "Tsavo National Park, Kenya",
    },
    {
      image: "/images/nairobiNationalPark.png",
      name: "Nairobi National Park, Kenya",
    },
    { image: "/images/lakeNakuru.png", name: "Lake Nakuru, Kenya" },
    {
      image: "/images/mt.Ruwenzori.png",
      name: "Mt Ruwenzori, Uganda-Congo border",
    },
    { image: "/images/coastalKenya.png", name: "Coastal Kenya" },
    { image: "/images/mt.Kenya.png", name: "Mount Kenya" },
  ],
};

export const EcoTours: TripPackage = {
  title: "Eco-Tours",
  price: 3700,
  destinations: [
    { image: "/images/mt.Kenya.png", name: "Mount Kenya" },
    {
      image: "/images/mt.Ruwenzori.png",
      name: "Mt Ruwenzori, Uganda-Congo border",
    },
    { image: "/images/lakeNakuru.png", name: "Lake Nakuru, Kenya" },
    {
      image: "/images/tsavoNationalPark.png",
      name: "Tsavo National Park, Kenya",
    },
    {
      image: "/images/destinations/everest.png",
      name: "Everest Base Camp, Nepal",
    },
    { image: "/images/destinations/bali.png", name: "Bali, Indonesia" },
  ],
};

export const LuxuryVacations: TripPackage = {
  title: "Luxury Vacations",
  price: 5100,
  destinations: [
    { image: "/images/destinations/paris.png", name: "Paris, France" },
    { image: "/images/destinations/rome.png", name: "Rome, Italy" },
    { image: "/images/destinations/sydney.png", name: "Sydney, Australia" },
    {
      image: "/images/destinations/queenstone.png",
      name: "Queenstown, New Zealand",
    },
    { image: "/images/destinations/barcelona.png", name: "Barcelona, Spain" },
    { image: "/images/destinations/muai.png", name: "Maui, Hawaii" },
  ],
};

export const BeachHolidays: TripPackage = {
  title: "Beach Holidays",
  price: 3900,
  destinations: [
    { image: "/images/destinations/maldives.png", name: "Maldives" },
    { image: "/images/coastalKenya.png", name: "Coastal Kenya" },
    {
      image: "/images/destinations/capeTown.png",
      name: "Cape Town, South Africa",
    },
    { image: "/images/destinations/muai.png", name: "Maui, Hawaii" },
    { image: "/images/destinations/bali.png", name: "Bali, Indonesia" },
    {
      image: "/images/destinations/brazil.png",
      name: "Rio de Janeiro, Brazil",
    },
  ],
};

export const WellnessRetreats: TripPackage = {
  title: "Wellness Retreats",
  price: 3650,
  destinations: [
    { image: "/images/destinations/bali.png", name: "Bali, Indonesia" },
    { image: "/images/destinations/maldives.png", name: "Maldives" },
    { image: "/images/mt.Kenya.png", name: "Mount Kenya" },
    { image: "/images/lakeNakuru.png", name: "Lake Nakuru, Kenya" },
    { image: "/images/destinations/venice.png", name: "Venice, Italy" },
    {
      image: "/images/destinations/capeTown.png",
      name: "Cape Town, South Africa",
    },
  ],
};

export const CulinaryTours: TripPackage = {
  title: "Culinary Tours",
  price: 3850,
  destinations: [
    { image: "/images/destinations/paris.png", name: "Paris, France" },
    { image: "/images/destinations/istanbul.png", name: "Istanbul, Turkey" },
    { image: "/images/destinations/barcelona.png", name: "Barcelona, Spain" },
    {
      image: "/images/destinations/brazil.png",
      name: "Rio de Janeiro, Brazil",
    },
    {
      image: "/images/destinations/capeTown.png",
      name: "Cape Town, South Africa",
    },
    { image: "/images/destinations/rome.png", name: "Rome, Italy" },
  ],
};
