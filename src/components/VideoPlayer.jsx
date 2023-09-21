import React from 'react'
import YouTube, { YouTubeProps } from 'react-youtube'

export default function VideoPlayer() {

  const onEnd = (event) => {
    // Access the player instance
    const player = event.target;

    player.playVideo();

  }

  const opts = {
    height: '800',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      mute: 1,
      loop: 1,
    },
  }

  return <YouTube videoId="hgDUdTI8CVc" opts={opts} onEnd={onEnd} />
}
