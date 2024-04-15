import { Outlet, useNavigate } from "react-router-dom";
import Header from '../components/Header';
import ValidateElement from '../components/ValidateElement';

const Root = () => {
  const navigate = useNavigate();
  const invalidPaths = [
    '/', 
    '/register', 
    '/confirmed-account', 
    '/verify-account:token'
  ];
  
  return (
    <>
      <ValidateElement invalidPaths={invalidPaths}>
        <Header />
      </ValidateElement>
      <main>
        {
          navigate.state === 'loading'
            ? 'Loading...'
            : <Outlet />
        }
      </main>
    </>
  );
};

export default Root;
