import React from 'react'
import styles from './button.module.scss'

type Props = {
  icon?: React.ReactNode,
  text?: string,
  isUppercase?: boolean,
  isOutlined?: boolean,
  isMedium?: boolean,
  className?: string
}

export default function Button(props: Props) {
  const { icon, text, isMedium, isOutlined, isUppercase, className } = props;
  return (
    <button className={`${styles['btn']} ${isMedium && styles['is-medium']} ${isOutlined && styles['is-outlined']} ${isUppercase && styles['is-upper']} ${className}`}>
      {icon}
      <span>{text}</span>
    </button>
  )
}
