/* eslint-disable react/prop-types */
const Hero = ({ rocketdab }) => {
  return (
    <section
      id="hero"
      className="mb-12 flex scroll-mt-40 flex-col-reverse items-center justify-center gap-8 px-6 sm:flex-row"
    >
      <article className="sm:w-1/2">
        <h2 className="max-w-md text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl">
          We Boldy Go{" "}
          <span className="text-indigo-700 dark:text-indigo-300">
            Where No Rocket
          </span>{" "}
          Has Gone Before...
        </h2>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          {" "}
          We`re building rockets for the next century today. From the moon to
          Mars, Jupiter and beyond...
        </p>
        <p className="mt-4 max-w-md text-center text-2xl text-slate-700 dark:text-slate-400 sm:text-left">
          Think Acme Rockets.
        </p>
      </article>
      <img src={rocketdab} alt="Rocket Dab" className="w-1/2" />
    </section>
  );
};

export default Hero;
