import { useState, useEffect } from 'react'
import Courses from './components/Courses/Courses'
import Cart from './components/Cart/Cart'

import './App.css'

function App() {

  const [courses, setCourses] = useState([]);
  const [carts, setCarts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch('/course.json')
      .then(res => res.json())
      .then(data => {
        setCourses(data);
      })
  }, []);

  const handleAddToCart = (course) => {
    const isCourseExist = carts.find((cart) => cart.id === course.id);
    if (!isCourseExist) {
      const newCarts = [...carts, course];
      if ((totalCredit + course.course_credit) > 20) {
        alert("Your credit limit exceed!");
      } else {
        setTotalPrice(totalPrice + course.course_price);
        setTotalCredit(totalCredit + course.course_credit);
        setCarts(newCarts)
      }
    } else {
      alert("Course is already added to cart!");
    }

  }

  return (
    <>
      <div className='container mx-auto'>
        <h2 className='text-[#1C1B1B] font-bold text-3xl text-center my-12'>Course Registration</h2>
        <div className='flex flex-col lg:flex-row gap-5'>
          <div className='w-full lg:w-[75%]'>
            <Courses courses={courses} handleAddToCart={handleAddToCart}></Courses>
          </div>
          <div className='w-full lg:w-[25%]'>
            <Cart carts={carts} totalPrice={totalPrice} totalCredit={totalCredit}></Cart>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
