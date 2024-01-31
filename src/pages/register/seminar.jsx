import Head from 'next/head'
import { Header } from '@/components/Header'
import { disabledFormClasses, formClasses } from '@/components/Fields'
import { useFieldArray, useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { ClipLoader } from 'react-spinners'
import Link from 'next/link'
import { toast } from 'react-toastify'
import SubmitLoader from '@/components/Loader/SubmitLoader'
import { FaTrashCan } from 'react-icons/fa6'
import { fetchEarlyBirdStatus, getPrice } from '@/utils/utils'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'
import { useRouter } from 'next/router'

export default function Seminar() {
  const [loading, setLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiResponse, setApiResponse] = useState({})
  const [tabIndex, setTabIndex] = useState(0)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      data_diri: [
        {
          nama_lengkap: '',
          jenis_peserta: '',
          pekerjaan: '',
          institusi: '',
          nim: '',
          alamat: '',
          no_telepon: '',
          email: '',
        },
      ],
      url_bukti_pembayaran: '',
    },
    mode: 'onChange',
  })

  const { fields, append, remove } = useFieldArray({
    name: 'data_diri',
    control,
  })

  const addParticipant = () => {
    if (fields.length < 3) {
      append({
        nama_lengkap: '',
        jenis_peserta: '',
        pekerjaan: '',
        institusi: '',
        nim: '',
        alamat: '',
        no_telepon: '',
        email: '',
      })
    }
  }

  const removeParticipant = (index) => {
    if (fields.length > 1) {
      remove(index)
    }
  }

  const resetForm = () => {
    reset({
      data_diri: [
        {
          nama_lengkap: '',
          jenis_peserta: '',
          pekerjaan: '',
          institusi: '',
          nim: '',
          alamat: '',
          no_telepon: '',
          email: '',
        },
      ],
      url_bukti_pembayaran: '',
    })
    setApiResponse({})
    setLoading(false)
  }

  const namaAnggotaSatu = watch(`data_diri.${0}.nama_lengkap`)
  const data_peserta = watch('data_diri')

  const [paymentInputKey, setPaymentInputKey] = useState(Math.random())

  const onSubmit = async (data) => {
    if (data.url_bukti_pembayaran === '') {
      toast.warn(`Belum mengupload bukti pembayaran`, {
        position: 'bottom-center',
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: 'colored',
      })
      return
    }

    // fetchEarlyBirdStatus().then((result) => {
    //   if (isEarlyBird !== result) {
    //     toast.warn(`Tiket Early Bird sudah habis`, {
    //       position: 'bottom-center',
    //       autoClose: 3000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: false,
    //       draggable: false,
    //       progress: undefined,
    //       theme: 'colored',
    //     })
    //     router.push('/register/seminar')
    //     return
    //   }
    // })

    setIsSubmitting(true)
    try {
      const response = await fetch(
        `${process.env.BE_STAGING_URL}register/seminar`,
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
      resetForm()
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

  const handleFileChange = async (event) => {
    if (event.target.files.length === 0) {
      setLoading(false)
      return
    }

    setLoading(true)

    const file = event.target.files[0]
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', 'bukti_pembayaran')
      formData.append('event', 'seminar')
      formData.append('owner', namaAnggotaSatu.split(' ')[0].toLowerCase())

      try {
        const response = await fetch(
          `${process.env.BE_STAGING_URL}register/upload-registrant/`,
          {
            method: 'POST',
            body: formData,
          }
        )

        const data = await response.json()

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        } else {
          console.log('URL: ', data.data.file_url)
          setValue('url_bukti_pembayaran', data.data.file_url)
          setApiResponse({ ...apiResponse, url_bukti_pembayaran: data })
        }
      } catch (error) {
        console.error('Error uploading file:', error)
        setApiResponse({ ...apiResponse, url_bukti_pembayaran: 'error' })
      } finally {
        setLoading(false)
      }
    }
  }

  const priceData = getPrice(data_peserta, fetchEarlyBirdStatus())

  const tabs = [
    <>
      <div className="w-full">
        {fields.map((field, index) => {
          const jenis_peserta = watch(`data_diri.${index}.jenis_peserta`)

          return (
            <div key={field.id} className="mb-[50px] flex flex-col">
              <div className="flex w-full items-center justify-between">
                <h2 className=" font-sarmady text-[40px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[60px]">
                  Peserta {index + 1}
                </h2>
                {fields.length <= 1 ? (
                  <></>
                ) : (
                  <button
                    onClick={() => removeParticipant(index)}
                    className="rounded-full bg-red-500 p-[10px]"
                  >
                    <FaTrashCan size={'20px'} color="white" />
                  </button>
                )}
              </div>

              <div className="flex flex-col gap-[25px]">
                <div className="">
                  <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                    Nama Lengkap
                  </label>
                  <input
                    placeholder="Example: John Wick"
                    {...register(`data_diri.${index}.nama_lengkap`, {
                      required: 'This field is required',
                    })}
                    type={'text'}
                    className={formClasses}
                  />
                  <span className="font-montserrat text-[16px] text-[#FFC892]">
                    {errors.data_diri &&
                      errors.data_diri[index]?.nama_lengkap?.message}
                  </span>
                </div>
                <div className="">
                  <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                    Email
                  </label>
                  <input
                    placeholder="Example: john@mail.com"
                    {...register(`data_diri.${index}.email`, {
                      required: 'This field is required',
                      pattern: {
                        value:
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    type={'email'}
                    className={formClasses}
                  />
                  <span className="font-montserrat text-[16px] text-[#FFC892]">
                    {errors.data_diri &&
                      errors.data_diri[index]?.email?.message}
                  </span>
                </div>
                <div className="">
                  <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                    Pekerjaan{' '}
                  </label>
                  <input
                    placeholder="Example: Mahasiswa"
                    {...register(`data_diri.${index}.pekerjaan`, {
                      required: 'This field is required',
                    })}
                    type={'text'}
                    className={formClasses}
                  />
                  <span className="font-montserrat text-[16px] text-[#FFC892]">
                    {errors.data_diri &&
                      errors.data_diri[index]?.pekerjaan?.message}
                  </span>
                </div>
                <div className="">
                  <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                    No. Telp
                  </label>
                  <input
                    placeholder="Example: 0812341234123"
                    {...register(`data_diri.${index}.no_telepon`, {
                      required: 'This field is required',
                      pattern: {
                        value: /^0[0-9]{7,13}$/,
                        message:
                          'Invalid phone number. Example : 0812341234123',
                      },
                    })}
                    type={'text'}
                    className={formClasses}
                  />
                  <span className="font-montserrat text-[16px] text-[#FFC892]">
                    {errors.data_diri &&
                      errors.data_diri[index]?.no_telepon?.message}
                  </span>
                </div>
                <div className="">
                  <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                    Jenis Peserta
                  </label>
                  <select
                    placeholder="Select one"
                    className={formClasses}
                    {...register(`data_diri.${index}.jenis_peserta`, {
                      required: 'This field is required',
                    })}
                  >
                    <option disabled value="">
                      Choose One
                    </option>
                    <option value="umum">Umum</option>
                    <option value="tpb">TPB</option>
                    <option value="hms">HMS</option>
                  </select>
                  <span className="font-montserrat text-[16px] text-[#FFC892]">
                    {errors.data_diri &&
                      errors.data_diri[index]?.jenis_peserta?.message}
                  </span>
                </div>
                <div className="">
                  <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                    Institusi/Universitas
                  </label>
                  <input
                    placeholder="Example: Universitas Indonesia"
                    {...register(`data_diri.${index}.institusi`, {
                      required: 'This field is required',
                    })}
                    type={'text'}
                    className={formClasses}
                  />
                  <span className="font-montserrat text-[16px] text-[#FFC892]">
                    {errors.data_diri &&
                      errors.data_diri[index]?.institusi?.message}
                  </span>
                </div>
                <div className="">
                  {jenis_peserta === 'umum' ? (
                    <label className="block font-sarmady text-[20px] font-[600] text-gray-400">
                      NIM
                    </label>
                  ) : (
                    <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                      NIM
                    </label>
                  )}
                  <input
                    disabled={jenis_peserta === 'umum'}
                    placeholder={
                      jenis_peserta === 'umum'
                        ? 'Not Required'
                        : 'Example : 18282182'
                    }
                    {...register(`data_diri.${index}.nim`, {
                      required:
                        jenis_peserta === 'umum'
                          ? false
                          : 'This field is required',
                    })}
                    type={'text'}
                    className={
                      jenis_peserta === 'umum'
                        ? disabledFormClasses
                        : formClasses
                    }
                  />
                  {jenis_peserta === 'umum' ? (
                    <></>
                  ) : (
                    <span className="font-montserrat text-[16px] text-[#FFC892]">
                      {errors.data_diri &&
                        errors.data_diri[index]?.nim?.message}
                    </span>
                  )}
                </div>

                <div className="">
                  <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                    Alamat
                  </label>
                  <textarea
                    placeholder="Example: Jalan Kirai no.11, Depok, Jawa Barat"
                    {...register(`data_diri.${index}.alamat`, {
                      required: 'This field is required',
                    })}
                    className={formClasses}
                  />
                  <span className="font-montserrat text-[16px] text-[#FFC892]">
                    {errors.data_diri &&
                      errors.data_diri[index]?.alamat?.message}
                  </span>
                </div>
              </div>
            </div>
          )
        })}

        {fields.length >= 3 ? (
          <span className="mb-[150px]" />
        ) : (
          <button
            onClick={addParticipant}
            className={`mb-[150px] w-full cursor-pointer rounded-lg bg-[rgba(200,235,226)] py-[5px] px-[20px] font-montserrat font-[600]`}
          >
            Add Participants
          </button>
        )}
      </div>
      <button
        onClick={handleSubmit(() => setTabIndex((prev) => prev + 1))}
        className={`cursor-pointer rounded-lg bg-[rgba(200,235,226)] py-[5px] px-[20px] font-montserrat font-[600]`}
      >
        Next
      </button>
    </>,
    <>
      <div className="mb-[20px] flex flex-col">
        <h2 className=" font-sarmady text-[40px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[60px]">
          Tagihan Pembayaran
        </h2>
        <h2 className=" font-sarmady text-[30px] font-semibold text-[#FAFAFA] lg:text-[50px]">
          {priceData.isEarlyBird
            ? 'Tiket Grand Seminar ICEE 2024 (Early Bird)'
            : 'Tiket Grand Seminar ICEE 2024'}
        </h2>
        <span className="mb-[100px] h-[2px] w-full bg-[#FAFAFA]" />
        <div className="flex w-full items-center justify-between">
          <p className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA] lg:text-[30px]">
            {`Tiket Bundle ${priceData.totalPeserta} Orang`}
          </p>
          <p className="block font-sarmady text-[20px] font-[600] text-[#FAFAFD] lg:text-[30px]">
            Rp {priceData.basePrice.toLocaleString('id-ID')}
          </p>
        </div>

        {priceData.discountData.length < 1 ? (
          <></>
        ) : (
          priceData.discountData.map((data, index) => {
            return (
              <div
                key={index}
                className="flex w-full items-center justify-between"
              >
                <p className="block font-sarmady text-[12px] font-[600] text-[#FAFAFA] lg:text-[25px]">
                  - {data.name}
                </p>
                <p className="block font-sarmady text-[12px] font-[600] text-[#FAFAFA] lg:text-[25px]">
                  - Rp {data.amount.toLocaleString('id-ID')}
                </p>
              </div>
            )
          })
        )}

        <span className="my-[10px] h-[2px] w-full bg-[#FAFAFA]" />
        <div className="mb-[30px] flex w-full items-center justify-between">
          <p className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA] lg:text-[30px]">
            Total Tagihan
          </p>
          <p className="block font-sarmady text-[20px] font-[600] text-[#FAFAFD] lg:text-[30px]">
            Rp {priceData.totalPrice.toLocaleString('id-ID')}
          </p>
        </div>
        <p className="my-[10px] font-sarmady text-[12px] font-[600] text-[#FAFAFA] lg:text-[20px]">
          Pembayaran dapat dilakukan pada rekening dan E-wallet berikut.
        </p>
        <p className="my-[10px] font-sarmady text-[12px] font-[600] text-[#FAFAFA] lg:text-[20px]">
          Rekening :<br />
          BCA 2820700760 an. Rose Amelie
        </p>
        <p className="mb-[50px] font-sarmady text-[12px] font-[600] text-[#FAFAFA] lg:text-[20px]">
          E-wallet :<br />
          Shopeepay 08113608170 an. Rose Amelie
        </p>
        <p className=" font-sarmady text-[12px] font-[600] text-[#FAFAFA] lg:text-[20px]">
          Jika sudah melakukan pembayaran, dapat mengupload bukti pembayaran di
          bawah ini.
        </p>
      </div>
      <div className="mb-[50px] flex flex-col gap-[25px]">
        <div className="">
          <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
            Bukti Pembayaran
          </label>
          <input
            key={paymentInputKey}
            disabled={namaAnggotaSatu === '' ? true : false}
            type="file"
            accept="image/png, image/jpeg"
            className={formClasses}
            onChange={(e) => handleFileChange(e)}
          />
          {namaAnggotaSatu === '' ? (
            <>
              <span className="font-montserrat text-[16px] text-[#FFC892]">
                Please fill in your name first
              </span>
            </>
          ) : null}
          {loading ? (
            <div className="flex items-center gap-[10px]">
              <p className="font-montserrat text-[16px] text-[#FFC892]">
                Uploading
              </p>
              <ClipLoader color="#FFC892" size={15} />
            </div>
          ) : (
            apiResponse['url_bukti_pembayaran'] &&
            (apiResponse['url_bukti_pembayaran'] === 'error' ? (
              <>
                <p className='className="font-montserrat text-[16px] text-red-500'>
                  An error occurred{' '}
                  <p
                    onClick={() => setPaymentInputKey(Math.random())}
                    className='className="font-montserrat text-[16px] text-red-500 underline'
                  >
                    Retry
                  </p>
                </p>
              </>
            ) : (
              <>
                <p className='className="font-montserrat text-[16px] text-green-500'>
                  Done✓{' '}
                  <Link
                    rel="noopener noreferrer"
                    target="_blank"
                    href={apiResponse['url_bukti_pembayaran'].data.file_url}
                    className='className="font-montserrat text-[16px] text-green-500 underline'
                  >
                    Preview
                  </Link>
                </p>
              </>
            ))
          )}
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-[20px]">
        <button
          onClick={handleSubmit(() => setTabIndex((prev) => prev - 1))}
          className={`w-full cursor-pointer  rounded-lg bg-red-200 py-[5px] px-[20px] font-montserrat font-[600]`}
        >
          Back
        </button>
        <input
          type="submit"
          disabled={isSubmitting ? true : false}
          className={`w-full cursor-pointer rounded-lg bg-[rgba(200,235,226)] py-[5px] px-[20px] font-montserrat font-[600]`}
        />
      </div>
    </>,
    <>
      <div className="mb-[20px] flex flex-col">
        <div className="flex items-center justify-center">
          <IoMdCheckmarkCircleOutline color="green" size={150} />
        </div>
        <h1 className="text-center font-sarmady text-[40px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[60px]">
          Thank You!
        </h1>
        <h2 className="mb-[100px] text-center font-sarmady text-[20px] font-semibold text-[#FAFAFA] lg:text-[30px]">
          Your form has been submitted.
        </h2>
        <button
          onClick={() => router.push('/register')}
          className={`m-auto cursor-pointer  rounded-lg bg-[rgba(200,235,226)] py-[5px] px-[20px] font-montserrat font-[600]`}
        >
          Back to Registration
        </button>
      </div>
    </>,
  ]

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
        {isSubmitting && <SubmitLoader />}
        <h1 className="text-center font-sarmady text-[60px] font-semibold leading-[80px] text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] sm:text-[80px] sm:text-[80px] md:text-[80px] lg:text-[120px] lg:leading-[100px]">
          Seminar
        </h1>
        <div className="mb-[100px] flex min-w-[50vw] flex-wrap items-center justify-center gap-[10px] xs:gap-[10px] md:gap-[20px] lg:gap-[20px]">
          <h1 className="font-montserrat text-[10px] font-[600] text-[#FAFAFA] md:text-[12px] lg:text-[16px] ">
            Guidebook
          </h1>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={'https://drive.google.com/drive/folders/1ep9o1V3Ii43XHKqvPEXjAPAc6NBeNXxh?usp=drive_link'}
            className={`cursor-pointer rounded-lg bg-[rgba(200,235,226)] py-[5px] px-[20px] text-center font-montserrat text-[10px] font-[600] md:w-[150px] md:text-[12px] lg:w-[200px] lg:text-[16px]`}
          >
            Download Here
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex min-w-[50vw] flex-col rounded-[30px] bg-[#004141] p-[40px] shadow-[0_4px_100px_0_rgba(250,250,250,0.25)]"
        >
          {tabs[tabIndex]}
        </form>
      </main>
    </>
  )
}
