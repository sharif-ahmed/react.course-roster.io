/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import Course from '../Course/Course';

const Courses = (props) => {
    const { courses, handleAddToCart } = props;
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    courses.map((course, idx) => <Course key={idx} course={course} handleAddToCart={handleAddToCart} />)
                }
            </div>
        </div>
    );
};

export default Courses;