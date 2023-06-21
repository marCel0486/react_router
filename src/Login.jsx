import React from "react";
import { useNavigate } from "react-router-dom";
useNavigate

const Login = () =>{

    const navigate = useNavigate() 

    

    const handleClick = () =>{
        console.log('fazer login')
        navigate('/')
    }
    return(
        <div>

        
            <button onClick={handleClick}>Login</button>
        </div>
    )
}

export default Login