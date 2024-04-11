import Chat from '../../components/Chat';
import VideoPlayer from '../../components/VideoPlayer';
import './index.scss';

const Home = () => {

  return (
    <div className="home">
      <div className="home__videoPlayer">
        <VideoPlayer />
      </div>
      <div className="home__chat">
        <Chat />
      </div>
    </div>
  )
}

export default Home;