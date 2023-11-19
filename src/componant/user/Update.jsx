import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Input from '../sharedComponant/Input'
export default function Update() {
    const nav=useNavigate()
    const [user,SetUser]=useState({
        name:'',
        email:'',
        password:'',
        gender:''
    })

    const { update } = useParams();
    const getdata=async()=>{
          const {data}=await axios.get(`https://crud-users-gold.vercel.app/users/${update}`)
          SetUser(data.user)
    }
    
    const updatedata=(e)=>{
        console.log()
        SetUser({...user,[event.target.name]:event.target.value});
    }
    useEffect(()=>{
        getdata()
    },[])

    const changedata=async(e)=>{
        e.preventDefault();
        const {data}=await axios.put(`https://crud-users-gold.vercel.app/users/${user._id}`,user)
        if(data.message=='success'){
            swal("update successfully!", "You clicked the button!", "success");
            nav('/index')
        }
    }
  return (
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
                  <i className="fs-4 bi-house" /> <span className="ms-1 d-none d-sm-inline"><img src="../../../public/home.png" className='img-fluid' alt="home icon" /></span>
                </Link>
              </li>
            <li>
             
              <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                <li className="w-100 m-4">
                  <Link to='/index' className="nav-link px-0"><img src='../../../public/search.png' className='img-fluid' alt="show user icon" /></Link>
                </li>
                <li className=' m-4'>
                  <Link to='/create' className="nav-link px-0"><img src="../../../public/add-user (2).png" className='img-fluid' alt="add-user icon" /></Link>
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
        <h1 className='mb-5 fs-4'>Update student </h1>
          
<form onSubmit={changedata}>

  <Input name='name' title='user name' type='text' onChange={updatedata} value={user.name}/>
  <Input name='email' title='email' type='email' onChange={updatedata} value={user.email}/>
  <Input name='password' title='password' type='text' onChange={updatedata} value={user.password}/>
  <div className="form-check ms-4">
    <input className="form-check-input" checked={user.gender=='Female'?'checked':''} type="radio" name="gender" value='Female' id="Female" onChange={updatedata}/>
    <label className="form-check-label" htmlFor="Female">
      Female
    </label>
  </div>
  <div className="form-check ms-4">
    <input className="form-check-input" checked={user.gender=='Male'?'checked':''} type="radio" name="gender" value='Male' id="Male" onChange={updatedata} />
    <label className="form-check-label" htmlFor="Male">
      Male
    </label>
  </div>

  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary" >Update</button>
    </div>
  </div>
</form>

      </div>
    </div>
  </div>
  )
}
