import Chat from '../../components/Chat';
import VideoPlayer from '../../components/VideoPlayer';
import './index.scss';

const Home = () => {

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__container__tittle">
          <h2>Video Streaming Example</h2>
        </div>
        <div className="home__container__body">
          <div className="home__container__body__videoPlayer">
            <VideoPlayer />
          </div>
          <div className="home__container__body__chat">
            <Chat />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;