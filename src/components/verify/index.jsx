import { useParams, useNavigate } from 'react-router-dom'
import { activeUser } from '../../api/login';
import CryptoJS from 'crypto-js';
import './index.scss';

const SECRET_KEY =  `${import.meta.env.VITE_SECRET_KEY}`;

const Verify = () => {
  const navigate = useNavigate();
  const { token } = useParams()

  const handleClick = async (event) => {
    event.preventDefault();
  
    const data = await activeUser(token);

    if (data) {
      const tokenCrypted = CryptoJS.AES.encrypt(data.token, SECRET_KEY).toString();
      const fullNameCrypted = CryptoJS.AES.encrypt(data.profile.name, SECRET_KEY).toString();
  
      localStorage.setItem('token', tokenCrypted);
      localStorage.setItem('name', fullNameCrypted);
    } 

    navigate("/");
  };
  

  return (
    <div className="Verify">
      <div className="verify__container">
        <div className="verify__container__info">
          <h2>Thank you for registering in our App</h2>
          <button onClick={handleClick}>Activate account</button>
        </div>
      </div>
    </div>
  );
}

export default Verify;
