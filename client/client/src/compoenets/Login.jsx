import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const submitHundler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8081/login', user).then((response => {
            console.log(response.data);
            console.log(response);
            if (response.data.Status === 'Success') {
                Cookies.set('access_token', response.headers['x-access-token'])
                navigate('/');
            } else {
                alert('error');
            }
        })).catch(error => console.log(error));
    }

    return (
        <div className='col-md-12 p-3'>
            <form>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label>Email</label>
                        <input type="email" class="form-control" name="email" onChange={(e) => setUser({ ...user, email: e.target.value })} placeholder="Email" />
                    </div>
                    <div class="form-group col-md-6">
                        <label>Password</label>
                        <input type="password" class="form-control" name="password" onChange={(e) => setUser({ ...user, password: e.target.value })} placeholder="Password" />
                    </div>
                </div>
                <button type="submit" onClick={submitHundler} class="btn btn-primary mt-1">Sign in</button>
            </form>
        </div>
    )
}

export default Login;