import { useRouter } from 'next/router'
import Image from 'next/image'

export default function RegisterCard(props) {
    const {data, onClick} = props
  const router = useRouter()
  const dataIndex = 0

  return (
    <div onClick={onClick} className="cursor-pointer hover:animate-smallBounce m-auto flex h-[350px] w-[300px] select-none flex-col items-center justify-center gap-[15px] rounded-[8px] border-[1px] border-[#FAFAFA] bg-[#1B4141] px-[20px] md:gap-[15px]  lg:gap-[15px]">
      <div className="w-[100px]">
        <Image
          src={data.img}
          draggable={false}
          alt={data.title}
        />
      </div>
      <h1 className="text-center font-adam font-semibold text-[#FAFAFA] md:text-[30px] text-[30px] leading-[45px]">
        {data.title}
      </h1>
      
    </div>
  )
}
