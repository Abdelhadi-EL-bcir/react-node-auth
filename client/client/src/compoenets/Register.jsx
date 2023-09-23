import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Register = () => {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    });

    const navigate = useNavigate();

    const submitHundler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/register' , user).then((response=>{
            console.log(response.data);nav
            if(response.data.Status === 'Success'){
                navigate('/login');
            }else{
                alert('error');
            }
        })).catch(error => console.log(error));
    }


    return (
        <div className='col-md-12 p-3'>
            <form>
                <div class="form-row">
                    <div class="form-group">
                        <label>name</label>
                        <input type="text" class="form-control" onChange={(e)=>setUser({ ...user, name: e.target.value })} name="name" placeholder="name" />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" class="form-control" onChange={(e)=>setUser({ ...user, email: e.target.value })} name="email" placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" class="form-control" onChange={(e)=>setUser({ ...user, password: e.target.value })} name="password" placeholder="Password" />
                    </div>
                </div>
                <button type="submit" onClick={submitHundler} class="btn btn-primary mt-1">Sign up</button>
            </form>
        </div>
    )
}

export default Register;