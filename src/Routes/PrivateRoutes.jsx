import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';


const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location = useLocation()

    if(loading){
        return <div className='flex justify-center items-center py-12'>
        <div className='radial-progress text-[#F7B801]' style={{"--value":100,"--size": "50px", "--thickness": "5px"}}>    
        </div>
        <div className='animate-spin radial-progress absolute text-[#283149]' style={{"--value":15,"--size": "50px", "--thickness": "5px"}}>
            
        </div>
    </div>;
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate> 

};

export default PrivateRoutes;