import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../hooks/useCart';


const Navbar = () => {
  const { user, logOut } = useContext(AuthContext)
  const { refetch, cart } = useCart();

  const handleLogOut = () => {
    logOut()
      .then(result => {
        console.log(result);

      })
      .catch(err => {
        console.log(err);
      })
  }



  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  const navOptions = <>

    <li>
      <Link to="/" className="text-white hover:text-gray-300">
        Home
      </Link>
    </li>

    <li>
      <Link to="/instructors" className="text-white hover:text-gray-300">
        Instructors
      </Link>
    </li>
    <li>
      <Link to="/classes" className="text-white hover:text-gray-300">
        Classes
      </Link>
    </li>
    <li>
      <Link to="/dashboard" className="text-white hover:text-gray-300">
        Dashboard
      </Link>
    </li>
    <li  className='relative'>
      <Link to="" className="text-white hover:text-gray-300">
      <FaShoppingCart size={24} className="text-green-600" />
      <span className="bg-red-500 text-white text-xs font-bold rounded-full absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 px-1 py-0">
          +{cart?.length || 0}
        </span>
      </Link>
    </li>


    {
      user ?
        <>
          <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
            <img className='w-8 h-8 rounded-full' src={user.photoURL} alt="" />
          </div>
          <li>
            <Link onClick={handleLogOut} className="text-white hover:text-gray-300">
              Logout
            </Link>
          </li>
        </> :
        <>
          <li>
            <Link to="/login" className="text-white hover:text-gray-300">
              Log In
            </Link>
          </li>
        </>
    }






  </>

  return (
    <div>
      <nav className="flex items-center justify-between px-4  md:z-10 w-full bg-green-900 ">
        {/* Logo */}
        <div className="flex items-center">
          <img src="https://i.ibb.co/Vg6XWY9/2-removebg-preview.png" alt="Logo" className="h-20" />

        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20.293 4.293a1 1 0 0 0-1.414 0L12 10.586 5.121 3.707a1 1 0 0 0-1.414 1.414L10.586 12l-6.879 6.879a1 1 0 1 0 1.414 1.414L12 13.414l6.879 6.879a1 1 0 0 0 1.414-1.414L13.414 12l6.879-6.879a1 1 0 0 0 0-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6a1 1 0 1 1 0-2h16a1 1 0 0 1 0 2H4zm0 5a1 1 0 1 1 0-2h16a1 1 0 0 1 0 2H4zm0 5a1 1 0 1 1 0-2h16a1 1 0 0 1 0 2H4z"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center">
          <ul className="flex items-center space-x-4">
            {navOptions}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden absolute z-20 right-0 top-10 w-1/2">
            <ul className="bg-gray-900 py-2 px-4 space-y-2">
              {navOptions}
            </ul>
          </div>
        )}
      </nav>

    </div>
  );
};

export default Navbar;