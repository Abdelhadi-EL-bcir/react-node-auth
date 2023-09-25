import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {

  const [auth , setAuth] = useState(false);
  const [message  ,setMassage] = useState('');
  const [name,setName] = useState('');
  useEffect(()=>{
    axios.get('http://localhost:8081' , {withCredentials : true})
    .then(res=>{
      if(res.data.Status === "Success"){
         setAuth(true);
         setName(res.data.name);
         
      }else{
         setAuth(false);
         setMassage(res.data.Error);
      }
    })
  }, [])

  return (
    <div className='container mt-4'>
      {
        auth ?
        <div>
          <h3>You are Authorized --- {name}</h3>
          <button className='btn btn-danger'>Logout</button>
        </div>:
        <div>
          <h3>{message}</h3>
          <Link to='/login' className='btn btn-primary'>login now</Link>
        </div>
      }
    </div>
  )
}

export default Home;