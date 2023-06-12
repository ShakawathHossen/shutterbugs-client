import { useState, useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
   const { user } = useContext(AuthContext);
   const token = localStorage.getItem('token');
   const { data: adminData, isLoading: isAdminLoading } = useQuery({
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

   const { data: instructorData, isLoading: isInstructorLoading } = useQuery({
      queryKey: ['isInstructor', user?.email],
      queryFn: async () => {
         const res = await fetch(`http://localhost:5000/users/instructor/${user?.email}`, {
            headers: {
               authorization: `Bearer ${token}`
            }
         });
         return res.json();
      }
   });
   const isAdmin = adminData?.admin === true;
   const isInstructor = instructorData?.instructor === true;

   return [isAdmin, isInstructor, isAdminLoading || isInstructorLoading];
};

export default useAdmin;
