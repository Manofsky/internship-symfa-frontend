import React from 'react';
import './style.scss';
import cx from 'classnames';
import ic_shopping_bag from '../../assets/images/icons/ic_shopping_bag.svg';
import { useAppSelector } from '../../App/hooks';
import { selectTheme } from '../../App/reducers/switchTheme';
import { Link } from 'react-router-dom';

type Props = {
  className?: string,
  page: string
}

export default function Footer({ className, page }: Props) {
  const themeValue = useAppSelector(selectTheme);
  const active = 'footer__navBtn_active';

  return (
    <footer className={cx('footer', `footer_${themeValue}`, className)}>
      <div className={'footer__buttonWrapper'}>
        <button className={'footer__buttonToCart'}>
          <img src={ic_shopping_bag} alt="icon" />
        </button>
      </div>
      <nav className={'footer__navBar footer__navBar_left'}>
        <Link to='/' className={`footer__navBtn ${(page === '/') ? active : ''} footer__navBtn_homeIcon`}></Link>
        <Link to='/favourites' className={`footer__navBtn ${(page === '/favourites') ? active : ''} footer__navBtn_bookIcon`}></Link>
      </nav>
      <nav className={'footer__navBar footer__navBar_right'}>
        <Link to='/notification' className={`footer__navBtn ${(page === '/notification') ? active : ''} footer__navBtn_bellIcon`}></Link>
        <Link to='/profile' className={`footer__navBtn ${(page === '/profile') ? active : ''} footer__navBtn_profileIcon`}></Link>
      </nav>
    </footer>
  )
}