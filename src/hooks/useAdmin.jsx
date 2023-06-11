import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
   const { user } = useContext(AuthContext);
   const token = localStorage.getItem('token');
   const { data, isLoading: isAdminLoading } = useQuery({
      queryKey: ['isAdmin', user?.email],
      queryFn: async () => {
         const res = await fetch(`http://localhost:5000/users/admin/${user?.email}`, {
            headers: {
               authorization: `Bearer ${token}`
            }
         });
         return res.json();
      }
   });
   const isAdmin = data?.admin === true;
   return [isAdmin, isAdminLoading];
};

export default useAdmin;
