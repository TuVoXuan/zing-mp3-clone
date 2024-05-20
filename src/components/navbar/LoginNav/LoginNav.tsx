import React from 'react'
import Button from '@/components/button'
import styles from './loginNav.module.scss'

export default function LoginNav() {
  return (
    <div className={styles['login-nav-container']}>
      <div className={styles['text']}>Đăng nhập để khám phá playlist dành riêng cho bạn</div>
      <Button
        className={styles['login-btn']}
        isOutlined
        isUppercase
        isMedium
        text='đăng nhập'
      />
    </div>
  )
}
