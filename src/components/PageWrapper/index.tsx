import React from 'react'
import './style.scss'
import cx from 'classnames'
import { useAppSelector } from '../../App/hooks'
import { selectTheme } from '../../App/reducers/switchTheme'

type Props = {
  children: React.ReactNode,
  className?: string
}

export default function PageWrapper({ children, className }: Props) {
  const themeValue = useAppSelector(selectTheme);

  return (
    <div className={`themeWrapper themeWrapper_${themeValue}`}>
      <div className={cx('pageWrapper', className)}>{children}</div>
    </div>
  )
}