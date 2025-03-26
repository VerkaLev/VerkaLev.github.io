import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

export const useLogOut = () => {
  const navigate = useNavigate();
  const handleLogOutClick = () => {
    signOut(auth);
    localStorage.removeItem('user');
    navigate('/logIn');
  };
  return { handleLogOutClick };
};
