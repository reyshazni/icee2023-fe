import { Header } from '@/components/Header'
import Head from 'next/head'
import { useEffect, useRef } from 'react'

export default function Video() {
  const videoEl = useRef(null)

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch((error) => {
        console.error('Error attempting to play', error)
      })
  }

  useEffect(() => {
    attemptPlay()
  }, [])

  return (
    <div className="App">
      <h1>Autoplay example</h1>
      <div>
        <video
          style={{ maxWidth: '100%', width: '800px', margin: '0 auto' }}
          playsInline
          loop
          controls
          alt="All the devices"
          src={require('../videos/rickroll.mp4')}
          ref={videoEl}
        />
      </div>
    </div>
  )
}
