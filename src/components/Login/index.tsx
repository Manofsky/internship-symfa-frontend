import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import './style.scss';
import { useAppSelector } from '../../App/hooks';
import { selectTheme } from '../../App/reducers/switchTheme';
import { useLoginMutation } from '../../App/api/authApi';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const themeValue = useAppSelector(selectTheme);

  const defaultValue = {
    email: '',
    password: ''
  };
  const [loginData, setLoginData] = useState(defaultValue);
  const [visibility, setVisibility] = useState(false);

  const [login, { isSuccess }] = useLoginMutation();

  const fromPage = location.state?.from?.pathname || '/';

  useEffect(() => {
    if (isSuccess) return navigate(fromPage);
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(loginData);
  };

  function togglePassInput(e: any) {
    e.preventDefault();
    setVisibility(!visibility);
  }

  return (
    <form className={`loginForm loginForm_${themeValue}`} onSubmit={handleSubmit} >
      <div className='loginForm__inputBox'>
        <label className='loginForm__label'>
          Email Address<br />
          <input
            className='loginForm__input'
            placeholder='type your email'
            type="text"
            name="login"
            required
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
        </label>
      </div>

      <div className='loginForm__inputBox'>
        <label className='loginForm__label'>
          Password<br />
          <input
            className='loginForm__input'
            placeholder='type your password'
            type={visibility ? "text" : "password"}
            name="password"
            required
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
          <button type="button" onClick={togglePassInput} className='loginForm__toggle'>
            {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </label>
      </div>

      <Link to='#!' className='loginForm__link'>Forgot Password?</Link>

      <div className='loginForm__buttonBox'>
        <button type='submit' className='loginForm__button'>Login</button>
      </div>

    </form>
  )
}