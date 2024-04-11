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
      <div className='header__USER'>
        <i className='bi bi-person-fill' />
      </div>
      <div className='header__user__name'>
        <h4>{`${localStorage.getItem('name')}`}</h4>
        <a type='button' onClick={handleLogout}>
          logout
        </a>
      </div>
    </div>
  )
}

export default Header;