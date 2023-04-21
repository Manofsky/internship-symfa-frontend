import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import FullScreenLoader from '../components/FullScreenLoader';
import { useGetMeQuery } from '../App/api/userApi';
import { useAppSelector } from '../App/hooks';
import { getUser } from '../App/reducers/userSlice';

const PrivateRoute = () => {
  const [cookies] = useCookies(['logged_in']);
  const location = useLocation();
  const { isLoading, isFetching } = useGetMeQuery(null, {
    refetchOnMountOrArgChange: true,
  });
  const loading = isLoading || isFetching;

  const user = useAppSelector(getUser);

  if (loading) {
    return <FullScreenLoader />;
  }

  return (user || cookies.logged_in) ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  );
};

export default PrivateRoute;
