import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './style.scss';
import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { selectTheme } from '../../App/reducers/switchTheme';
import { useLoginMutation } from '../../App/api/authApi';
// import { userEmailSlice } from '../../App/reducers/userEmailSlice';

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();
  const themeValue = useAppSelector(selectTheme);

  const defaultValue = {
    email: '',
    password: ''
  };
  const [loginData, setLoginData] = useState(defaultValue);

  const [login] = useLoginMutation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(loginData);
    return navigate('/');
  };

  return (
    <div className={`login login_${themeValue}`}>
      <div className={'login__pageWrapper'}>
        <header className='login__header'>Login</header>
        <main>
          <form className='login__form' onSubmit={handleSubmit} >
            <label>
              Email Address<br />
              <input
                type="text"
                name="login"
                value={loginData.email}
                onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
            </label>

            <label>
              Password<br />
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
            </label>

            <button type='submit'>Login</button>
          </form>
        </main>
      </div>
    </div>
  )
}