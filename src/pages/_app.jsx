import Loader from '@/components/Loader/Loader'
import '@/styles/tailwind.css'
import 'focus-visible'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const loader = document.getElementById('globalLoader')
      if (loader) loader.remove()
    }
  }, [])
  useEffect(() => {
    Router.events.on('routeChangeStart', (url) => {
      setIsLoading(true)
    })

    Router.events.on('routeChangeComplete', (url) => {
      setIsLoading(false)
    })

    Router.events.on('routeChangeError', (url) => {
      setIsLoading(false)
    })
  }, [Router])

  return (
    <>
      {isLoading && <Loader />}
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}
