import Head from 'next/head'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { About } from '@/components/About'
import VideoPlayer from '@/components/VideoPlayer'
import Sponsors from '@/components/Sponsors'
import Vision from '@/components/Vision'
import Garis from '@/components/Background/Garis'
import Competition from '@/components/Competition'
import Events from '@/components/Events'
import Numbers from '@/components/Numbers'
import FadeIn from '@/components/Animations/FadeIn'
import EventCarousel from '@/components/EventCarousel'
import WigglyLine from '@/components/Background/WigglyLine'
import WigglyLine2 from '@/components/Background/WigglyLine2'
import EventLine from '@/components/Background/EventLine'
import PastEventLine from '@/components/Background/PastEventLine'
import NumberLine from '@/components/Background/NumberLine'
import SponsorLine from '@/components/Background/SponsorLine'
import SponsorLine2 from '@/components/Background/SponsorLine2'
import PartnerLine from '@/components/Background/PartnerLine'

export default function Home() {
  return (
    <>
      <Head>
        <title>ICEE 2024</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main className="relative overflow-hidden bg-[#004141] bg-[url(../images/backgrounds/stars-pattern.svg)]">
        
        {/* BACKGROUND SVGs */}
        <Garis className="absolute top-[20%] animate-glow " />
        <WigglyLine className="absolute top-[30%] right-0 animate-glow " />
        <WigglyLine2 className="absolute top-[30%] right-0 animate-glow " />
        <EventLine className="absolute top-[44%] right-0 animate-glow"/>
        <PastEventLine className="absolute top-[55%] animate-glow"/>
        <NumberLine className="absolute top-[70%] right-0 animate-glow"/>
        <SponsorLine className="absolute top-[80%] animate-glow"/>
        <SponsorLine2 className="absolute top-[80%] animate-glow"/>
        <PartnerLine className="absolute top-[90%] right-0 animate-glow"/>




        <FadeIn duration={6}>
          <VideoPlayer />
        </FadeIn>
        <About />
        <Vision />
        <Competition />

        <EventCarousel />

        <Events />

        <Numbers />

        <Sponsors
          title={'Our Sponsors'}
          url={process.env.BE_STAGING_SPONSOR_URL}
        />

        <Sponsors
          title={'Our Media Partners'}
          url={process.env.BE_STAGING_MEDPAR_URL}
        />
      </main>
      <Footer />
    </>
  )
}
// TODO : 
// 1. Change HTML title to 2024 (DONE)
// 2. Change the .ico to https://drive.google.com/file/d/1dlb8QH7cslW1j0cpQh8LdXWwYEfSYeJy/view (DONE)
// 3. Resize the carousel to fit the Heading and the carousel in one view 