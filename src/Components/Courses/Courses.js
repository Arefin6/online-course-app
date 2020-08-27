import React from 'react';
import "./Courses.css";

const Courses = (props) => {
    const {title,description,price,author,img} = props.courses;
    const handleAddCart = props.handleAddCart;

    return (
        <div className="courseContainer">
            <img src={img} alt=""/>
           <h3 className="text-info mt-4">{title}</h3>
           <p>{description}</p>
           <h5 className="mb-3 text-warning">${price}</h5>
           <button onClick={()=>{handleAddCart(props.courses)}} className="btn btn-danger">Enroll Now</button>    
        </div>
    );
};

export default Courses;