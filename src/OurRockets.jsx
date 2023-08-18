import RocketCard from "./RocketCard";
import rocketman from "./assets/images/rocketman.png";
import rocketride from "./assets/images/rocketride.png";
import rocketlaunch from "./assets/images/rocketlaunch.png";

const OurRockets = () => {
  return (
    <>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      <section id="rockets" className="p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Our Rockets
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col sm:flex-row items-center gap-8">
          <RocketCard
            alt="Rocket Man"
            rocketman={rocketman}
            firstParagraph="$"
            secondParagraph="Affordable Exploration"
          />
          <RocketCard
            alt="Rocket Ride"
            rocketman={rocketride}
            firstParagraph="$$"
            secondParagraph="Best Selling Rocket!"
          />
          <RocketCard
            alt="Infinity"
            rocketman={rocketlaunch}
            firstParagraph="$$$"
            secondParagraph="Luxury Starship"
          />
        </ul>
      </section>
    </>
  );
};

export default OurRockets;
