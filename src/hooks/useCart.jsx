import { useQuery } from '@tanstack/react-query'
import { AuthContext } from '../Providers/AuthProviders';
import { useContext } from 'react';

const useCart = () => {
    const { user } = useContext(AuthContext);
    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/carts?email=${user?.email}`)
            return res.json();
        },
    })


    return { refetch, cart }

}
export default useCart;