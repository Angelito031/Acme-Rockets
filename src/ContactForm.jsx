const ContactForm = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="items-left mx-auto flex max-w-4xl flex-col gap-4 text-2xl sm:text-3xl"
    >
      <label htmlFor="subject">Subject:</label>
      <input
        type="text"
        name="subject"
        id="subject"
        required
        minLength="3"
        maxLength="60"
        placeholder="Your Subject"
        className="w-full rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
      />
      <label htmlFor="message">Message:</label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="10"
        placeholder="Your Message"
        required
        className="w-full resize-none rounded-xl border border-solid border-slate-900 p-3 text-2xl text-black dark:border-none sm:text-3xl"
      ></textarea>
      <button className="w-48 rounded-xl border border-solid border-slate-900 bg-teal-700 p-3 text-white hover:bg-teal-600 active:bg-teal-500 dark:border-none">
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
