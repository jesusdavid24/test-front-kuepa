import { Link, useNavigate} from "react-router-dom";
import toast from "../../utils/toast";
import useForm from '../../hooks/useForm';
import { fetchUserByUserName, getUserByEmail } from '../../api/user';
import { useSelector, useDispatch } from 'react-redux';
import { postUsers, selectPostUsers } from '../../store/redux/slices/usersSlice'
import Loader from '../Loader'
import './index.scss';

const Register = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { error, status } = useSelector(selectPostUsers)

  const { form, handleChange, resetForm } = useForm({
    name: '',
    userName: '',
    email: '',
    password: '',
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
   
    if(form.name && form.userName && form.email &&
      form.password) {

        const user = await getUserByEmail(form.email)
        
        if (user.email) {
          return toast.fire({
            icon: "error",
            title: "email already exists",
          });
        }


        const userName = await fetchUserByUserName(form.userName);

        if (!userName) {        
          dispatch(postUsers(form))
          toast.fire({
          icon: "success",
          title: "User successfully created",
        });

          navigate("/confirmed-account");
          resetForm();
        } else {
          return toast.fire({
            icon: "error",
            title: "user already exists",
          });
        }        
       
    } else {
      return toast.fire({
        icon: "error",
        title: "You must complete all fields",
      });
    }
  }

  if(status === 'loading') return  <div><Loader />.</div>

  if(error) return <div>Error: {error}</div>

  return (
    <div className="registration">
      <div className="registration__container">
        <div className="registration__container__img">
          <img src="/img/registration.jpg" alt="registration" />
        </div>
        <div className="registration__container__form">
          <form onSubmit={handleSubmit}>
            <p className="registration__container__form__title">
              Register
            </p>
            <p className="registration__container__form__message">
              Signup now and get full access to our app.
            </p>

            <div className="registration__container__form__flex">
              <label>
                <input
                  required=""
                  placeholder=""
                  name="name"
                  type="text"
                  onChange={handleChange}
                  className="registration__container__form__flex__input"
                />
                <span>Name</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  name="userName"
                  type="text"
                  onChange={handleChange}
                  className="registration__container__form__flex__input"
                />
                <span>User Name</span>
              </label>
            </div>

            <div className="registration__container__form__col">
              <label>
                <input
                  required=""
                  placeholder=""
                  name="email"
                  type="email"
                  onChange={handleChange}
                  className="registration__container__form__col__input"
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  required=""
                  placeholder=""
                  name="password"
                  type="password"
                  onChange={handleChange}
                  className="registration__container__form__col__input"
                />
                <span>Password</span>
              </label>
            </div>

            <div className="registration__container__form__button">
              <button type="submit">Submit</button>
            </div>
            <p className="registration__container__form__signin">
              Already have an acount?
              <Link href="#" to="/">
                Signin
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;