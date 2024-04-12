import { Link } from "react-router-dom";
import './index.scss';

const ConfirmedAccount = () => {
  return (
    <div className="confirmed__account">
      <div className="confirmed__account__container">
        <div className="confirmed__account__container__info">
          <h1>
            Thank you very much for registering, please go <span> to your email 
            and confirm</span> your account. Only after you have confirmed 
            <span>your account you will be able</span> to log in.
          </h1>
          <Link to="/" className="confirmed__account__container__info__link">
            <button className="confirmed__account__container__info__link__button" type="button">
              <span className="confirmed__account__container__info__link__button__span">
                Sign In
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ConfirmedAccount