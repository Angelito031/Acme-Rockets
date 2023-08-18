import Contact from "./Contact";
import Hero from "./Hero";
import OurRockets from "./OurRockets";
import Testimonials from "./Testimonials";
import rocketdab from "./assets/images/rocketdab.png";

const MainBody = () => {
  return (
    <main className="mx-auto max-w-4xl ">
      <Hero rocketdab={rocketdab} />
      <OurRockets />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default MainBody;
