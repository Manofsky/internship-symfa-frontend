import React, { useState } from 'react'
import './style.scss'
import { useAppSelector } from '../../App/hooks';
import { selectTheme } from '../../App/reducers/switchTheme';
import { useLoginMutation } from '../../App/reducers/authApi';

export default function Login() {
  const themeValue = useAppSelector(selectTheme);

  const defaultValue = {
    email: '',
    password: ''
  };

  const [data, setData] = useState(defaultValue);

  const [login] = useLoginMutation();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    login(data).then(() => {
      setData(defaultValue)
    });
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
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })} />
            </label>

            <label>
              Password<br />
              <input
                type="password"
                name="password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })} />
            </label>

            <button type='submit'>Login</button>
          </form>
        </main>
      </div>
    </div>
  )
}