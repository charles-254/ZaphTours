import { DestinationLanding } from "../components/Destinationlanding";
import { DestinationsList } from "../components/Destinations";
import { Footer } from "../components/Footer";

function Destinations() {
  return (
    <>
      {" "}
      <DestinationLanding />
      <DestinationsList />
      <Footer />
    </>
  );
}

export default Destinations;
