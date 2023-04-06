import React from 'react'
import './style.scss'
import cx from 'classnames'

type Props = {
  className?: string
}

export default function Good({ className }: Props) {
  return (
    <div className='good'>
      <div className='good__img'>
        <button className={cx('good__favoritesBtn', className)}></button>
      </div>
      <h2 className='good__title'>Title</h2>
      <h3 className='good__subtitle'>Subtitle</h3>
      <p className='good__price'><span>&#36;</span>Price</p>
      <button className='good__addBtn'>Add to Cart</button>
    </div>
  )
}