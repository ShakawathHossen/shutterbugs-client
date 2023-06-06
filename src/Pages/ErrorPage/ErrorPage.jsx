import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (

        <section className='flex flex-col items-center justify-center h-screen p-16  text-gray-900'>
            {/* <img className='w-4/12' src="/src/assets/404 error lost in space-cuate.png" alt="" /> */}
            <img className='animate-bounce' src="https://i.ibb.co/SKdXnZv/102863010-legoimage-removebg-preview.png" alt="" />
            <button><Link to="/">Back To Home</Link></button>
        </section>

    );
};

export default ErrorPage;