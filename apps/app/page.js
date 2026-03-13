import Navbar from "../components/Navbar"
import Hero from "../sections/Hero"
import Services from "../sections/Services"
import WhyUs from "../sections/WhyUs"
import Testimonials from "../sections/Testimonials"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonials />
    </div>
  )
}