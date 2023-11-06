import GetInTouch from '@/components/GetInTouch'
import Hero from '@/components/Hero'
import InfoGroup from '@/components/InfoGroup'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Visual from '@/components/Visual'
import FreqAsk from '@/components/FreqAsk'
import { Poppins } from 'next/font/google'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'] 
})

export default function Home() {
  return (
    <main className={`font-normal ${poppins.className} overflow-hidden`}>
      <Navbar />
      <Hero />
      <InfoGroup />
      <Visual />
      <GetInTouch />
      <Services />
      <FreqAsk />
      <Contact />
      <Footer />      
    </main>
  )
}
