import { Hero } from "./components/Hero";
import { AboutUs } from "./components/AboutUs";
import { FeaturedDestinations } from "./components/FeatureDestinations";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { Theme } from "./components/Theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <>
        <Hero />
        <AboutUs />
        <FeaturedDestinations />
      </>
    </ThemeProvider>
  );
}

export default App;
