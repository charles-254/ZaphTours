import { Hero } from "../components/Hero";
import { AboutUs } from "../components/AboutUs";
import { FeaturedDestinations } from "../components/FeatureDestinations";
import { Testimonials } from "../components/Testimonials";
import { NewsLetter } from "../components/NewsLetter";
import { Footer } from "../components/Footer";

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <FeaturedDestinations />
      <Testimonials />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default Home;
