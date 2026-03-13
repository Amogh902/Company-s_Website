export default function PageHero({ title, description }) {
  return (
    <section className="py-28 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">

        <h1 className="text-5xl font-bold mb-6">
          {title}
        </h1>

        <p className="text-lg text-blue-100">
          {description}
        </p>

      </div>
    </section>
  );
}
