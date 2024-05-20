import Link from 'next/link'
import React from 'react'
import styles from './navbar.module.scss'
import { NavItem } from '@/types/Navbar'

type Props = {
  navItems: NavItem[]
}

export default function Navbar({ navItems }: Props) {
  return (
    <nav className={`${styles['navbar']} ${styles['navbar-main']}`}>
      <ul className={styles['navbar-menu']}>
        {navItems.map((item) => (
          <li key={item.title} className={`${styles['navbar-item']}`}>
            <Link href={'#'}>
              {item.icon}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
