import React from 'react';
import { FaBeer, FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-16'>
            <footer className="bg-green-600 text-[#283149] md:text-start text-center">
                <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 flex flex-wrap justify-between">
                    <div className="w-full md:w-4/12 mb-4 md:mb-0 flex items-center md:items-start  flex-col md:justify-start justify-center">
                        <img className='w-40' src="https://i.ibb.co/Vg6XWY9/2-removebg-preview.png" alt="" />
                        <p className='md:w-11/12  '>ShutterBugs is not just a photography summer camp; it's an immersive experience that sparks imagination, cultivates skills, and nurtures a lifelong passion for capturing moments through the lens. At ShutterBugs, we believe that every child has a unique perspective waiting to be discovered.</p>
                    </div>
                    <div className="w-full md:w-3/12 mb-4 md:mb-0">
                        <h4 className="text-white text-lg font-bold mb-4">Opening Hours</h4>
                        <p>Monday - Friday: 11:00am - 9:00pm</p>
                        <p>Saturday: 12:00pm - 10:00pm</p>
                        <p>Sunday: Closed</p>
                    </div>
                    <div className="w-full md:w-3/12 mb-4 md:mb-0">
                        <h4 className="text-white text-lg font-bold mb-4">Contact Us</h4>
                        <p>123 Main St</p>
                        <p>New York, NY 10001</p>
                        <p>Phone: (123) 456-7890</p>
                        <p>Email: info@shutterbugs.com</p>
                    </div>
                    <div className="w-full md:text-s md:w-2/12">
                        <h4 className="text-white text-lg font-bold mb-4">Follow Us</h4>
                        <div className="flex items-center md:justify-start justify-center">
                            <a href="#" className="bg-white hover:animate-bounce text-blue-700 p-2 rounded-full hover:text-gray-400 transition duration-500 ease-in-out"><i className="fab fa-facebook fa-2x"><FaFacebookF /></i></a>
                            <a href="#" className="ml-4 text-orange-500 hover:animate-bounce bg-white p-2 rounded-full  hover:text-gray-400 transition duration-500 ease-in-out"><FaInstagram /></a>
                            <a href="#" className="ml-4 text-red-600  hover:animate-bounce bg-white p-2 rounded-full hover:text-gray-400 transition duration-500 ease-in-out"><FaYoutube /></a>

                        </div>
                    </div>
                </div>
                <div className="bg-gray-800 py-4">
                    <div className="container mx-auto px-4 flex justify-between">
                        <p className="text-sm text-gray-500">© 2023 Hero Haven. All rights reserved.</p>
                        <p className="text-sm text-gray-500">Developed by Shakawath Hossen</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;