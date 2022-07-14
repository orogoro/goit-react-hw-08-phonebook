import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth';

export default function PublicRoute({ children, path, restricted = false }) {
  const isLoggedIn = useSelector(authSelector.getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to={`${path}`} /> : children;
}
