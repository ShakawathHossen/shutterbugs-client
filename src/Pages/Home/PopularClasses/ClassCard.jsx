import React from 'react';

const ClassCard = ({course}) => {
    const {Image,Name,InstructorName,AvailableSeats,Price} = course;
    return (
        <div className="card rounded-sm w-96 bg-base-100 shadow-xl">
  <figure><img src={Image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
     {Name}
      <div className="badge badge-secondary">{AvailableSeats}</div>
    </h2>
    <p>Instructor: {InstructorName}</p>
    <p>{Price}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Select</div> 
      
    </div>
  </div>
</div>
    );
};

export default ClassCard;