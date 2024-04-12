import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { clearLogin } from '../../store/redux/slices/loginSlice';
import './index.scss';

const Header = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const handleLogout = () => {
    const deleteKeys = ['token', 'name', 'email'];

    deleteKeys.forEach((key) => {
      localStorage.removeItem(key);
    });

    dispatch(clearLogin());

    navigate('/');
  };

  return (
    <div className='header'>
      <div className="header__container">
        <div className='header__container__user'>
          <img src="icons/user.svg" alt="user" />
        </div>
        <div className="header__container__name">
          <div className='header__container__name__user'>
            <h4>{`${localStorage.getItem('name')}`}</h4>
          </div>
          <div className='header__container__name__singout'>
            <a type='button' onClick={handleLogout}>
              <img src="icons/exit.svg" alt="exit" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;