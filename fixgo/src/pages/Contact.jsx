const Contact = () => {
  return (
    <div className="min-h-screen bg-[#020817] text-white flex items-center justify-center px-6">

      <div className="w-full max-w-4xl bg-[#0F172A] p-10 rounded-3xl shadow-2xl">

        <h1 className="text-5xl font-bold text-cyan-400 mb-4">
          Contact Us
        </h1>

        <p className="text-gray-400 mb-10">
          Need help with your repair request? Send us a message.
        </p>

        <form className="grid gap-6">

          <input
            type="text"
            placeholder="Your Name"
            className="bg-[#1E293B] p-4 rounded-xl outline-none border border-transparent focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="bg-[#1E293B] p-4 rounded-xl outline-none border border-transparent focus:border-cyan-400"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="bg-[#1E293B] p-4 rounded-xl outline-none border border-transparent focus:border-cyan-400 resize-none"
          ></textarea>

          <button
            className="bg-cyan-500 hover:bg-cyan-600 transition duration-300 py-4 rounded-xl font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>
  );
};

export default Contact;