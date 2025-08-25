import React,{useState} from "react";
import { Button,TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login=()=>{
    const navigate=useNavigate();
    const[name,setName]=useState({
        number_or_email:"",
        password:""
    })
    const handleClick=()=>{
        console.log("Login data",name)
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setName(prevdata=>({...prevdata,[name]:value}))
    }
    const handleSubmit=()=>{
        try{
            if(name.number_or_email==="abc@gmail.com" && name.password==="Admin@123"){
                navigate("/home")
            // } else {
            //     navigate('/')
            }
        }
        catch (err){
            err.message
        }
    }
    const handlePwd =() => {
        navigate("/pwd")
    }
    const handleHome=()=>{
        navigate("/signup")
    }
    return (
        <div className="wrap">
            <div className="content">
                <h3 className="fb">Log in to Click & Cart</h3>
                <div className="textfield">
                    <TextField label="Email address or mobile number" name="number_or_email" type="text" variant="outlined"  size="small" fullWidth  onChange={(e)=>handleChange(e)}/>
                    <TextField label="Password" name="password" type="password" variant="outlined"  size="small" fullWidth  onChange={(e)=>handleChange(e)}/>
                </div>
                    <Button className="btn1" variant="contained" onClick={handleSubmit}>Log in</Button>
                    <Button className="btn1" variant="text" onClick={handlePwd}>Forgotten password?</Button>
                    <Button className="btn1" variant="outlined" onClick={handleHome}>Create new account</Button>
            </div>
        </div>
    )
}
export default Login