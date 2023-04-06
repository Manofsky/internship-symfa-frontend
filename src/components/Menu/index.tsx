import React from 'react'
import './style.scss'
import cx from 'classnames'
import Good from '../Good'

type Props = {
  className?: string
  goods: number[]
}

export default function Menu({ className, goods }: Props) {
  return (
    <div className={cx('menu', className)}>
      {goods.map((content, index) => <Good key={`good-${index}`} />)}
    </div>
  )
}