import { Link } from "react-router-dom";
import './index.scss';

const ConfirmedAccount = () => {
  return (
    <div className="confirmedAccount">
      <h3>Please login to your email and confirm your account.</h3>
      <Link to="/">to SignIn</Link>
    </div>
  );
}

export default ConfirmedAccount