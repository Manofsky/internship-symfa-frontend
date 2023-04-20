import { useCookies } from 'react-cookie';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppSelector } from '../App/hooks';
import { getUser } from '../App/reducers/userSlice';
import { useGetUserByEmailQuery } from '../App/api/userApi';
import FullScreenLoader from '../components/FullScreenLoader';

const PrivateRoute = () => {
  const [cookies] = useCookies(['logged_in']);
  const location = useLocation();
  const user = useAppSelector(getUser);
  const { data: updatedUser, isLoading, isFetching } = useGetUserByEmailQuery(user?.email, {
    skip: false,
    refetchOnMountOrArgChange: true,
  });
  const loading = isLoading || isFetching;
  if (loading) {
    return <FullScreenLoader />;
  }

  return (cookies.logged_in) ? (
    <Outlet />
  ) : (
    <Navigate to='/login' state={{ from: location }} />
  );
};

export default PrivateRoute;
