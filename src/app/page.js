import AboutUsHero from '@/components/AboutUsHero'
import ContactHero from '@/components/ContactHero'
import FeaturesHero from '@/components/FeaturesHero'
import Footer from '@/components/Footer'
import HomeHero from '@/components/HomeHero'
import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='max-w-screen bg-white'>
      <Navbar />
      <HomeHero />
      <FeaturesHero />
      <AboutUsHero />
      <ContactHero />
      <Footer />
    </main>
  )
}
