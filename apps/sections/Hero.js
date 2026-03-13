import Link from "next/link";
import Button from "../components/Button";

export default function Hero() {
  return (
    <section className="relative py-32 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white">
      
      <div className="max-w-6xl mx-auto px-4 text-center">

        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          DevOps & Cloud Solutions
        </h1>

        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
          OffshoreMitra helps businesses accelerate digital transformation
          with modern DevOps practices, cloud infrastructure, and automation.
        </p>

        <div className="mt-10 flex justify-center">

          <Link href="/contact">
            <Button>
              Contact Us
            </Button>
          </Link>

        </div>

      </div>

    </section>
  );
}
