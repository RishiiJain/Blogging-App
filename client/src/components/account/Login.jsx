import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, TextField, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { API } from '../../services/api';
import { DataContext } from '../../context/DataProvider';


const Component = styled(Box)`
  width: 400px;
  margin: auto;
  margin-top: 64px;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.5);
`;
const Image = styled('img')({ 
  width: 100,
  margin: 'auto',
  display: 'flex',
  padding: '50px 0 0',
});
const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div, & > button {
    margin: 20px;
  }
`;
const LoginButton = styled(Button)`
  background: #FB641B;
  color: #fff;
  height: 48px;
  border-radius: 5px;
`;
const SignupButton = styled(Button)`
  background: #fff;
  color: #2874f0;
  height: 48px;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Error = styled(Typography)`
  font-size: 12px;   
  color: #f44336;    
  margin-top: 8px;  
  font-weight: 500; 
  text-align: center;  
  background-color: transparent; 
  padding: 0;       
  height: 20px;     
  overflow: hidden;  
  white-space: nowrap; 
  text-overflow: ellipsis; 
`;


const Text = styled(Typography)`
  color: #878787;
`;

const loginInitialValues = {
  username: '',
  password: ''
}

const signupInitialValues = {
  name: '',
  username: '',
  password: '',
};

const Login = ({ isUserAuthenticated }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [signup, setSignup] = useState(signupInitialValues);
  const [error, setError] = useState('');
  const [account, toggleAccount] = useState('login');
  
  const navigate = useNavigate();
  const { setAccount } = useContext(DataContext);

  const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';
  
  useEffect(() => {
    setError(false);
  }, [login])  
  
  const onValueChange = (e) => {
    setLogin({...login, [e.target.name]: e.target.value})
  };

  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }; 
  
  const loginUser = async () => {
    let response = await API.userLogin(login);
    console.log(response);
      if (response.isSuccess) {
        setError(''); // Clear any previous error messages
        console.log('Login Successful:', response);
        sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
        sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
        setAccount({ name: response.data.name, username: response.data.username });
        isUserAuthenticated(true);
        setLogin(loginInitialValues);
        navigate('/');
      } else {
        setError('Invalid credentials. Please try again.');
      }
    } 
    
    const signupUser = async () => {
      let response = await API.userSignup(signup);
      // Check if the response is successful
      if (response.isSuccess) {
        console.log(response);
        setError(''); 
        setSignup(signupInitialValues); 
        toggleAccount('login'); 
      } else {
        // In case of a failure response
        setError('Signup failed. Please try again.');
      }
    }

      const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
      };
          
  return (
    <Component>
      <Box>
        <Image src={imageURL} alt='blog' />
        {
          account === 'login' ? 
          <Wrapper>
            <TextField name='username' value={login.username } variant='standard' onChange={(e) => onValueChange(e)} label='Enter Username' />
            <TextField name='password' value={login.password } variant='standard' onChange={(e) => onValueChange(e)} label='Enter Password' type='password' />
            { error && <Error>{ error }</Error> }
            <LoginButton variant='contained' onClick={() => loginUser()}>Login</LoginButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <SignupButton onClick={toggleSignup}>Create an account?</SignupButton>
          </Wrapper>
         : 
          <Wrapper>
            <TextField name='name' value={signup.name } variant='standard' onChange={onInputChange} label='Enter Name' />
            <TextField name='username' value={signup.username } variant='standard' onChange={onInputChange} label='Enter Username' />
            <TextField name='password' value={signup.password } variant='standard' onChange={onInputChange} label='Enter Password' type='password' />
            { error && <Error>{ error }</Error> }
            <SignupButton onClick={() => signupUser()}>SignUp</SignupButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <LoginButton variant='contained' onClick={() => toggleSignup()}>Already have an account?</LoginButton>
          </Wrapper>
        }
      </Box>
    </Component>
  );
};

export default Login;
