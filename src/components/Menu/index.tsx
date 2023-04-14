import React from 'react'
import './style.scss'
import cx from 'classnames'
import Product from '../Product'
import { IProduct } from '../../models/interfaces'

type Props = {
  className?: string
  goods: IProduct[],
}

export default function Menu({ className, goods }: Props) {
  return (
    <div className={cx('menu', className)}>
      {goods.map((product, index) => <Product product={product} key={`good-${index}`} />)}
    </div>
  )
}