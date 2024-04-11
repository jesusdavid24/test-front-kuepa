import { useLocation } from 'react-router-dom';

const ValidateElement = ({ children, invalidPaths }) => {
  const location = useLocation();
  const isInvalid = invalidPaths.some((item) => item === location.pathname);
  return isInvalid ? null : children;
};

export default ValidateElement;