import { FeaturedDestinations } from "./components/FeatureDestinations";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Theme } from "./components/Theme";
import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { NewsLetter } from "./components/NewsLetter";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <>
        <Hero />
        <AboutUs />
        <FeaturedDestinations />
        <NewsLetter />
      </>
    </ThemeProvider>
  );
}

export default App;
