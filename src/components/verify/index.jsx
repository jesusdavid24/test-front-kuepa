import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { activeUser } from '../../api/login';
import CryptoJS from 'crypto-js';

const SECRET_KEY = 'S3CR3ET0'

const Verify = () => {
  const navigate = useNavigate();
  const { token } = useParams()

  const handleClick = async () => {
    const { data } = await activeUser(token);

    const tokenCrypted = CryptoJS.AES.encrypt(data.token, SECRET_KEY).toString()
    const fullNameCrypted = CryptoJS.AES.encrypt(data.profile.name, SECRET_KEY).toString()
   
    localStorage.setItem('token', tokenCrypted)
    localStorage.setItem('name', fullNameCrypted)

    navigate("/")
  }

  return (
    <div className="confirmedAccountMessage">
      <div>Gracias por registrarte en nuestra App</div>
      <button onClick={handleClick}>Dale click para activar tu cuenta</button>
    </div>
  );
}

export default Verify
