"use client"

import React from "react"
import ReactPlayer from "react-player"

interface VideoPlayerProps {
  url: string
  title?: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url, title }) => {
  return (
    <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg">
      <ReactPlayer
        url={url}
        controls
        width="100%"
        height="100%"
        className="absolute top-0 left-0"
        title={title}
      />
    </div>
  )
}

export default VideoPlayer
