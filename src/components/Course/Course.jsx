/* eslint-disable react/prop-types */
import React from 'react';
import { FaDollarSign, FaBookOpen } from 'react-icons/fa';

const Course = (props) => {
    const { course, handleAddToCart } = props
    return (
        <div className='bg-white rounded-lg p-4'>
            <img className='w-full' src={course.cover} alt="" />
            <h2 className='text-[#1C1B1B] text-[18px] font-semibold my-4'>{course.course_title}</h2>
            <p className='text-[#1c1b1b99] text-[14px] font-normal'>{course.course_description}</p>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center'>
                    <FaDollarSign className='text-[#1c1b1b99] font-normal mr-3 ' /> <span className='text-[#1c1b1b99] text-[16px]'>Price : {course.course_price}</span>
                </div>
                <div className='flex items-center'>
                    <FaBookOpen className='text-[#1c1b1b99] font-normal mr-3 ' /> <span className='text-[#1c1b1b99] text-[16px]'>Credit : {course.course_credit}hr</span>
                </div>
            </div>
            <button onClick={() => handleAddToCart(course)} className='w-full bg-[#2F80ED] rounded-lg mt-4 py-2 text-white font-semibold text-lg'>Select</button>
        </div>
    );
};

export default Course;