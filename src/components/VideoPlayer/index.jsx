import './index.scss';

const VideoPlayer = () => {
  return (
    <div className="video__player">
      <div className="video__player__container">
        <video controls autoPlay>
          <source src="/video/video.mp4" type="video/mp4" />
          Your browser does not support the video element.
        </video>
      </div>
    </div>
  );
};

export default VideoPlayer;

