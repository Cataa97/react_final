import { Outlet,  Navigate } from 'react-router-dom';
//import useAuth from '../context/useAuth';
import { AuthContext } from '../context/AuthProvider';
import { useContext } from 'react';


export default function PrivateRoutes()  {
  const { token } = useContext(AuthContext)
  console.log('hola');
  if (token) {
    return (
    <div>
      <Outlet />
    </div>);
  }
  console.log('adios');
  return <Navigate to="/login" replace />;
}