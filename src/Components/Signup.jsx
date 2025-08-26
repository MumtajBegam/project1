import React,{useState} from 'react';
import { Button,TextField,Radio,RadioGroup,FormControlLabel,FormControl,FormLabel } from '@mui/material';
import { CircleQuestionMark} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Signup=()=>{
    const days = Array.from({ length: 31 }, (_, i) => i + 1);
    const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const years = Array.from({ length: 2025 - 1905 + 1 }, (_, i) => 2025 - i);
    const navigate=useNavigate();
    const[name,setName]=useState({
        username:"",
        surname:"",
        dob_date:"",
        dob_month:"",
        dob_year:"",
        gender:"",
        number_or_email:"",
        password:""
    });
    const handleClick =()=>{
        console.log("Login data",name)
    }
    const handleChange =(e)=>{  
        const {name:fieldName,value}=e.target
        if(fieldName==="gender"){
            setName(prevData=>({...prevData,gender:value}))
        }
        else{
            setName((prevData)=>({...prevData,[fieldName]:value}))
        }
    }

    //  --------------- Navigate --------------------- 
       const handleNavigate=()=>{
        console.log("data");
        
          navigate('/login')
       }

return(
    <div className="outline">
        <div className="logo">Click & Cart</div>
        <div className='signup-box'>
            <h2>Create a New Account!</h2>
            <p className='subtitle'>It's quick and easy.</p>
            <div className="line"></div>
            <div className='name'>
                <TextField label="username" name="username" type="text" variant="outlined"  size="small" fullWidth  onChange={(e)=>handleChange(e)}/>
                <TextField label="surname" name="surname" type="text" variant="outlined" size="small" fullWidth onChange={(e)=>handleChange(e)}/>
            </div>
            <label className='label'>Date of birth <CircleQuestionMark className="icon"/></label>
            <div className='name'>
                <select name="dob_date" onChange={(e)=>handleChange(e)}>{days.map(day => <option key={day}>{day}</option>)}</select>
                <select name="dob_month" onChange={(e)=>handleChange(e)}>{months.map((m, i) => <option key={i}>{m}</option>)}</select>
                <select name="dob_year" onChange={(e)=>handleChange(e)}>{years.map(y => <option key={y}>{y}</option>)}</select>
            </div>
            <FormControl fullWidth>
                <FormLabel>Gender <CircleQuestionMark className="icon"/></FormLabel>
                    <RadioGroup className="radio-group" row name="gender">
                    <FormControlLabel value="female" label="Female" control={<Radio />} className="radio-box"/>
                    <FormControlLabel value="male" label="Male" control={<Radio />} className="radio-box"/>
                    <FormControlLabel value="other" label="Other" control={<Radio />} className="radio-box"/>
                </RadioGroup>
            </FormControl>
            <div className='name'>
            <TextField label="Mobile number or Email address" name="number_or_email" type="text" variant="outlined" size="small" fullWidth onChange={(e)=>handleChange(e)}/></div>
            <TextField label="Password" name="password" type="password" variant="outlined" size="small" fullWidth onChange={handleChange}/>
            <p className='info'>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
            <p className='info' style={{marginBottom:'20px'}}>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS notifications from us and can opt out at any time.</p>
            <Button variant='contained' className='signup-btn' onClick={handleClick} >sign Up</Button>  
            <Button variant='text'className='login-btn'onClick={handleNavigate}>Already have an account?</Button>
        </div>
    </div>
)   
}
export default Signup