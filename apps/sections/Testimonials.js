export default function Testimonials() {
  const testimonials = [
    {
      name: "Tech Startup Founder",
      review:
        "OffshoreMitra helped us modernize our DevOps pipeline and significantly improved deployment speed.",
    },
    {
      name: "CTO, SaaS Company",
      review:
        "Their cloud expertise helped us scale our infrastructure efficiently while controlling operational costs.",
    },
    {
      name: "Engineering Manager",
      review:
        "A highly skilled DevOps team that understands automation and cloud architecture extremely well.",
    },
  ];

  return (
    <section className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-16">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition"
            >

              <div className="text-yellow-400 mb-4">
                ★★★★★
              </div>

              <p className="text-gray-600 mb-6">
                {testimonial.review}
              </p>

              <h4 className="font-semibold text-gray-900">
                {testimonial.name}
              </h4>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}