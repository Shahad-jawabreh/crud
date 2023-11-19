import React from 'react'
import '../../assets/cssFile/home.css';
import { Link } from 'react-router-dom';
export default function Home() {
  return (
    <div className='home'>
       <Link to="/index"  className='rounded-pill'>
        Show all students
       </Link>

       <Link to="/create"  className='rounded-pill'>
         add a new student
       </Link>
    </div>
  )
}
