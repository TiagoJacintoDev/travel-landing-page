import TopSection from "./sections/TopSection";
import About from "./components/About/About";
import TripPlaner from "./components/TripPlaner/TripPlaner";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useMediaQuery } from "react-responsive";
import { variables as v } from "./styles/helpers/variables";

export default function App() {
  const isMobile = useMediaQuery({
    query: `(max-width: ${v.ds.tablet})`,
  });

  return (
    <>
      <TopSection isMobile={isMobile} />
      <About />
      <TripPlaner />
      <Blog isMobile={isMobile} />
      <Contact />
      <Footer isMobile={isMobile} />
    </>
  );
}
