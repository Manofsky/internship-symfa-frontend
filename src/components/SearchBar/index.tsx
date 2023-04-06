import React from 'react'
import cx from 'classnames'

type Props = {
  className?: string
}

export default function SearchBar({ className }: Props) {
  return (
    <div className={cx(className)}>SearchBar</div>
  )
}