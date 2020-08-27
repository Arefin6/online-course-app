import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="header-warp">
            <div className="header-left">
                <h3>Akademia</h3>
                <input className="input" type="text" placeholder="Search for course"/>
            </div>
             <div className="header-right">
                 <a href="#">Courses</a>
                 <a href="#">Instractor</a>
                 <a href="#"> Student</a>

             </div>
        </div>
    );
};

export default Header;