import Head from 'next/head'
import { Header } from '@/components/Header'
import { disabledFormClasses, formClasses } from '@/components/Fields'
import { useFieldArray, useForm } from 'react-hook-form'
import { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import SubmitLoader from '@/components/Loader/SubmitLoader'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

export default function Expo() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [tabIndex, setTabIndex] = useState(0)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      nama_lengkap: '',
      institusi: '',
      fakultas: '',
      nim: '',
      sumber_info: '',
      sumber_info_lainnya: '',
    },
    mode: 'onChange',
  })

  const resetForm = () => {
    reset({
      nama_lengkap: '',
      institusi: '',
      fakultas: '',
      nim: '',
      sumber_info: '',
      sumber_info_lainnya: '',
    })
  }

  const onSubmit = async (data) => {
    // This is data coming from the react-hook-form
    if (data.sumber_info !== 'lainnya') {
      data.sumber_info_lainnya = ''
    }

    setIsSubmitting(true)
    console.log('DATA : ', data)
    try {
      const response = await fetch(
        `${process.env.BE_PROD_URL}register/expo`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },

          body: JSON.stringify(data),
        }
      )

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      console.log('Success', done)
      setIsSubmitting(false)
      const done = await response.json()
      toast.success(done.data.message, {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      })
      setTabIndex((prev) => prev + 1)
      // resetForm()
    } catch (error) {
      // TODO : HANDLE ERROR
      console.error('Error uploading file:', error)
      setIsSubmitting(false)

      toast.error(error.message, {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      })
    }
  }

  const sumberInfo = watch('sumber_info')
  const nama_lengkap = watch('nama_lengkap')

  const tabs = [
    <>
      <div className="mb-[100px] flex flex-col">
        <h2 className=" font-sarmady text-[40px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[60px]">
          Peserta
        </h2>
        <div className="flex flex-col gap-[25px]">
          <div className="">
            <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
              Nama Lengkap
            </label>
            <input
              placeholder="Example: John Wick"
              {...register('nama_lengkap', {
                required: 'This field is required',
              })}
              type={'text'}
              className={formClasses}
            />
            <span className="font-montserrat text-[16px] text-[#FFC892]">
              {errors.nama_lengkap?.message}
            </span>
          </div>
          <div className="">
            <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
              Institusi/Universitas
            </label>
            <input
              placeholder="Example: Universitas Indonesia"
              {...register(`institusi`, {
                required: 'This field is required',
              })}
              type={'text'}
              className={formClasses}
            />
            <span className="font-montserrat text-[16px] text-[#FFC892]">
              {errors.institusi?.message}
            </span>
          </div>
          <div className="">
            <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
              Fakultas
            </label>
            <input
              placeholder="Example: Fakultas Teknik Sipil dan Lingkungan"
              {...register(`fakultas`, {
                required: 'This field is required',
              })}
              type={'text'}
              className={formClasses}
            />
            <span className="font-montserrat text-[16px] text-[#FFC892]">
              {errors.fakultas?.message}
            </span>
          </div>
          <div className="">
            <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
              NIM
            </label>
            <input
              placeholder="Example: 18282182"
              {...register(`nim`, {
                required: 'This field is required',
              })}
              type={'text'}
              className={formClasses}
            />
            <span className="font-montserrat text-[16px] text-[#FFC892]">
              {errors.nim?.message}
            </span>
          </div>
          <div className="">
            <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
              Dari mana Anda mengetahui informasi terkait acara ini?
            </label>
            <select
              placeholder="Select one"
              className={formClasses}
              {...register(`sumber_info`, {
                required: 'This field is required',
              })}
            >
              <option disabled value="">
                Choose One
              </option>
              <option value="teman">Teman</option>
              <option value="media_sosial">Media Sosial</option>
              <option value="roadshow">Roadshow</option>
              <option value="website">Website</option>
              <option value="poster">Poster</option>
              <option value="lainnya">Lainnya</option>
            </select>
            <span className="font-montserrat text-[16px] text-[#FFC892]">
              {errors.sumber_info?.message}
            </span>
          </div>
          {sumberInfo === 'lainnya' ? (
            <div className="">
              <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                Sumber Lainnya
              </label>
              <input
                placeholder=""
                {...register(`sumber_info_lainnya`)}
                type={'text'}
                className={formClasses}
              />
            </div>
          ) : null}
        </div>
      </div>
      <input
        type="submit"
        disabled={isSubmitting ? true : false}
        className={`cursor-pointer rounded-lg bg-[rgba(200,235,226)] py-[5px] px-[20px] font-montserrat font-[600]`}
      />
    </>,
    <>
      <div className="mb-[20px] flex flex-col">
        <div className="flex items-center justify-center">
          <IoMdCheckmarkCircleOutline color="green" size={150} />
        </div>
        <h1 className="text-center font-sarmady text-[40px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[60px]">
          Thank You, {nama_lengkap}!
        </h1>

        <h2 className="mb-[100px] text-center font-sarmady text-[20px] font-semibold text-[#FAFAFA] lg:text-[30px]">
          Your form has been submitted.
        </h2>
        <div
          onClick={() => router.push('/register')}
          className={`m-auto cursor-pointer  rounded-lg bg-[rgba(200,235,226)] py-[5px] px-[20px] font-montserrat font-[600]`}
        >
          Back to Registration
        </div>
      </div>
    </>,
  ]
  return (
    <>
      <Head>
        <title>Expo | ICEE 2024</title>
        <meta
          name="description"
          content="By leveraging insights from our network of industry insiders, you’ll know exactly when to buy to maximize profit, and exactly when to sell to avoid painful losses."
        />
      </Head>
      <Header />
      <main className="relative flex min-h-full flex-col items-center justify-start bg-[#004141] bg-[url(../images/backgrounds/stars-pattern.svg)] py-[100px]">
        {isSubmitting && <SubmitLoader />}
        <h1 className="mb-[100px] text-center font-sarmady text-[60px] font-semibold leading-[80px] text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] sm:text-[80px] sm:text-[80px] md:text-[80px] lg:text-[120px] lg:leading-[100px]">
          Expo
        </h1>
        {/* <div className="mb-[100px] flex min-w-[50vw] flex-wrap items-center justify-center gap-[10px] xs:gap-[10px] md:gap-[20px] lg:gap-[20px]">
          <h1 className="font-montserrat text-[10px] font-[600] text-[#FAFAFA] md:text-[12px] lg:text-[16px] ">
            Guidebook
          </h1>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={'https://bit.ly/RegistrationICEE2024Conference'}
            className={`cursor-pointer rounded-lg bg-[rgba(200,235,226)] py-[5px] px-[20px] text-center font-montserrat text-[10px] font-[600] md:w-[150px] md:text-[12px] lg:w-[200px] lg:text-[16px]`}
          >
            Download Here
          </Link>
        </div> */}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex min-w-[50vw] flex-col rounded-[30px] bg-[#004141] p-[40px] shadow-[0_4px_100px_0_rgba(250,250,250,0.25)]"
        >
          {/* <div className="mb-[100px] flex flex-col">
            <h2 className=" font-sarmady text-[40px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[60px]">
              Peserta
            </h2>
            <div className="flex flex-col gap-[25px]">
              <div className="">
                <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                  Nama Lengkap
                </label>
                <input
                  placeholder="Example: John Wick"
                  {...register('nama_lengkap', {
                    required: 'This field is required',
                  })}
                  type={'text'}
                  className={formClasses}
                />
                <span className="font-montserrat text-[16px] text-[#FFC892]">
                  {errors.nama_lengkap?.message}
                </span>
              </div>
              <div className="">
                <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                  Institusi/Universitas
                </label>
                <input
                  placeholder="Example: Universitas Indonesia"
                  {...register(`institusi`, {
                    required: 'This field is required',
                  })}
                  type={'text'}
                  className={formClasses}
                />
                <span className="font-montserrat text-[16px] text-[#FFC892]">
                  {errors.institusi?.message}
                </span>
              </div>
              <div className="">
                <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                  Fakultas
                </label>
                <input
                  placeholder="Example: Fakultas Teknik Sipil dan Lingkungan"
                  {...register(`fakultas`, {
                    required: 'This field is required',
                  })}
                  type={'text'}
                  className={formClasses}
                />
                <span className="font-montserrat text-[16px] text-[#FFC892]">
                  {errors.fakultas?.message}
                </span>
              </div>
              <div className="">
                <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                  NIM
                </label>
                <input
                  placeholder="Example: 18282182"
                  {...register(`nim`, {
                    required: 'This field is required',
                  })}
                  type={'text'}
                  className={formClasses}
                />
                <span className="font-montserrat text-[16px] text-[#FFC892]">
                  {errors.nim?.message}
                </span>
              </div>
              <div className="">
                <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                  Dari mana Anda mengetahui informasi terkait acara ini?
                </label>
                <select
                  placeholder="Select one"
                  className={formClasses}
                  {...register(`sumber_info`, {
                    required: 'This field is required',
                  })}
                >
                  <option disabled value="">
                    Choose One
                  </option>
                  <option value="teman">Teman</option>
                  <option value="media_sosial">Media Sosial</option>
                  <option value="roadshow">Roadshow</option>
                  <option value="website">Website</option>
                  <option value="poster">Poster</option>
                  <option value="lainnya">Lainnya</option>
                </select>
                <span className="font-montserrat text-[16px] text-[#FFC892]">
                  {errors.sumber_info?.message}
                </span>
              </div>
              {sumberInfo === 'lainnya' ? (
                <div className="">
                  <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                    Sumber Lainnya
                  </label>
                  <input
                    placeholder=""
                    {...register(`sumber_info_lainnya`)}
                    type={'text'}
                    className={formClasses}
                  />
                </div>
              ) : null}
            </div>
          </div>

          <input
            type="submit"
            disabled={isSubmitting ? true : false}
            className={`cursor-pointer rounded-lg bg-[rgba(200,235,226)] py-[5px] px-[20px] font-montserrat font-[600]`}
          /> */}
          {tabs[tabIndex]}
        </form>
      </main>
    </>
  )
}
