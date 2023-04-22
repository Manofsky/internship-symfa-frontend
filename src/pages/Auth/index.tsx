import React from 'react'
import './style.scss'
import cx from 'classnames'
import { useAppSelector } from '../../App/hooks'
import { selectTheme } from '../../App/reducers/switchTheme'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import shoppinBag from '../../assets/images/icons/shopping-bag.svg'

export default function Auth() {
  const themeValue = useAppSelector(selectTheme);
  const location = useLocation();
  const navigate = useNavigate()
  const activeLogin = location.pathname === '/auth/login' ? 'authHeader__linkWrap_active' : '';
  const activeSignup = location.pathname === '/auth/signup' ? 'authHeader__linkWrap_active' : '';

  const goToHome = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className={`auth auth_${themeValue}`}>
      <div className='auth__pageWrapper'>
        <header className='auth__header authHeader'>
          <button onClick={goToHome} className='authHeader__icon'>
            <img src={shoppinBag} alt="icon" />
          </button>
          <div className='authHeader__heading'>
            <h1 className='authHeader__title'>Corner Food</h1>
            <p className='authHeader__subtitle'>Delivery App </p>
          </div>
          <nav className='authHeader__nav'>
            <div className={cx('authHeader__linkWrap', activeLogin)}><Link to='login' className='authHeader__link'>Login</Link></div>
            <div className={cx('authHeader__linkWrap', activeSignup)}><Link to='signup' className='authHeader__link'>Signup</Link></div>
          </nav>
        </header>
        <Outlet />
      </div>
    </div>
  )
}