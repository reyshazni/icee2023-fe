//Sponsors Images
import ASR from '@/images/sponsors/ASR(S).jpg'
import Bappeda from '@/images/sponsors/Bappeda (s).jpg'
import JasaMarga from '@/images/sponsors/Jasa Marga PNG.png'
import KrakatauSteel from '@/images/sponsors/Krakatau Steel (S).png'
import MCM from '@/images/sponsors/MCM (S).png'
import PTBajaTitianUtama from '@/images/sponsors/PT Baja Titian Utama (s).jpg'
import PTDSI from '@/images/sponsors/PT DSI (M).png'
import PTGSU from '@/images/sponsors/PT GSU (s).png'
import PTMRTJakarta from '@/images/sponsors/PT MRT Jakarta (S).png'
import PTPromisco from '@/images/sponsors/PT Promisco (S).png'
import PTSIG from '@/images/sponsors/PT SIG (s).png'
import PTWIKA from '@/images/sponsors/PT WIKA Beton (S).gif'
import TNT from '@/images/sponsors/tnt (s).png'

//Medparts Images
import AboutCampus from '@/images/medparts/Abou Campus.jpg'
import CiviliansHub from '@/images/medparts/Civilians Hub.png'
import Eventcenter from '@/images/medparts/Eventcenter.png'
import Fkmtsi from '@/images/medparts/FKMTSI.png'
import Infotekniksipil from '@/images/medparts/infotekniksipil.png'
import LogoEventcampus from '@/images/medparts/LOGO @eventcampus.png'
import MedpartKolaborasi from '@/images/medparts/Medpart Kolaborasi.png'
import SalinanWebinar from '@/images/medparts/Salinan Webinar.png'
import TekniksipilId from '@/images/medparts/Tekniksipil.id.jpg'

import Image from 'next/image'

const sMedpart = [
  {
    file_url: AboutCampus,
    name: 'About Campus',
  },

  {
    file_url: Eventcenter,
    name: 'Eventcenter',
  },
  {
    file_url: Fkmtsi,
    name: 'FKMTSI',
  },
  {
    file_url: Infotekniksipil,
    name: 'Infotekniksipil',
  },
  {
    file_url: CiviliansHub,
    name: 'Civilians Hub',
  },
  {
    file_url: LogoEventcampus,
    name: 'Logo Eventcampus',
  },
  {
    file_url: MedpartKolaborasi,
    name: 'Medpart Kolaborasi',
  },
  {
    file_url: TekniksipilId,
    name: 'Tekniksipil.id',
  },
  {
    file_url: SalinanWebinar,
    name: 'Salinan Webinar',
  },
]

const mMedpart = []

const lMedpart = []

const xlMedpart = []

const sSponsor = [
  {
    file_url: ASR,
    name: 'ASR',
  },
  {
    file_url: Bappeda,
    name: 'Bappeda',
  },
  {
    file_url: JasaMarga,
    name: 'Jasa Marga',
  },
  {
    file_url: KrakatauSteel,
    name: 'Krakatau Steel',
  },
  {
    file_url: MCM,
    name: 'MCM',
  },
  {
    file_url: PTBajaTitianUtama,
    name: 'PT Baja Titian Utama',
  },
  {
    file_url: PTGSU,
    name: 'PT GSU',
  },
  {
    file_url: PTSIG,
    name: 'PT SIG',
  },
  {
    file_url: PTMRTJakarta,
    name: 'PT MRT Jakarta',
  },
  {
    file_url: PTPromisco,
    name: 'PT Promisco',
  },
  {
    file_url: PTWIKA,
    name: 'PT WIKA Beton',
  },
  {
    file_url: TNT,
    name: 'TNT',
  },
]

const mSponsor = [
  {
    file_url: PTDSI,
    name: 'PT DSI',
  },
]

const lSponsor = []

const xlSponsor = []

export default function SponsorsLocal({ title, isSponsor }) {
  return (
    <section
      id="sponsors"
      aria-label="Sponsors for this event"
      className="my-[100px] flex flex-col items-center justify-center pb-[100px]"
    >
      <h1 className="text-center font-sarmady text-[40px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[120px]">
        {title}
      </h1>
      {isSponsor ? (
        <div className="flex w-[80vw] flex-col rounded-[30px] bg-[#FFFFFF] p-[40px] shadow-[0_4px_100px_0_rgba(250,250,250,0.25)]">
          {/* <div className="mb-[20px] flex flex-wrap items-center justify-center gap-[20px]">
            {xlSponsor.map((sponsor, index) => (
              <Image
                key={index}
                src={sponsor.file_url}
                alt={sponsor.name}
                height={120}
                width={'100%'}
                objectFit="contain"
              />
            ))}
          </div>
          <div className="mb-[20px] flex flex-wrap items-center justify-center gap-[20px]">
            {lSponsor.map((sponsor, index) => (
              <Image
                key={index}
                src={sponsor.file_url}
                alt={sponsor.name}
                height={96}
                width={'100%'}
                objectFit="contain"
              />
            ))}
          </div> */}
          <div className="mb-[20px] flex flex-wrap items-center justify-center gap-[20px]">
            {mSponsor.map((sponsor, index) => (
              <div key={index} className="min-w-[200px]">
                <Image src={sponsor.file_url} alt={sponsor.name} sizes="2" />
              </div>
            ))}
          </div>
          <div className="relative flex flex-wrap items-center justify-center gap-[20px]">
            {sSponsor.map((sponsor, index) => {
              switch (sponsor.name) {
                case 'Bappeda':
                  return (
                    <Image
                      key={index}
                      src={sponsor.file_url}
                      alt={sponsor.name}
                      height={64}
                      width={64}
                    />
                  )
                case 'MCM':
                  return (
                    <Image
                      key={index}
                      src={sponsor.file_url}
                      alt={sponsor.name}
                      height={42}
                      width={164}
                    />
                  )
                case 'PT Baja Titian Utama':
                  return (
                    <Image
                      key={index}
                      src={sponsor.file_url}
                      alt={sponsor.name}
                      height={160}
                      width={160}
                    />
                  )
                case 'Krakatau Steel':
                  return (
                    <Image
                      key={index}
                      src={sponsor.file_url}
                      alt={sponsor.name}
                      height={100}
                      width={100}
                    />
                  )

                default:
                  return (
                    <Image
                      key={index}
                      src={sponsor.file_url}
                      alt={sponsor.name}
                      height={48}
                      width={100}
                      objectFit="fill"
                    />
                  )
              }
            })}
          </div>
        </div>
      ) : (
        <div className="flex w-[80vw] flex-col rounded-[30px] bg-[#FFFFFF] p-[40px] shadow-[0_4px_100px_0_rgba(250,250,250,0.25)]">
          {/* <div className="mb-[20px] flex flex-wrap items-center justify-center gap-[20px]">
            {xlMedpart.map((sponsor, index) => (
              <Image
                key={index}
                src={sponsor.file_url}
                alt={sponsor.name}
                height={120}
                width={'100%'}
                objectFit="contain"
              />
            ))}
          </div>
          <div className="mb-[20px] flex flex-wrap items-center justify-center gap-[20px]">
            {lMedpart.map((sponsor, index) => (
              <Image
                key={index}
                src={sponsor.file_url}
                alt={sponsor.name}
                height={96}
                width={'100%'}
                objectFit="contain"
              />
            ))}
          </div>
          <div className="mb-[20px] flex flex-wrap items-center justify-center gap-[20px]">
            {mMedpart.map((sponsor, index) => (
              <div key={index} className="min-w-[200px]">
                <Image src={sponsor.file_url} alt={sponsor.name} sizes="2" />
              </div>
            ))}
          </div> */}
          <div className="relative flex flex-wrap items-center justify-center gap-[20px]">
            {sMedpart.map((sponsor, index) => {
              switch (sponsor.name) {
                case 'Civilians Hub':
                  return (
                    <Image
                      key={index}
                      src={sponsor.file_url}
                      alt={sponsor.name}
                      height={48}
                      width={120}
                    />
                  )
                case 'Salinan Webinar':
                  return (
                    <Image
                      key={index}
                      src={sponsor.file_url}
                      alt={sponsor.name}
                      height={48}
                      width={120}
                    />
                  )
                case 'About Campus':
                  return (
                    <Image
                      key={index}
                      src={sponsor.file_url}
                      alt={sponsor.name}
                      height={54}
                      width={120}
                    />
                  )
                case 'Eventcenter':
                  return (
                    <Image
                      key={index}
                      src={sponsor.file_url}
                      alt={sponsor.name}
                      height={72}
                      width={72}
                    />
                  )
                default:
                  return (
                    <Image
                      key={index}
                      src={sponsor.file_url}
                      alt={sponsor.name}
                      height={64}
                      width={64}
                      objectFit="fill"
                    />
                  )
              }
            })}
          </div>
        </div>
      )}
    </section>
  )
}
