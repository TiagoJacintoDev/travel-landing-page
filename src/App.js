import TopSection from './sections/TopSection';
import About from './components/About/About';
import TripPlaner from './components/TripPlaner/TripPlaner';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <TopSection />
      <About />
      <TripPlaner />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
