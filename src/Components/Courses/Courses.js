import React from 'react';
import "./Courses.css";

const Courses = (props) => {
    const {title,description,price,author} = props.courses;
    console.log(title);

    return (
        <div>
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h5>${price}</h5>
        </div>
    );
};

export default Courses;