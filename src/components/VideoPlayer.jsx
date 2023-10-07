import React, { useEffect, useRef } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

export default function VideoPlayer() {
  const onEnd = (event) => {
    const player = event.target

    player.playVideo()
  }

  const opts = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      loop: 1,
      controls: 0,
    },
  }

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
    <>
      <video
        className="w-[100vw] bg-black"
        autoPlay
        muted
        loop
        alt="All the devices"
        src="https://storage.googleapis.com/icee24/asset/jumbotron.mp4"
        ref={videoEl}
      />
    </>
  )
}
