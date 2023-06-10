import React, { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';
import { Toaster, toast } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

const ClassCard = ({ course }) => {
  const { Image, Name, InstructorName, AvailableSeats, Price,_id } = course;
  const location= useLocation()
  const { user } = useContext(AuthContext)
  const navigate= useNavigate()

  const handleAddtocart = (course) => {
    console.log(course)
    if (user && user.email) {
      const cartItem= {courseId:_id,uid:user.uid,Image, Name, InstructorName, AvailableSeats, Price,email:user.email}
      fetch('http://localhost:5000/carts',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(cartItem)


      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            toast.success('Course added to cart')
          }
        })
    }
    else {
      toast.error('Please login first')
      navigate('/login', { state: {from:location}})
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