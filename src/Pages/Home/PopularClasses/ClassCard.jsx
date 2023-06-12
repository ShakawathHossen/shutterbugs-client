import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Toaster, toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../../hooks/useCart';

const ClassCard = ({ course }) => {
  const { Image, Name, InstructorName, AvailableSeats, Price, _id } = course;
  const location = useLocation()
  const { user } = useContext(AuthContext)
  const { refetch, cart } = useCart();
  const navigate = useNavigate()

  const handleAddtocart = (course) => {
    console.log(course)
    if (user && user.email) {
      const cartItem = { courseId: _id, uid: user.uid, Image, Name, InstructorName, AvailableSeats, Price, email: user.email }
      fetch('https://shutter-bugs-server.vercel.app/carts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItem)


      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            refetch();
            toast.success('Course added to cart')
          }
        })
    }
    else {
      navigate('/login', { state: { from: location } })
      toast.error('Please login first')
    }
  }
  return (

    <div className="card rounded-sm w-96 bg-base-100 shadow-xl">
      <div><Toaster /></div>
      <figure><img src={Image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {Name}
          <div className="badge bg-green-600 text-white"><span className='font-semibold mr-1'>Capecity:</span> {AvailableSeats}</div>
        </h2>
        <p>Instructor: {InstructorName}</p>
        <p>${Price}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddtocart(course)}><div className="badge badge-outline">Select</div></button>

        </div>
      </div>
    </div>
  );
};

export default ClassCard;