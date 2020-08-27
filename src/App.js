import React from 'react';
import './App.css';
import coursesData from './FakeData';
import { useState } from 'react';
import Courses from './Components/Courses/Courses';



function App() {
  const courseData = coursesData;
  console.log(coursesData);
  const[courses,setCourses]=useState(courseData);

  return (
    <div>
      
        {
          courses.map(course => <Courses courses={course}></Courses>)
        }
      
    </div>
  );
}

export default App;
