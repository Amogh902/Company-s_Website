export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <div className="p-6 border rounded-xl shadow-sm">
            <p className="text-gray-600">
              OffshoreMitra helped us modernize our DevOps pipeline and
              significantly improved deployment speed.
            </p>
            <h4 className="mt-4 font-semibold">Tech Startup Founder</h4>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <p className="text-gray-600">
              Their cloud expertise helped us scale our infrastructure
              efficiently while controlling operational costs.
            </p>
            <h4 className="mt-4 font-semibold">CTO, SaaS Company</h4>
          </div>

          <div className="p-6 border rounded-xl shadow-sm">
            <p className="text-gray-600">
              A highly skilled DevOps team that understands automation
              and cloud architecture extremely well.
            </p>
            <h4 className="mt-4 font-semibold">Engineering Manager</h4>
          </div>

        </div>

      </div>
    </section>
  )
}