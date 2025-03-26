import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute: () => JSX.Element = () => {
  const user = localStorage.getItem('user');
  return user ? <Outlet /> : <Navigate to="/logIn" />;
};
