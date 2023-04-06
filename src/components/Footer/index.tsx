import React from 'react';
import './style.scss';
import cx from 'classnames';
import ic_shopping_bag from '../../assets/images/icons/ic_shopping_bag.svg';

type Props = {
  className?: string,
}

export default function Footer({ className }: Props) {
  return (
    <footer className={cx('footer', className)}>
      <div className='footer__buttonWrapper'>
        <button className='footer__buttonToCart'>
          <img src={ic_shopping_bag} alt="icon" />
        </button>
      </div>
      <div className='footer__navBar footer__navBar_left'>
        <button className='footer__navBtn footer__navBtn_homeIcon footer__navBtn_active'></button>
        <button className='footer__navBtn footer__navBtn_bookIcon'></button>
      </div>
      <div className='footer__navBar footer__navBar_right'>
        <button className='footer__navBtn  footer__navBtn_bellIcon'></button>
        <button className='footer__navBtn  footer__navBtn_profileIcon'></button>
      </div>
    </footer>
  )
}