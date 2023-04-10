import React from 'react'
import './style.scss'
import cx from 'classnames'
import Product from '../Product'

type Props = {
  className?: string
  goods: number[]
}

export default function Menu({ className, goods }: Props) {
  return (
    <div className={cx('menu', className)}>
      {goods.map((content, index) => <Product key={`good-${index}`} />)}
    </div>
  )
}