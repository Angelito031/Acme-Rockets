import Qoutes from "./Qoutes";

const Testimonials = () => {
  return (
    <>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      <section id="testimonials" className="my-12 scroll-mt-20 p-6">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Testimonials
        </h2>
        <Qoutes
          qoute="Acme has always been there for me. Their Explorer rocket arrived in a
          wooden crate as expected."
          author="Wile E. Cayote, Genlus"
        />
        <Qoutes
          qoute="The Acme Adventurer Rocket has thwarted my Illudium Q-36 Explosive
            Space Modulator on several occassions. This makes me very, very angry!
            Nevertheless, K-9 and I have awarded Acme the Martian contract for
            space exploration rockets based on Acme's quality and sturdy
            designs."
          author="Marvin The Martian &amp; K-9"
        />
        <Qoutes
          qoute="I knew I not only wanted &#8212;
            I needed &#8212; Acme's Infinity
            Rocket for my mission in space. Acme delivered in one day! Nothing
            says Take me to your leader like Acme's
            Infinity Rocket! 💯"
          author="Buzz Lightyear"
        />
      </section>
    </>
  );
};

export default Testimonials;
