import PageHero from "../../components/PageHero";

export default function ContactPage() {
  return (
    <div>

      <PageHero
        title="Contact Us"
        description="Have a DevOps or cloud infrastructure challenge? Our team is ready to help you build scalable and reliable solutions."
      />

      <div className="max-w-4xl mx-auto px-4 py-20">

        <div className="bg-white p-10 rounded-xl border border-gray-200 shadow-sm">

          <form className="space-y-6">

            <div>
              <label className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us about your project..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}
