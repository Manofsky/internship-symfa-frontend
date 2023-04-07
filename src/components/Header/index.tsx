import React from 'react';
import './style.scss';
import cx from 'classnames';
import { useAppDispatch, useAppSelector } from '../../App/hooks';
import { changeTheme, selectTheme } from '../../App/reducers/switchTheme';

type Props = {
  className?: string,
  children?: React.ReactNode
}

export default function Header({ className, children }: Props) {
  const themeValue = useAppSelector(selectTheme);
  const dispatch = useAppDispatch();

  function switchTheme(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    dispatch(changeTheme());
  };

  return (
    <header className={cx('header', `header_${themeValue}`, className)}>
      <h1 className={'header__title'}>{children}</h1>
      <button type='button' className={'header__avatar'} onClick={switchTheme}></button>
    </header>
  )
}