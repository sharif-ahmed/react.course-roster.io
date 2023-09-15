/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const Cart = (props) => {
    const { carts, totalPrice, totalCredit } = props;

    return (
        <div className='bg-white rounded-lg p-4'>
            <h3 className='text-[#2F80ED] text-lg font-bold leading-7 mb-4'>Credit Hour Remaining {20 - totalCredit} hr</h3>
            <hr />
            <h2 className='text-[#1C1B1B] text-[20px] mb-[20px] mt-4 font-bold'>Course Name</h2>
            {
                carts.map((cart, idx) => (
                    <h2 className='text-[#1c1b1b99] text-[16px] font-normal' key={idx}>{idx + 1} {cart.course_title}</h2>
                ))
            }
            <hr className='mt-6' />
            <h2 className='my-4 text-base font-medium text-[#1c1b1bcc]'>Total Credit Hour : {totalCredit}hr</h2>
            <hr />
            <h2 className='my-4 text-base font-semibold text-[#1c1b1bcc]'>Total Price : {totalPrice} USD</h2>
        </div>
    );
};

export default Cart;