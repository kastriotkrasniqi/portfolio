const ContactForm = () => {
  return (
    <form className="my-8 space-y-8">
      <input
        type="text"
        placeholder="Name"
        className="w-full bg-gray-100 border border-gray-400 px-4 py-3.5 outline-none text-sm dark:bg-[#333333]"
      />
      <input
        type="email"
        placeholder="Email"
        className="w-full bg-gray-100 border border-gray-400 px-4 py-3.5 outline-none text-sm dark:bg-[#333333]"
      />
      <textarea
        cols={40}
        rows={10}
        placeholder="Message"
        className="w-full bg-gray-100 border border-gray-400 px-4 py-3.5 outline-none text-sm dark:bg-[#333333]"
      />
      <button className="mt-4 text-white bg-black px-7 py-3.5">
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
