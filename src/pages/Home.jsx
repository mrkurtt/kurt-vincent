import Hero from "../components/Hero";
import Seo from "../components/Seo";
import { site } from "../utils/site";
import Work from "./Work";
import Capabilities from "./Capabilities";
import Experience from "./Experience";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <Seo
        title={site.metaTitle}
        description={site.metaDescription}
        path="/"
      />
      <Hero />
      <Work />
      <Capabilities />
      <Experience />
      <About />
      <Contact />
    </>
  );
};

export default Home;
