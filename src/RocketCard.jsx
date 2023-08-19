/* eslint-disable react/prop-types */
const RocketCard = ({ rocketman, firstParagraph, secondParagraph }) => {
  return (
    <li className="flex w-2/3 flex-col items-center rounded-3xl border border-solid border-slate-900 bg-white px-2 py-6 shadow-xl dark:border-gray-100 dark:bg-black sm:w-5/6">
      <img src={rocketman} alt="Rocket Man" className="mb-6 w-1/2" />
      <h3 className="text-center text-3xl text-slate-900 dark:text-white">
        Explorer
      </h3>
      <p className="mt-2 hidden text-center text-3xl text-slate-500 dark:text-slate-400 sm:block">
        {firstParagraph}
      </p>
      <p className="mt-2 text-center text-2xl text-slate-500 dark:text-slate-400 sm:hidden">
        {secondParagraph}
      </p>
    </li>
  );
};

export default RocketCard;
