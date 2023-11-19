import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import swal from 'sweetalert';
import Loading from './Loading';

export default function Index() {
    const [temp,SetTemp]=useState([])
    const [users,SetUser] = useState([])
    const [load,SetLoad]=useState(false)
    const getdata=async()=>{
      SetLoad(true)
       const {data}=await axios.get("https://crud-users-gold.vercel.app/users");
       SetTemp(data.users)
       SetLoad(false)
       SetUser(data.users);
    }

    const deletedata = async (id) => {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          try {
            const { data } = await axios.delete(`https://crud-users-gold.vercel.app/users/${id}`);
            swal("Poof! Your imaginary file has been deleted!", {
              icon: "success",
            });
            // Move getdata() here to ensure it is called after successful deletion
            getdata();
          } catch (error) {
            console.error("Error deleting data:", error);
            // Handle error if deletion fails
          }
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    };
    
    useEffect(()=>{
        getdata();
    },[])
const search=async(e)=>{
  console.log(e.target.value);
  const filteredUsers = temp.filter(user => user.name.includes(e.target.value));
  SetUser(filteredUsers);

}
    if(load){
      return (<Loading/>)
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
  <form className="form-inline">
  <i className="fas fa-search" aria-hidden="true" />
  <input onKeyUp={search} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search for user name" />
</form>

    <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">name</th>
      <th scope="col">email</th>
      <th scope="col">password</th>
      <th scope="col">delete</th>
      <th scope="col">update</th>
      <th scope="col">details</th>
    </tr>
  </thead>
  <tbody>

{
    users.map((ele,index)=>{
        return(
        <tr key={index}>
      <td>{index}</td>
      <td>{ele.name}</td>
      <td>{ele.email}</td>
      <td>{ele.password}</td>
      <td><button className='btn btn-danger' onClick={()=>deletedata(ele._id)}>Delete</button></td>
      <td><Link to={`/update/${ele._id}`} className='btn btn-ingo'>Update</Link></td>
      <td><Link to={`/details/${ele._id}`} className='btn btn-light'>Detials</Link></td>
        </tr>
        )
    })
}

  </tbody>
</table>
    </div>
  </div>
</div>
  )
}
