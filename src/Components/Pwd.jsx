import React,{useState} from "react";
import { Button,TextField } from "@mui/material";

const Pwd=()=>{
    const[name,setName]=useState({
        number_or_email:""
    })
    const handleClick=()=>{
        console.log("Data",name)
    }
    const handleChange=(e)=>{
        const {name,value}=e.target
        setName((prevData)=>({...prevData,[name]:value}))
    }
    return(
        <div className="wrap">
        <div className="outline1">
            <h2>Find Your Account</h2>
            <p>Enter your mobile number or email address.</p>
            <div className="textfield">
            <TextField label="Email address or mobile number" name="number_or_email" type="text" variant="outlined"  size="small" fullWidth  onChange={(e)=>handleChange(e)}/>
            </div>
            <div className="btn">
            <Button className="btn2" variant="contained" onClick={handleClick}>Continue</Button>
            </div>
        </div>
        </div>
    )
}
export default Pwd