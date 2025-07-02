import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../context/UserContext.jsx';

export default function AccessRoutes() {}

AccessRoutes.Protected = () => {
    const { user } = useUser();

    if(!user) {
        return <Navigate to='/login' />
    }

    return <Outlet />
}

AccessRoutes.Public = () => {
    const { user } = useUser();

    if(user) {
        return <Navigate to='/dashboard' />
    }

    return <Outlet />
}