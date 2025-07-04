type Destination = {
  title: string;
  description: string;
  location: string;
  price: number;
  img: string;
};

const featuredDestinations: Destination[] = [
  {
    title: "Mount Kenya",
    description:
      "Conquer Africa’s second-highest peak through scenic trails and alpine beauty.",
    location: "Central Kenya",
    price: 320,
    img: "/images/mt.Kenya.png",
  },
  {
    title: "Mt Ruwenzori",
    description:
      "A misty mountain adventure with glaciers, waterfalls, and unique flora.",
    location: " Uganda-Congo border",
    price: 400,
    img: "/images/mt.Ruwenzori.png",
  },
  {
    title: "Lake Nakuru",
    description:
      "Home to flamingos, rhinos, and serene lake views, a perfect day safari.",
    location: "Rift Valley, Kenya",
    price: 180,
    img: "/images/lakeNakuru.png",
  },
  {
    title: "Tsavo National Park",
    description:
      "Largest park in Kenya, famous for red elephants and stunning savannahs",
    location: "Southeastern Kenya",
    price: 250,
    img: "/images/tsavoNationalPark.png",
  },
  {
    title: "Nairobi National Park",
    description:
      "Wildlife meets the city, lions, giraffes, and rhinos with a skyline view.",
    location: "Nairobi, Kenya",
    price: 120,
    img: "/images/nairobiNationalPark.png",
  },
  {
    title: "Coastal Kenya",
    description:
      "Pristine beaches, Swahili culture, and ocean adventures await.",
    location: "Mombasa, Diani, Watamu",
    price: 280,
    img: "/images/coastalKenya.png",
  },
];

export default featuredDestinations;
