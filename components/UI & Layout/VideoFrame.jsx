import ReactPlayer from 'react-player'

const VideoFrame = () => {
  return (
    <ReactPlayer
        className="react-player"
        url="https://www.youtube.com/watch?v=o3V-GvvzjE4&t=1s&ab_channel=EASPORTSFIFA"
        width={ undefined ? '100%' : '100%'}
        height={ undefined ? '100%' : '100%'}
      />
  )
}

export default VideoFrame