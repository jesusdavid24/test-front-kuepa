import { useLocation } from 'react-router-dom';

const ValidateElement = ({ children, invalidPaths }) => {
  const { pathname } = useLocation();

  const isInvalid = invalidPaths.some(path => 
    path.includes(':') ? pathname.startsWith(path.replace(/:.*/, '')) : pathname === path
  );

  return isInvalid ? null : children;
};

export default ValidateElement;

