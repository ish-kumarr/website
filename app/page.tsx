import Hero from '../components/Hero'
import WhoWeAre from '../components/WhoWeAre'
import HowItWorks from '../components/HowItWorks'
import Services from '../components/Services'
import Plans from '../components/Plans'
import MobilePlans from '../components/MobilePlans'
import SuccessStories from '../components/SuccessStories'
import CareerForm from '../components/CareerForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="scroll-smooth">
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <WhoWeAre />
      </section>
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="services">
        <Services />
      </section>
      <Plans />
      <MobilePlans />
      <section id="success-stories">
        <SuccessStories />
      </section>
      <section id="contact">
        <CareerForm />
      </section>
      <Footer />
    </main>
  )
}

