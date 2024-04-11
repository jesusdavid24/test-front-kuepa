import { Navigate } from "react-router-dom"
import { useJwt } from "react-jwt";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('token')
  const { isExpired } = useJwt(token);
  const isAuthorization = !isExpired

  return isAuthorization ? children : <Navigate to="/" />
}

export default PrivateRoute
