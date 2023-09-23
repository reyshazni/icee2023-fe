import React, { useEffect, useRef } from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

export default function VideoPlayer() {
  const onEnd = (event) => {
    // Access the player instance
    const player = event.target

    player.playVideo()
  }

  const opts = {
    // width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
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
      {/* <YouTube videoId="hgDUdTI8CVc" opts={opts} onEnd={onEnd} /> */}
      {/* <iframe
        className="h-[100%] w-[100%]"
        src="https://www.youtube.com/embed/hgDUdTI8CVc?controls=0&rel=0&autoplay=1&rel=0&loop=1&playlist=hgDUdTI8CVc&mute=1"
        frameBorder="0"
        allowFullScreen
      ></iframe> */}
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
