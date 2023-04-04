import React from 'react';
import './style.scss';
import cx from 'classnames';

type Props = {
  className?: string,
}

export default function Footer({ className }: Props) {
  return (
    <footer className={cx('footer', className)}>
      <div className='footer__button'></div>
      <div className='footer__navLeft'></div>
      <div className='footer__navRight'></div>
    </footer>
  )
}