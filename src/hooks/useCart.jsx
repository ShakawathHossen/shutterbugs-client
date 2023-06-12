import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProviders';
import { useContext } from 'react';

const useCart = () => {

    const { user, loading } = useContext(AuthContext);
    const token = localStorage.getItem('token');
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await fetch(`https://shutter-bugs-server.vercel.app/carts?email=${user?.email}`,{
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
            return res.json();
        },
    })


    return { refetch, cart }

}
export default useCart;