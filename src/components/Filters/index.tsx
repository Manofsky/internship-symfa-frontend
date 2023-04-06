import React from 'react'
import cx from 'classnames'

type Props = {
  className?: string
}

export default function Filters({ className }: Props) {
  return (
    <div className={cx(className)}>Filters</div>
  )
}