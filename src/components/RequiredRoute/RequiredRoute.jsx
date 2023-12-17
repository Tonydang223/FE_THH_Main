import { useCookies } from 'react-cookie'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { profileApi } from '../../pages/Profile/profile.service'
import Loading from '../Loading/Loading';
export default function RequiredRoute() {
    const [cookies] = useCookies(["logged_in"]);
    const location = useLocation();


    const { isLoading, isFetching, data } = profileApi.endpoints.getMe.useQuery(null, {
        skip: false,
        refetchOnMountOrArgChange: true,
    });
    
    const loading = isLoading || isFetching;


    if(loading) {
        return (
            <Loading />
        )
    }
    
    

    return (cookies.logged_in || !isFetching && data) ? (
        <Outlet />
    ) : (
        <Navigate to="/login" state={{ from: location }} replace />
    )
}
