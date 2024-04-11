import { Link } from "react-router-dom";

const ConfirmedAccount = () => {
  return (
    <div>
      <h3>Please login to your email and confirm your account.</h3>
      <Link href="#" to="/">
        to SignIn
      </Link>
    </div>
  )
}

export default ConfirmedAccount