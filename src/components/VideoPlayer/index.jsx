import './index.scss';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <h2>Video Streaming Example</h2>
      <video controls width="600" autoPlay>
        <source src="/video/video.mp4" type="video/mp4" />
        Your browser does not support the video element.
      </video>
    </div>
  );
};

export default VideoPlayer;

