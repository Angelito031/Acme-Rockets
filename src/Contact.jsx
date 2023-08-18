import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <hr className="mx-auto bg-black dark:bg-white w-1/2" />
      <section id="contact" className="p-6 my-12 scroll-mt-20">
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Contact
        </h2>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
