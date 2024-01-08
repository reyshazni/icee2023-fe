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
  const [loading, setLoading] = useState({
    ktm: [false, false, false],
    essay: false,
  })
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
      url_essay: '',
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
      url_essay: '',
      link_submission: '',
      kontak_darurat: '',
    })
    setApiResponse({})
    setLoading({
      ktm: [false, false, false],
      essay: false,
    })
  }

  const [fileInputKeys, setFileInputKeys] = useState(
    fields.map(() => Math.random())
  )

  const [essayInputKey, setEssayInputKey] = useState(Math.random())

  const onSubmit = async (data) => {
    // This is data coming from the react-hook-form
    for (let index = 0; index < data.data_diri.length; index++) {
      const element = data.data_diri[index]
      if (element.url_ktm === '') {
        toast.warn(`Peserta ${index + 1} belum mengupload KTM`, {
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
    }
    if (data.url_essay === '') {
      toast.warn(`Belum mengupload essay`, {
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

  //   const setLoadingState = (key, index, value) => {
  //     setLoading((prevLoading) => {
  //       // If the key corresponds to an array
  //       if (Array.isArray(prevLoading[key])) {
  //         // Create a new array with the updated value at the specified index
  //         const updatedArray = [...prevLoading[key]]
  //         updatedArray[index] = value

  //         return {
  //           ...prevLoading,
  //           [key]: updatedArray,
  //         }
  //       } else {
  //         // If the key corresponds to a boolean
  //         console.log()
  //         return {
  //           ...prevLoading,
  //           [key]: value,
  //         }
  //       }
  //     })
  //   }

  const handleFileChange = async (event, index, nama_lengkap, type) => {
    const newLoadingState = { ...loading }

    if (event.target.files.length === 0) {
      // If no file was selected (i.e., "Cancel" was clicked), reset loading state
      if (type === 'ktm') {
        setLoading((prevState) => ({
          ...prevState,
          ktm: prevState.ktm.map((item, idx) => (idx === index ? false : item)),
        }))
      } else if (type === 'essay') {
        setLoading((prevState) => ({ ...prevState, essay: false }))
      }
      return
    }

    if (type === 'ktm') {
      newLoadingState.ktm[index] = true
    } else if (type === 'essay') {
      newLoadingState.essay = true
    }
    setLoading(newLoadingState)

    const file = event.target.files[0]
    if (file) {
      const formData = new FormData()
      formData.append('file', file)
      formData.append('type', type)
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
          console.log(`${type.toUpperCase()} URL: `, data.data.file_url)
          if (type === 'ktm') {
            setValue(`data_diri.${index}.url_ktm`, data.data.file_url)
            setApiResponse({ ...apiResponse, [index]: data })
          } else if (type === 'essay') {
            setValue('url_essay', data.data.file_url)
            setApiResponse({ ...apiResponse, url_essay: data })
          }
        }
      } catch (error) {
        console.error('Error uploading file:', error)
        if (type === 'ktm') {
          setApiResponse({ ...apiResponse, [index]: 'error' })
        } else if (type === 'essay') {
          setApiResponse({ ...apiResponse, url_essay: 'error' })
        }
      } finally {
        if (type === 'ktm') {
          newLoadingState.ktm[index] = false
        } else if (type === 'essay') {
          newLoadingState.essay = false
        }
        setLoading(newLoadingState)
      }
    }
  }

  const resetFileInput = (index) => {
    setFileInputKeys((currentKeys) =>
      currentKeys.map((key, i) => (i === index ? Math.random() : key))
    )
  }

  const namaAnggotaSatu = watch(`data_diri.${0}.nama_lengkap`)

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
          Conference
        </h1>
        <div className="mb-[100px] flex min-w-[50vw] flex-wrap items-center justify-center gap-[10px] xs:gap-[10px] md:gap-[20px] lg:gap-[20px]">
          <h1 className="font-montserrat text-[10px] font-[600] text-[#FAFAFA] md:text-[12px] lg:text-[16px] ">
            Guidebook
          </h1>
          <Link
            href={'https://bit.ly/RegistrationICEE2024Conference'}
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
                <h2 className=" font-sarmady text-[40px] font-semibold text-[#FAFAFA] [text-shadow:_4px_4px_0_rgb(106_155_185)] lg:text-[60px]">
                  Peserta {index + 1}
                </h2>
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
                    <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                      Jurusan
                    </label>
                    <input
                      placeholder="Example: Sistem Informasi"
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
                      onChange={(e) =>
                        handleFileChange(e, index, namaLengkap, 'ktm')
                      }
                    />
                    {namaLengkap === '' ? (
                      <>
                        <span className="font-montserrat text-[16px] text-[#FFC892]">
                          Please fill in your name first
                        </span>
                      </>
                    ) : null}
                    {loading.ktm[index] ? (
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
              <input
                key={essayInputKey}
                disabled={namaAnggotaSatu === '' ? true : false}
                type="file"
                accept=".doc,.docx,.pdf"
                className={formClasses}
                onChange={(e) =>
                  handleFileChange(e, null, namaAnggotaSatu, 'essay')
                }
              />
              {namaAnggotaSatu === '' ? (
                <>
                  <span className="font-montserrat text-[16px] text-[#FFC892]">
                    Please fill in your name first
                  </span>
                </>
              ) : null}
              {loading.essay ? (
                <div className="flex items-center gap-[10px]">
                  <p className="font-montserrat text-[16px] text-[#FFC892]">
                    Uploading
                  </p>
                  <ClipLoader color="#FFC892" size={15} />
                </div>
              ) : (
                apiResponse['url_essay'] &&
                (apiResponse['url_essay'] === 'error' ? (
                  <>
                    <p className='className="font-montserrat text-[16px] text-red-500'>
                      An error occurred{' '}
                      <p
                        onClick={() => setEssayInputKey(Math.random())}
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
                        href={apiResponse['url_essay'].data.file_url}
                        className='className="font-montserrat text-[16px] text-green-500 underline'
                      >
                        Preview
                      </Link>
                    </p>
                  </>
                ))
              )}
            </div>
            <div className="">
              <label className="block font-sarmady text-[20px] font-[600] text-[#FAFAFA]">
                Submission Video (Link)
              </label>
              <input
                placeholder="Example: https://www.youtube.com/@PewDiePie"
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
                placeholder="Example: 0812341234123"
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
