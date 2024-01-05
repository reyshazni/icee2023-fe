import Head from 'next/head'
import { Header } from '@/components/Header'
import { toast } from 'react-toastify'
import RegisterCard from '@/components/Cards/RegisterCard'
import SlideFromLeft from '@/components/Animations/SlideFromLeft'
import { carouselData } from '@/constants/event_carousel'
import { useRouter } from 'next/router'

export default function Register() {
  const router = useRouter()

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
      <main className="relative flex min-h-full flex-col items-center justify-start bg-[#004141] bg-[url(../images/backgrounds/stars-pattern.svg)] py-[100px]">
        <h1 className="text-center font-sarmady text-[40px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[120px]">
          Registration
        </h1>
        <div className="flex w-full flex-wrap justify-center gap-[70px] md:gap-[50px]">
          <SlideFromLeft duration={1}>
            <RegisterCard
              data={carouselData[0]}
              onClick={() => {
                router.push('/register/conference')
              }}
            />
          </SlideFromLeft>
          <SlideFromLeft duration={2}>
            <RegisterCard
              data={carouselData[1]}
              onClick={() => {
                toast.info('Coming Soon!', {
                  position: 'bottom-center',
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
                  progress: undefined,
                  theme: 'colored',
                })
              }}
            />
          </SlideFromLeft>
          <SlideFromLeft duration={3}>
            <RegisterCard
              data={carouselData[2]}
              onClick={() => {
                toast.info('Coming Soon!', {
                  position: 'bottom-center',
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: false,
                  progress: undefined,
                  theme: 'colored',
                })
              }}
            />
          </SlideFromLeft>
        </div>
      </main>
    </>
  )
}
