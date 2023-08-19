import RocketCard from "./RocketCard";
import rocketman from "./assets/images/rocketman.png";
import rocketride from "./assets/images/rocketride.png";
import rocketlaunch from "./assets/images/rocketlaunch.png";

const OurRockets = () => {
  return (
    <>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      <section id="rockets" className="my-12 scroll-mt-20 p-6">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Our Rockets
        </h2>
        <ul className="mx-auto my-12 flex list-none flex-col items-center gap-8 sm:flex-row">
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
