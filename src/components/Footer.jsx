import Image from 'next/image'
import HMSLogo from '../images/logos/hms_logo.png'
import Link from 'next/link'
import { useRouter } from 'next/router'

function EmailIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      {...props}
    >
      <path
        d="M26.9174 4.95312H3.80244C3.36455 4.95313 2.94459 5.12708 2.63495 5.43671C2.32532 5.74635 2.15137 6.16631 2.15137 6.6042V23.1149C2.15137 23.5528 2.32532 23.9728 2.63495 24.2824C2.94459 24.592 3.36455 24.766 3.80244 24.766H26.9174C27.3553 24.766 27.7753 24.592 28.0849 24.2824C28.3946 23.9728 28.5685 23.5528 28.5685 23.1149V6.6042C28.5685 6.16631 28.3946 5.74635 28.0849 5.43671C27.7753 5.12708 27.3553 4.95313 26.9174 4.95312ZM25.6461 23.1149H5.17283L10.9516 17.138L9.76281 15.9905L3.80244 22.1573V7.85901L14.0639 18.0709C14.3732 18.3784 14.7917 18.551 15.2279 18.551C15.664 18.551 16.0825 18.3784 16.3919 18.0709L26.9174 7.6031V22.05L20.8415 15.974L19.6775 17.138L25.6461 23.1149ZM4.88389 6.6042H25.5801L15.2279 16.8986L4.88389 6.6042Z"
        fill="#004141"
      />
    </svg>
  )
}

function InstagramIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.73781 1.84675C8.9192 1.79236 9.29588 1.78027 12.3053 1.78027C15.3146 1.78027 15.6913 1.79337 16.8717 1.84675C18.0521 1.90012 18.8578 2.08846 19.5628 2.3614C20.301 2.64038 20.9708 3.07648 21.5247 3.64049C22.0887 4.19341 22.5238 4.86216 22.8018 5.60142C23.0758 6.30642 23.2631 7.11215 23.3175 8.29052C23.3719 9.47392 23.3839 9.8506 23.3839 12.859C23.3839 15.8683 23.3709 16.245 23.3175 17.4264C23.2641 18.6048 23.0758 19.4105 22.8018 20.1155C22.5238 20.8549 22.088 21.5247 21.5247 22.0785C20.9708 22.6425 20.301 23.0776 19.5628 23.3555C18.8578 23.6295 18.0521 23.8168 16.8737 23.8712C15.6913 23.9256 15.3146 23.9377 12.3053 23.9377C9.29588 23.9377 8.9192 23.9246 7.73781 23.8712C6.55944 23.8178 5.75372 23.6295 5.04871 23.3555C4.30938 23.0775 3.63952 22.6417 3.08577 22.0785C2.52215 21.5252 2.08598 20.8557 1.80769 20.1165C1.53475 19.4115 1.34742 18.6058 1.29303 17.4274C1.23865 16.244 1.22656 15.8673 1.22656 12.859C1.22656 9.84959 1.23966 9.47291 1.29303 8.29253C1.34641 7.11215 1.53475 6.30642 1.80769 5.60142C2.08639 4.86225 2.52289 4.19272 3.08678 3.63948C3.63974 3.07598 4.30893 2.63982 5.0477 2.3614C5.75271 2.08846 6.55844 1.90113 7.73681 1.84675H7.73781ZM16.7821 3.84091C15.6138 3.78753 15.2633 3.77645 12.3053 3.77645C9.34724 3.77645 8.99675 3.78753 7.82846 3.84091C6.74778 3.89026 6.16162 4.07054 5.77084 4.22262C5.25417 4.42405 4.88455 4.66275 4.49679 5.0505C4.12923 5.40809 3.84635 5.84342 3.66891 6.32455C3.51683 6.71533 3.33655 7.30149 3.2872 8.38217C3.23382 9.55047 3.22274 9.90096 3.22274 12.859C3.22274 15.817 3.23382 16.1675 3.2872 17.3358C3.33655 18.4164 3.51683 19.0026 3.66891 19.3934C3.84617 19.8738 4.12918 20.3099 4.49679 20.6674C4.85433 21.035 5.29043 21.3181 5.77084 21.4953C6.16162 21.6474 6.74778 21.8277 7.82846 21.877C8.99675 21.9304 9.34624 21.9415 12.3053 21.9415C15.2643 21.9415 15.6138 21.9304 16.7821 21.877C17.8627 21.8277 18.4489 21.6474 18.8397 21.4953C19.3563 21.2939 19.726 21.0552 20.1137 20.6674C20.4813 20.3099 20.7643 19.8738 20.9416 19.3934C21.0937 19.0026 21.274 18.4164 21.3233 17.3358C21.3767 16.1675 21.3878 15.817 21.3878 12.859C21.3878 9.90096 21.3767 9.55047 21.3233 8.38217C21.274 7.30149 21.0937 6.71533 20.9416 6.32455C20.7402 5.80788 20.5015 5.43826 20.1137 5.0505C19.7561 4.68296 19.3208 4.40009 18.8397 4.22262C18.4489 4.07054 17.8627 3.89026 16.7821 3.84091ZM10.8902 16.2742C11.6805 16.6032 12.5604 16.6476 13.3798 16.3998C14.1992 16.1521 14.9071 15.6275 15.3827 14.9158C15.8583 14.2041 16.0721 13.3493 15.9875 12.4975C15.9028 11.6457 15.5251 10.8497 14.9188 10.2454C14.5323 9.85913 14.065 9.56337 13.5504 9.3794C13.0359 9.19543 12.487 9.12782 11.9432 9.18146C11.3994 9.2351 10.8742 9.40864 10.4056 9.68958C9.93689 9.97053 9.53633 10.3519 9.23273 10.8062C8.92914 11.2606 8.73005 11.7766 8.64981 12.3171C8.56956 12.8576 8.61016 13.4092 8.76867 13.9321C8.92719 14.455 9.19968 14.9363 9.56652 15.3413C9.93337 15.7463 10.3854 16.0649 10.8902 16.2742ZM8.27865 8.83236C8.80743 8.30358 9.43519 7.88413 10.1261 7.59796C10.817 7.31178 11.5574 7.16449 12.3053 7.16449C13.0531 7.16449 13.7936 7.31178 14.4844 7.59796C15.1753 7.88413 15.8031 8.30358 16.3319 8.83236C16.8606 9.36115 17.2801 9.9889 17.5663 10.6798C17.8524 11.3707 17.9997 12.1112 17.9997 12.859C17.9997 13.6068 17.8524 14.3473 17.5663 15.0381C17.2801 15.729 16.8606 16.3568 16.3319 16.8856C15.2639 17.9535 13.8155 18.5534 12.3053 18.5534C10.795 18.5534 9.34657 17.9535 8.27865 16.8856C7.21073 15.8176 6.61078 14.3692 6.61078 12.859C6.61078 11.3487 7.21073 9.90029 8.27865 8.83236ZM19.2627 8.01254C19.3937 7.88893 19.4986 7.74029 19.5712 7.57541C19.6437 7.41053 19.6825 7.23277 19.6851 7.05265C19.6877 6.87254 19.6542 6.69372 19.5865 6.5268C19.5187 6.35988 19.4182 6.20824 19.2908 6.08086C19.1635 5.95348 19.0118 5.85296 18.8449 5.78524C18.678 5.71752 18.4992 5.68398 18.319 5.6866C18.1389 5.68923 17.9612 5.72797 17.7963 5.80053C17.6314 5.87308 17.4828 5.97799 17.3592 6.10902C17.1188 6.36386 16.9871 6.70236 16.9922 7.05265C16.9974 7.40295 17.1388 7.73747 17.3865 7.98519C17.6342 8.23291 17.9687 8.37434 18.319 8.37945C18.6693 8.38455 19.0078 8.25294 19.2627 8.01254Z"
        fill="#004141"
      />
    </svg>
  )
}

function WhatsappIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="23"
      viewBox="0 0 22 23"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.9458 14.0231C15.6796 13.8878 14.3746 13.2358 14.1317 13.1449C13.8887 13.055 13.7119 13.0106 13.5341 13.2812C13.3573 13.55 12.849 14.1584 12.6945 14.3382C12.5391 14.5189 12.3846 14.5407 12.1193 14.4063C11.854 14.2701 10.9983 13.9858 9.98452 13.0669C9.19582 12.3513 8.66258 11.4677 8.50805 11.1971C8.35353 10.9274 8.49108 10.7812 8.62417 10.6468C8.74386 10.526 8.88945 10.3317 9.02254 10.1746C9.15562 10.0166 9.19939 9.90398 9.28782 9.72327C9.37714 9.54347 9.33248 9.38637 9.26549 9.25106C9.19939 9.11576 8.66883 7.78722 8.44732 7.24691C8.23205 6.72112 8.01322 6.79286 7.85066 6.78378C7.69524 6.77652 7.51838 6.7747 7.34153 6.7747C7.16468 6.7747 6.87706 6.8419 6.63411 7.11251C6.39027 7.38221 5.70518 8.03513 5.70518 9.36366C5.70518 10.6913 6.65555 11.9744 6.78864 12.1551C6.92172 12.3349 8.6599 15.061 11.3225 16.2297C11.9567 16.5076 12.4506 16.6738 12.8356 16.7973C13.4716 17.0034 14.0504 16.9744 14.5077 16.9044C15.0168 16.8273 16.0779 16.2515 16.2995 15.6213C16.5201 14.9911 16.5201 14.4508 16.454 14.3382C16.3879 14.2256 16.211 14.1584 15.9449 14.0231H15.9458ZM11.1028 20.7457H11.0992C9.51776 20.746 7.96532 20.3137 6.60464 19.4943L6.28308 19.3L2.94072 20.1917L3.83303 16.879L3.62313 16.5394C2.73898 15.1086 2.27108 13.4526 2.2735 11.7628C2.27528 6.81375 6.23574 2.78728 11.1064 2.78728C13.4644 2.78728 15.6814 3.72261 17.3481 5.41892C18.1702 6.25126 18.8218 7.24107 19.2651 8.33107C19.7085 9.42108 19.9349 10.5897 19.9312 11.7692C19.9294 16.7183 15.969 20.7457 11.1028 20.7457ZM18.6164 4.13034C17.6323 3.1232 16.4613 2.32464 15.1714 1.78094C13.8815 1.23723 12.4983 0.959189 11.1019 0.962928C5.24786 0.962928 0.481732 5.80759 0.479945 11.7619C0.477233 13.6569 0.966182 15.519 1.89746 17.1605L0.390625 22.7571L6.02138 21.2551C7.57901 22.1179 9.32452 22.57 11.0983 22.57H11.1028C16.9569 22.57 21.723 17.7254 21.7248 11.7701C21.7291 10.351 21.4566 8.94513 20.9231 7.63378C20.3895 6.32244 19.6055 5.13167 18.6164 4.13034Z"
        fill="#004141"
      />
    </svg>
  )
}
function TiktokIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 25 25"
      fill="none"
      {...props}
    >
      <path
        d="M20.558 7.51164C19.554 7.29086 18.6458 6.75772 17.9636 5.98871C17.2815 5.21971 16.8605 4.25437 16.761 3.23123V2.78809H13.2863V16.5559C13.287 17.1668 13.0955 17.7624 12.7389 18.2584C12.3823 18.7544 11.8786 19.1256 11.2993 19.3195C10.72 19.5133 10.0943 19.52 9.511 19.3385C8.92768 19.157 8.41624 18.7966 8.04914 18.3083C7.72025 17.8761 7.51886 17.3605 7.46774 16.8198C7.41662 16.279 7.51781 15.7348 7.75986 15.2486C8.00192 14.7624 8.37519 14.3536 8.83745 14.0685C9.29972 13.7833 9.83254 13.6332 10.3757 13.6351C10.676 13.6334 10.9749 13.6776 11.262 13.7661V10.241C10.9279 10.1997 10.5913 10.1828 10.2548 10.1907C9.01531 10.2238 7.81238 10.6176 6.7933 11.324C5.77423 12.0303 4.98325 13.0185 4.51723 14.1676C4.0512 15.3166 3.93036 16.5766 4.1695 17.7932C4.40864 19.0099 4.99737 20.1304 5.86361 21.0176C6.75141 21.9202 7.88748 22.5385 9.12749 22.794C10.3675 23.0495 11.6555 22.9305 12.8277 22.4524C14 21.9742 15.0037 21.1583 15.7112 20.1084C16.4187 19.0585 16.7982 17.8219 16.8013 16.5559V9.5058C18.2027 10.5069 19.8832 11.0424 21.6054 11.0367V7.61235C21.2671 7.61375 20.9296 7.58 20.5983 7.51164H20.558Z"
        fill="#004141"
      />
    </svg>
  )
}

export function Footer() {
  const router = useRouter()

  return (
    <footer
      id="footer"
      className="flex w-full items-start justify-between  bg-[#C8EBE2] px-[10px] py-[25px] lg:items-center lg:px-[25px] lg:px-[120px] lg:py-[45px]"
    >
      <div className="flex w-[45%] items-center gap-[10px] lg:w-[30%] lg:gap-[20px]">
        <div className="flex h-[40px] min-h-[40px] w-[40px] min-w-[40px] lg:min-h-[80px] lg:min-w-[80px]">
          <Image src={HMSLogo} className="relative w-full object-contain" />
        </div>
        <div>
          <p className="font-montserrat text-[7px] text-[#004141] lg:text-[14px]">
            Himpunan Mahasiswa Sipil ITB
          </p>
          <p className="font-montserrat text-[6px] text-[#004141] lg:text-[12px]">
            Jl. Ganesa No.10, Lb. Siliwangi, Kecamatan Coblong, Kota Bandung,
            Jawa Barat 40132
          </p>
        </div>
      </div>
      <div className="flex w-[45%] flex-col justify-between gap-[20px] lg:w-[60%] lg:flex-row">
        <div className="flex flex-col items-start gap-[8px] lg:items-start lg:gap-[16px]">
          <div className="flex gap-[22.5px] lg:gap-[45px]">
            <Link
              href={'/'}
              className="font-adam text-[7px] font-bold text-[#004141] lg:text-[14px]"
            >
              Home
            </Link>
            <Link
              href={'/#footer'}
              className="font-adam text-[7px] font-bold text-[#004141] lg:text-[14px]"
            >
              Contact
            </Link>
            <Link
              href={'/register'}
              className="font-adam text-[7px] font-bold text-[#004141] lg:text-[14px]"
            >
              Register
            </Link>
          </div>
          <span className="h-[0.5px] w-full rounded-full bg-[#004141] lg:h-[1px]" />
          <div className="flex items-center gap-[9px] lg:gap-[18px]">
            <EmailIcon
              className="h-[15px] w-[15px] cursor-pointer lg:h-[30px] lg:w-[30px]"
              onClick={() => {
                router.push(
                  'mailto:itbcivilengineeringexpo@gmail.com?Subject=Hi%20There%20I%20Came%20From%20Your%20Website%21&Body=Enter%20Your%20Message%20Here%21'
                )
              }}
            />
            <InstagramIcon
              className="h-[15px] w-[15px] cursor-pointer lg:h-[30px] lg:w-[30px]"
              onClick={() => {
                router.push('https://www.instagram.com/iceeitb/')
              }}
            />
            <WhatsappIcon
              className="h-[15px] w-[15px] cursor-pointer lg:h-[30px] lg:w-[30px]"
              onClick={() => {
                router.push('https://wa.me/6282115125731')
              }}
            />
            <TiktokIcon
              className="h-[15px] w-[15px] cursor-pointer lg:h-[30px] lg:w-[30px]"
              onClick={() => {
                router.push(
                  'https://www.tiktok.com/@iceeitb?_t=8gZqBBOQlsY&_r=1'
                )
              }}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-end font-sarmady text-[10px] font-bold text-[#004141] lg:text-start lg:text-[20px]">
            PIC
          </h1>
          <div className="flex w-full justify-between gap-[20px] lg:justify-start">
            <div className="flex flex-col lg:min-w-[220px]">
              <p className="line-clamp-2 visible font-montserrat text-[6px] text-[#004141] lg:text-[12px]">
                Ariq Rasyad B. (Head of Marketing)
              </p>
              <p className="line-clamp-2 visible font-montserrat text-[6px] text-[#004141] lg:text-[12px]">
                Reinhart Jericho S. (Project Manager)
              </p>
            </div>
            <div className="flex flex-col items-end lg:items-start">
              <p className="mb-[10px] font-montserrat text-[6px] text-[#004141] xs:mb-0 sm:mb-0 md:mb-0 lg:mb-0 lg:text-[12px]">
                +6282115125731
              </p>
              <p className="font-montserrat text-[6px] text-[#004141] lg:text-[12px]">
                +6289502467276
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
