import { Link } from 'react-router-dom';
import './index.scss';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h5 className='not-found__title'>404 NOT FOUND</h5>
      <div className='not-found__container'>
        <div className='not-found__container__img-box'>
          <img src="img/not-found.jpg" className='not-found__container__image' />
        </div>
        <div className='not-found__container__content'>
          <h1 className='not-found__container__content__title'>
            I have bad news for you
          </h1>
          <p className='not-found__container__content__paragraph'>
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <Link to='/' className='not-found__link'>
            <button
              type='button'
              className='not-found__container__content__button'>
              RETURN
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
