import Button from "../components/Button";

export default function CTA() {
  return (
    <section className="py-28 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4">

        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Infrastructure?
        </h2>

        <p className="text-lg text-blue-100 mb-10">
          Partner with OffshoreMitra to implement modern DevOps practices
          and scalable cloud solutions for your business.
        </p>

        <Button>
          Start Your DevOps Journey
        </Button>

      </div>
    </section>
  );
}