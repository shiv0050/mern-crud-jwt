import React, {useState} from "react";
import { login } from "../redux/userSlice";
import { useDispatch } from "react-redux";
const Login= props => {
    const initialUserState ={
        name:"",
        id:""
    }
    const dispatch = useDispatch();
    const [user,setUser] =useState(initialUserState)
    const handleInputChange = event => {
        const {name,value}=event.target;
        setUser({...user,[name]: value})
    }
    const handleLogin = () => {
      dispatch(login(user));
      props.history.push('/')
    }
    return (
        <div className="submit-form">
          <div>
            <div className="form-group">
              <label htmlFor="user">Username</label>
              <input
                type="text"
                className="form-control"
                id="name"
                required
                value={user.name}
                onChange={handleInputChange}
                name="name"
              />
            </div>
    
            <div className="form-group">
              <label htmlFor="id">ID</label>
              <input
                type="text"
                className="form-control"
                id="id"
                required
                value={user.id}
                onChange={handleInputChange}
                name="id"
              />
            </div>
    
            <button onClick={()=>handleLogin()} className="btn btn-success">
              Login
            </button>
          </div>
        </div>
      );
    };
    
    export default Login;
