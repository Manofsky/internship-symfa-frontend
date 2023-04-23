import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';
import { useAppSelector } from '../../App/hooks';
import { selectTheme } from '../../App/reducers/switchTheme';
import { useSignupMutation } from '../../App/api/authApi';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Signup() {
  const navigate = useNavigate();
  const themeValue = useAppSelector(selectTheme);

  const defaultValue = {
    email: '',
    username: '',
    password: ''
  };

  const [signupData, setSignupData] = useState(defaultValue);
  const [visibility, setVisibility] = useState(false);
  const [password, setPassword] = useState('');

  function validatePassword(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value !== password) {
      e.target.setCustomValidity("Passwords Don't Match");
    } else {
      e.target.setCustomValidity('');
    }
  }

  const [signup, { isSuccess }] = useSignupMutation();

  useEffect(() => {
    if (isSuccess) return navigate('../login');
  })

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signup(signupData);
  };

  function togglePassInput(e: any) {
    setVisibility(!visibility);
  }

  return (
    <form className={`signupForm signupForm_${themeValue}`} onSubmit={handleSubmit} >
      <div className='signupForm__inputBox'>
        <label className='signupForm__label'>
          Username<br />
          <input
            className='signupForm__input'
            placeholder='type your username'
            type="text"
            name="username"
            required
            value={signupData.username}
            onChange={(e) => setSignupData({ ...signupData, username: e.target.value })} />
        </label>
      </div>

      <div className='signupForm__inputBox'>
        <label className='signupForm__label'>
          Email Address<br />
          <input
            className='signupForm__input'
            placeholder='type your email'
            type="text"
            name="login"
            required
            value={signupData.email}
            onChange={(e) => setSignupData({ ...signupData, email: e.target.value })} />
        </label>
      </div>

      <div className='signupForm__inputBox'>
        <label className='signupForm__label'>
          Password<br />
          <input
            className='signupForm__input'
            placeholder='type your password'
            type={visibility ? "text" : "password"}
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <button type="button" onClick={togglePassInput} className='signupForm__toggle'>
            {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </label>
      </div>

      <div className='signupForm__inputBox'>
        <label className='signupForm__label'>
          Confirm Password<br />
          <input
            className='signupForm__input'
            placeholder='confirm your password'
            type={visibility ? "text" : "password"}
            name="password"
            required
            value={signupData.password}
            onChange={(e) => {
              setSignupData({ ...signupData, password: e.target.value });
              validatePassword(e);
            }} />
          <button type="button" onClick={togglePassInput} className='signupForm__toggle'>
            {visibility ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </button>
        </label>
      </div>

      <div className='signupForm__buttonBox'>
        <button type='submit' className='signupForm__button'>Signup</button>
      </div>

    </form>
  )
}