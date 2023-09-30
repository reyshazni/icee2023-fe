import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { About } from '@/components/About'
import VideoPlayer from '@/components/VideoPlayer'
import Sponsors from '@/components/Sponsors'
import Vision from '@/components/Vision'
import Garis from '@/components/Garis'
import Competition from '@/components/Competition'
import SlideFromLeft from '@/components/Animations/SlideFromLeft'
import PastEvents from '@/components/PastEvents'
import Events from '@/components/Events'
import Numbers from '@/components/Numbers'
import FadeIn from '@/components/Animations/FadeIn'
import ScaleUp from '@/components/Animations/ScaleUp'

export default function Home() {
  return (
    <>
      <Head>
        <title>ICEE 2023</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main className="relative overflow-hidden bg-[#004141] bg-[url(../images/backgrounds/stars-pattern.svg)]">
        <Garis className="absolute top-[40%] animate-glow " />

        <FadeIn duration={6}>
          <VideoPlayer />
        </FadeIn>

        {/* <div className='bg-[#004141] w-full h-10'></div> */}
        {/* <PrimaryFeatures /> */}
        <About />
        <Vision />
        <Competition />

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

        {/* <Reviews />
        <Faqs /> */}
      </main>
      {/* <Footer /> */}
    </>
  )
}
