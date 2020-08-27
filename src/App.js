import React from 'react';
import './App.css';
import coursesData from './FakeData';
import { useState } from 'react';
import Courses from './Components/Courses/Courses';



function App() {
  const courseData = coursesData;
  console.log(coursesData);
  const[courses,setCourses]=useState(courseData);
  const[courseCart,setCourseCart] = useState([]);

  const handleAddCart =(courses)=>{
    const newCart = [...courseCart,courses];
    setCourseCart(newCart);
  }
  const totalPrice = courseCart.reduce((total,course)=> total+course.price,0)

  return (
    <div className="row container">
        <div className="col-md-8">
        {
          courses.map(course => <Courses handleAddCart={handleAddCart} courses={course}></Courses>)
        }
        </div>
        <div className="col-md-4">
               <h2>Billing Details</h2>
               <h4>Num of Course {courseCart.length}</h4>
           <p>Total Price: {totalPrice}</p>
        </div>
       
      
    </div>
  );
}

export default App;
