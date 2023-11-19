import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from '../sharedComponant/Input'
import axios from 'axios'
import validtion from './verification'
export default function Create() {
    const[error,SetError]=useState({
      name:'',
      password:'',
      email:''
    })
    const navigator= useNavigate()
    const [user,SetUser]=useState({
        name:'',
       email:'',
        password:'',
        gender:''
    })

    const addstudent=async(e)=>{
        e.preventDefault();
        console.log(user)
        if(user.name.trim().length<3){
          SetError({...error,name:'the length is short'})
        }
       else
        try {
            
            const {data}=await axios.post("https://crud-users-gold.vercel.app/users/",user)
            console.log(data)
            if(data.message=='success'){
              swal("Added succufully!", "You clicked the button!", "success");
              navigator('/index')
            }
        } catch (error) {
            console.error('Error:', error);        }
    }
    
    const handeldata=(e)=>{
        const {name,value}=e.target;
        console.log(name,value)
        const updatedUser = { ...user, [name]: value };
        console.log(updatedUser)
        SetUser(updatedUser);
    }

  return (
    
    <>
<div className="container-fluid">
  <div className="row flex-nowrap">
    <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
      <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
          <span className="fs-5 d-none d-sm-inline">Menu</span>
        </a>
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li className="nav-item m-4">
              <Link to='/' className="nav-link align-middle px-0">
                <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline"><img src="home.png" className='img-fluid' alt="home icon" /></span>
              </Link>
            </li>
          <li>
           
            <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
              <li className="w-100 m-4">
                <Link to='/index' className="nav-link px-0"><img src="search.png" className='img-fluid' alt="show user icon" /></Link>
              </li>
              <li className=' m-4'>
                <Link to='/create' className="nav-link px-0"><img src="add-user (2).png" className='img-fluid' alt="add-user icon" /></Link>
              </li>
            </ul>
          </li>
          
        </ul>
        <hr />
        <div className="dropdown pb-4">
          <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="hugenerd" width={30} height={30} className="rounded-circle" />
            <span className="d-none d-sm-inline mx-1">loser</span>
          </a>
          <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
            <li><a className="dropdown-item" href="#">New project...</a></li>
            <li><a className="dropdown-item" href="#">Settings</a></li>
            <li><a className="dropdown-item" href="#">Profile</a></li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li><a className="dropdown-item" href="#">Sign out</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="col py-3">
      <h1 className='mb-5 fs-4'>Add new student </h1>
      
      <form  onSubmit={addstudent}>
        <Input title='user name' name='name' type='text' classname={"form-control"}  onChange={handeldata}/>
        <p className='text-danger bold'>{error.name}</p>
        <Input title='email' name='email' type='email' classname={"form-control"}  onChange={handeldata}/>
        <p>{error.email}</p>
        <Input title='password' name='password' type='password' classname={"form-control"} onChange={handeldata} />
        <p>{error.password}</p>
        
 <div className='d-flex mt-3'>
    <span>gender : </span>
  <div className="form-check ms-4">
    <input className="form-check-input" type="radio" name="gender" value='Female' id="Female" onClick={handeldata}/>
    <label className="form-check-label" htmlFor="Female">
      Female
    </label>
  </div>
  <div className="form-check ms-4">
    <input className="form-check-input" type="radio" name="gender" value='Male' id="Male" onClick={handeldata} />
    <label className="form-check-label" htmlFor="Male">
      Male
    </label>
  </div>
</div>

        <button type='submit' className='btn btn-outline-info d-inline-block my-3'>add student</button>
        
        
  
      </form>

    </div>
  </div>
</div>

    </>
  )
}
