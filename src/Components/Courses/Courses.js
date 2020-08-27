import React from 'react';
import "./Courses.css";

const Courses = (props) => {
    const {title,description,price,author} = props.courses;
    const handleAddCart = props.handleAddCart;

    return (
        <div className="courseContainer">
          
           <h2 className="text-primary">{title}</h2>
           <h4>{description}</h4>
           <h5>${price}</h5>
           <button onClick={()=>{handleAddCart(props.courses)}} className="btn btn-danger">Enroll Now</button>    
        </div>
    );
};

export default Courses;