import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Puppies from "./Pages/Puppies";
import Services from "./Pages/Services";
import Faq from "./Pages/Faq";
import PetListing from "./Pages/PetListing";
import ServicesSingal from "./Pages/ServicesSingal";
import LatestNews from "./Pages/LatestNews";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import PageNotFound from "./Pages/PageNotFound";
import GoToTop from "./Components/GoToTop";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/puppies" element={<Puppies />} />
        <Route path="/services" element={<Services />} />
        <Route>
          <Route path="/faqs" element={<Faq />} />
          <Route path="/pet" element={<PetListing />} />
          <Route path="/singalPage" element={<ServicesSingal />} />
          <Route path="/news" element={<LatestNews />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <GoToTop />
      <Footer />
    </Router>
  );
};

export default App;
