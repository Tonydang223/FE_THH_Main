import { profileApi } from '../../pages/Profile/profile.service'
import Loading from '../Loading/Loading';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux'
import { useEffect } from 'react'
import { useRefreshMutation } from '../../pages/Auth/auth.service'

export default function AuthMiddleware(props) {
    const {token} = useSelector(state => state.user);

    const [refresh] = useRefreshMutation();
    

    // console.log(!token)
    const { isLoading } = profileApi.endpoints.getMe.useQuery(null, {
        skip: !token,
    });

    useEffect(() => {
        const verifyRefreshToken = async () => {
                await refresh().unwrap();
        }
        if(!token) {
            verifyRefreshToken();
        }
    }, [token])


    
    // const loading = isLoading;


    if(isLoading) {
        return (
            <Loading />
        )
    }
    
    

    return props.children
}


AuthMiddleware.propTypes = {
    children: PropTypes.node.isRequired,
  };
  