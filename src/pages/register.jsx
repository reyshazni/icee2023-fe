import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { SelectField, TextField } from '@/components/Fields'
import OnConstruction from '@/components/OnConstruction'
import UploadImage from '@/components/UploadImage'

export default function Register() {
  return (
    <>
      <Head>
        <title>🚧Under Construction 🚧</title>
      </Head>
      <main className="flex h-full items-center justify-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-300 p-3">
          <div className="left-[9.50px] top-[4.50px] flex h-5 w-5 justify-center rounded-lg border-2 border-sky-700 bg-transparent p-0.5">
            <div className=" h-1/2 w-0.5 origin-bottom animate-rotate rounded-sm bg-sky-700"></div>
          </div>
        </div>
      </main>
      {/* <OnConstruction /> */}
      {/* <div>
        <h1>Image Upload</h1>
        <UploadImage />
      </div>
      <div className="flex h-screen flex-col items-center justify-center bg-teal-900">
        <div className="mb-6 text-3xl text-white">Bukti Follow IG ICEE</div>

        <div className="relative h-96 w-3/4 rounded-xl border-2 border-dashed border-white">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center">
            <div className="mb-4 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto mb-2 h-10 w-10"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M6 2a1 1 0 00-1 1v14a1 1 0 001 1h8a1 1 0 001-1V3a1 1 0 00-1-1H6zm1 2h6v12H7V4zm6 5a1 1 0 11-2 0 1 1 0 012 0z"
                  clipRule="evenodd"
                />
              </svg>
              Drag & Drop your files here
            </div>
            <div className="mb-2 text-white">OR</div>
            <button className="rounded-lg bg-white py-2 px-6 text-teal-900">
              Browse Files
            </button>
          </div>
        </div>

        <div className="mt-8 flex space-x-4">
          <button className="rounded-lg bg-gray-600 py-2 px-6 text-white">
            SUBMIT
          </button>
          <button className="rounded-lg bg-yellow-500 py-2 px-6 text-white">
            CANCEL
          </button>
        </div>
      </div> */}
    </>
  )
}
