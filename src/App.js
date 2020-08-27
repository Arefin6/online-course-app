import React from 'react';
import './App.css';
import coursesData from './FakeData';
import { useState } from 'react';
import Courses from './Components/Courses/Courses';
import Header from './Components/Header/Header';




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
    <div>
         <Header></Header>
         <div className="row container">
         <div className="col-md-6 ">
        {
          courses.map(course => <Courses handleAddCart={handleAddCart} courses={course}></Courses>)
        }
        </div>
        <div className="offset-md-3 col-md-3">
               <h2 className="text-danger mb-4">Order Details:</h2>
               <h4 className="text-primary mb-4">Num of Course {courseCart.length}</h4>
              <h5 className="text-success">Total Price: $ {totalPrice}</h5>
              <button className="btn btn-success mt-4">Checkout</button>
        </div>
         </div>
        
       
      
    </div>
  );
}

export default App;
