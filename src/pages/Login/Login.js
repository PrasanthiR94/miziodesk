import './Login.css'
import { useState } from 'react';
import AssistantIcon from '@mui/icons-material/Assistant';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import {  toast } from 'react-toastify';
import { useMizi } from '../../MiziContext';
import logo from '../../assets/images/miz-logo-2.png'



function Login(){
      const {userName,setUsername,password,setPassword} = useMizi()

      const [showPassword, setShowPassword] =  useState(false);
        const handleMouseDownPassword = ( e) => {
    e.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseUpPassword = (e) => {
    e.preventDefault();
  };
  const navigate = useNavigate()

const loginErr = () => toast("Please enter username and password !");

  function LoginHandle() {
    if (userName && password) {
      console.log(userName , password);
      
      Cookies.set('Token', 'wertyuiertui', { expires: 7 });
      navigate('/home')
    } else {
      loginErr();
    }
  }

    return (
       <div className='Login_wrap'>
        <div className='login_left'>
            <div className='login_box'>
                <h3>Log In</h3>
                <TextField id="standard-basic" label="User name" variant="standard" 
                 onChange={(e)=>setUsername(e.target.value)}
                  />
                <FormControl   variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? 'hide the password' : 'display the password'
                  }
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            onChange={(e)=>setPassword(e.target.value)}
          />
        </FormControl>
      <div className='login_button_wrap'>
        <Button onClick={LoginHandle}>Login</Button> 
      </div>
        
            </div>
        </div>
        <div className='login_right'>
          <img src={logo} className='login_logo'/>
            <h2>Welcome to MizioDesk !</h2>
            <div className='login_icon'>
                <AssistantIcon/>
            </div>
        </div>
       </div>
    )
}

export default Login