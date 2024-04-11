import { useEffect } from 'react';
import { Link, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { setLogin, authLogin } from '../../store/redux/slices/loginSlice';
import useForm from '../../hooks/useForm';
import toast from '../../utils/toast';
import './index.scss';


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data, error, status } = useSelector(authLogin);
  const { form, handleChange } = useForm();

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(setLogin(form))
    toast.fire({
      icon: "success",
      title: "session started successfully",
    });
    
  };

  useEffect(() => {
    if( data.role === 'STUDENT' || data.role === 'MODERATOR') {
      navigate("/home");
    };

  }, [data])


  if(status === 'loading') return  <div>Loading...</div>

  if (error) return <div>Error: {error}</div>

  return (
    <div className="login">
      <div className="login__container">
        <div className="login__container__form">
          <p className="login__container__form__title">Welcome Back</p>
          <form onSubmit={handleSubmit}>
            <div className="login__container__form__input-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="login__container__form__input-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
              <div className="login__container__form__forgot">
                <a rel="noopener noreferrer" href="#">Forgot Password?</a>
              </div>
            </div>
            <button type="submit" className="login__container__form__sign">Sign in</button>
          </form>
          <p className="login__container__form__signup">Don&apos;t have an account?
            <Link rel="noopener noreferrer" href="#" to="/register">
              Sign up
            </Link>
          </p>
        </div>
        <div className="login__container__img">
          <img src="img/login.jpg" alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;