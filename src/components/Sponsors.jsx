import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Sponsors({title,url}) {
  const [xlSponsor, setXlSponsor] = useState([])
  const [lSponsor, setLSponsor] = useState([])

  const [mSponsor, setMSponsor] = useState([])

  const [sSponsor, setSSponsor] = useState([])

  useEffect(() => {
    // Define the URL to fetch data from
    const apiUrl = url

    const listXL = []
    const listL = []
    const listM = []
    const listS = []

    // Fetch data from the URL
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Once data is fetched, set it to the state
        data.data.forEach((sponsor) => {
          switch (sponsor.size) {
            case 'xl':
              listXL.push(sponsor)
              setXlSponsor(listXL)
              break
            case 'l':
              listL.push(sponsor)
              setLSponsor(listL)
              break
            case 'm':
              listM.push(sponsor)
              setMSponsor(listM)
              break
            case 's':
              listS.push(sponsor)
              setSSponsor(listS)
              break
            default:
              break
          }
        })

        // setSponsors(data.data)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
      })
  }, []) //

  return (
    <section
      id="sponsors"
      aria-label="Features for building a portfolio"
      className="my-[100px] flex flex-col items-center justify-center pb-[100px]"
    >
      <h1 className="font-sarmady text-[60px] lg:text-[120px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)]">
        {title}
      </h1>
      <div className="flex w-[80vw] flex-col rounded-[30px] bg-[#FAFAFA] p-[40px] shadow-[0_4px_100px_0_rgba(250,250,250,0.25)]">
        <div className="mb-[20px] flex items-center justify-center gap-[20px]">
          {xlSponsor.map((sponsor, index) => (
            <div key={index}>
              <img className="h-xl" src={sponsor.file_url} alt={sponsor.name} />
            </div>
          ))}
        </div>
        <div className="mb-[20px] flex items-center justify-center gap-[20px]">
          {lSponsor.map((sponsor, index) => (
            <div key={index}>
              <img className="h-l" src={sponsor.file_url} alt={sponsor.name} />
            </div>
          ))}
        </div>
        <div className="mb-[20px] flex items-center justify-center gap-[20px]">
          {mSponsor.map((sponsor, index) => (
            <div key={index}>
              <img className="h-m" src={sponsor.file_url} alt={sponsor.name} />
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-[20px]">
          {sSponsor.map((sponsor, index) => (
            <div key={index}>
              <img className="h-s" src={sponsor.file_url} alt={sponsor.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
