import Head from 'next/head'
import { Header } from '@/components/Header'
import { formClasses } from '@/components/Fields'
import { useFieldArray, useForm } from 'react-hook-form'
import { useState } from 'react'
import { ClipLoader } from 'react-spinners'
import Link from 'next/link'
import { toast } from 'react-toastify'
import SubmitLoader from '@/components/Loader/SubmitLoader'

export default function Conference() {
  const [loading, setLoading] = useState([false, false, false])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [apiResponse, setApiResponse] = useState({})

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
          email: '',
          no_telepon: '',
          institusi: '',
          jurusan: '',
          alamat: '',
          url_ktm: '',
        },
        {
          nama_lengkap: '',
          email: '',
          no_telepon: '',
          institusi: '',
          jurusan: '',
          alamat: '',
          url_ktm: '',
        },
        {
          nama_lengkap: '',
          email: '',
          no_telepon: '',
          institusi: '',
          jurusan: '',
          alamat: '',
          url_ktm: '',
        },
      ],
      essay: '',
      link_submission: '',
      kontak_darurat: '',
    },
    mode: 'onChange',
  })

  const { fields } = useFieldArray({
    name: 'data_diri',
    control,
  })

  const resetForm = () => {
    reset({
      data_diri: [
        {
          nama_lengkap: '',
          email: '',
          no_telepon: '',
          institusi: '',
          jurusan: '',
          alamat: '',
          url_ktm: '',
        },
        {
          nama_lengkap: '',
          email: '',
          no_telepon: '',
          institusi: '',
          jurusan: '',
          alamat: '',
          url_ktm: '',
        },
        {
          nama_lengkap: '',
          email: '',
          no_telepon: '',
          institusi: '',
          jurusan: '',
          alamat: '',
          url_ktm: '',
        },
      ],
      essay: '',
      link_submission: '',
      kontak_darurat: '',
    })
    setApiResponse({})
    setLoading([false, false, false])
  }

  const [fileInputKeys, setFileInputKeys] = useState(
    fields.map(() => Math.random())
  )

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    try {
      const response = await fetch(
        'https://be-staging-s3ey3nqirq-et.a.run.app/register/conference',
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
      const done = await response.json()
      console.log('Success', done)
      setIsSubmitting(false)
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
      resetForm()
    } catch (error) {
      // TODO : HANDLE ERROR
      console.error('Error uploading file:', error)
      setIsSubmitting(false)
      toast.error(done.data.message, {
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

  const handleFileChange = async (event, index, nama_lengkap) => {
    setLoading((prevLoading) => {
      const updatedLoading = [...prevLoading]
      updatedLoading[index] = true
      return updatedLoading
    })

    const file = event.target.files[0]
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', 'ktm')
      formData.append('event', 'conference')
      formData.append('owner', nama_lengkap.split(' ')[0].toLowerCase())

      try {
        const response = await fetch(
          'https://be-staging-s3ey3nqirq-et.a.run.app/register/upload-registrant/',
          {
            method: 'POST',
            body: formData,
          }
        )

        const data = await response.json()

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        } else {
          console.log('URL KTM : ', data.data.file_url)
          setValue(`data_diri.${index}.url_ktm`, data.data.file_url)
          setApiResponse({ ...apiResponse, [index]: data })
        }
      } catch (error) {
        setApiResponse({ ...apiResponse, [index]: 'error' })
        console.error('Error uploading file:', error)
      }
    }

    setLoading((prevLoading) => {
      const updatedLoading = [...prevLoading]
      updatedLoading[index] = false
      return updatedLoading
    })
  }

  const resetFileInput = (index) => {
    setFileInputKeys((currentKeys) =>
      currentKeys.map((key, i) => (i === index ? Math.random() : key))
    )
  }

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
        <h1 className="text-center font-sarmady text-[60px] sm:text-[80px] font-semibold leading-[80px] lg:leading-[100px] text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] sm:text-[80px] md:text-[80px] lg:text-[120px]">
          Conference
        </h1>
        <div className="mb-[100px] flex min-w-[50vw] flex-wrap items-center justify-center gap-[10px] xs:gap-[10px] md:gap-[20px] lg:gap-[20px]">
          <h1 className="font-montserrat text-[10px] font-[600] text-[#FAFAFA] md:text-[12px] lg:text-[16px] ">
            Guidebook
          </h1>
          <Link
            href={''}
            className={`cursor-pointer rounded-lg bg-[rgba(200,235,226)] py-[5px] px-[20px] text-center font-montserrat text-[10px] font-[600] md:w-[150px] md:text-[12px] lg:w-[200px] lg:text-[16px]`}
          >
            Download Here
          </Link>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex min-w-[50vw] flex-col rounded-[30px] bg-[#004141] p-[40px] shadow-[0_4px_100px_0_rgba(250,250,250,0.25)]"
        >
          {fields.map((field, index) => {
            const namaLengkap = watch(`data_diri.${index}.nama_lengkap`)

            return (
              <div key={field.id} className="mb-[100px] flex flex-col">
                <h2 className=" font-sarmady text-[20px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[60px]">
                  Peserta {index + 1}
                </h2>
                <div className="flex flex-col gap-[25px]">
                  <div className="">
                    <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                      Nama Lengkap
                    </label>
                    <input
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
                      placeholder="Example : john@mail.com"
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
                      No. Telp
                    </label>
                    <input
                      placeholder="Example : 0812341234123"
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
                      Institusi/Universitas
                    </label>
                    <input
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
                    <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                      Jurusan
                    </label>
                    <input
                      {...register(`data_diri.${index}.jurusan`, {
                        required: 'This field is required',
                      })}
                      type={'text'}
                      className={formClasses}
                    />
                    <span className="font-montserrat text-[16px] text-[#FFC892]">
                      {errors.data_diri &&
                        errors.data_diri[index]?.jurusan?.message}
                    </span>
                  </div>
                  <div className="">
                    <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                      Alamat
                    </label>
                    <textarea
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
                  <div className="">
                    <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                      KTM
                    </label>
                    <input
                      key={fileInputKeys[index]}
                      disabled={namaLengkap === '' ? true : false}
                      type="file"
                      accept="image/png, image/jpeg"
                      className={formClasses}
                      onChange={(e) => handleFileChange(e, index, namaLengkap)}
                    />
                    {namaLengkap === '' ? (
                      <>
                        <span className="font-montserrat text-[16px] text-[#FFC892]">
                          Please fill in your name first
                        </span>
                      </>
                    ) : null}
                    {loading[index] ? (
                      <div className="flex items-center gap-[10px]">
                        <p className="font-montserrat text-[16px] text-[#FFC892]">
                          Uploading
                        </p>
                        <ClipLoader color="#FFC892" size={15} />
                      </div>
                    ) : (
                      apiResponse[index] &&
                      (apiResponse[index] === 'error' ? (
                        <>
                          <p className='className="font-montserrat text-[16px] text-red-500'>
                            An error occurred{' '}
                            <p
                              onClick={() => resetFileInput(index)}
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
                              href={apiResponse[index].data.file_url}
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
              </div>
            )
          })}
          <div className="mb-[100px] flex flex-col gap-[25px]">
            <div className="">
              <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                Essay
              </label>
              <textarea
                {...register(`essay`, {
                  required: 'This field is required',
                })}
                className={formClasses}
              />
              <span className="font-montserrat text-[16px] text-[#FFC892]">
                {errors.essay?.message}
              </span>
            </div>
            <div className="">
              <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                Submission Video (Link)
              </label>
              <input
                {...register(`link_submission`, {
                  required: 'This field is required',
                })}
                className={formClasses}
              />
              <span className="font-montserrat text-[16px] text-[#FFC892]">
                {errors.link_submission?.message}
              </span>
            </div>
            <div className="">
              <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                No. Telp Darurat
              </label>
              <input
                placeholder="Example : 0812341234123"
                {...register(`kontak_darurat`, {
                  required: 'This field is required',
                  pattern: {
                    value: /^0[0-9]{7,13}$/,
                    message: 'Invalid phone number. Example : 0812341234123',
                  },
                })}
                type={'text'}
                className={formClasses}
              />
              <span className="font-montserrat text-[16px] text-[#FFC892]">
                {errors.kontak_darurat?.message}
              </span>
            </div>
          </div>

          <input
            type="submit"
            disabled={isSubmitting ? true : false}
            className={`cursor-pointer rounded-lg bg-[rgba(200,235,226)] py-[5px] px-[20px] font-montserrat font-[600]`}
          />
        </form>
      </main>
    </>
  )
}
