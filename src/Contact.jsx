import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <hr className="mx-auto w-1/2 bg-black dark:bg-white" />
      <section id="contact" className="my-12 scroll-mt-20 p-6">
        <h2 className="mb-6 text-center text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
          Contact
        </h2>
        <ContactForm />
      </section>
    </>
  );
};

export default Contact;
