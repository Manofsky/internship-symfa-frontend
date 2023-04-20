import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import FullScreenLoader from '../components/FullScreenLoader';
import { useGetUserByEmailQuery } from '../App/api/userApi';
import { useAppSelector } from '../App/hooks';
import { getUser } from '../App/reducers/userSlice';

const PrivateRoute = () => {
  const [cookies] = useCookies(['logged_in']);
  const location = useLocation();
  const user = useAppSelector(getUser);
  const { isLoading, isFetching } = useGetUserByEmailQuery(user?.email, {
    refetchOnMountOrArgChange: true,
    selectFromResult: (data) => data,
  });
  const loading = isLoading || isFetching;
  if (loading) {
    return <FullScreenLoader />;
  }

  return (user || cookies.logged_in) ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};

export default PrivateRoute;
