import React from 'react';
import './style.scss';
import cx from 'classnames';

type Props = {
  className?: string,
  children?: React.ReactNode
}

export default function Header({ className, children }: Props) {
  return (
    <header className={cx('header', className)}>
      <h1 className='header__title header__title_light'>{children}</h1>
      <div className='header__avatar'></div>
    </header>
  )
}