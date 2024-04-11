import './index.scss';

const VideoPlayer = () => {
  return (
    <div className="video-player">
      <h2>Video Streaming Example</h2>
      <video controls width="600" autoPlay>
        <source src="/video/video.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
    </div>
  );
};

export default VideoPlayer;

