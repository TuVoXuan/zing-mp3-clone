'use client'
import React from 'react'
import styles from './sidebar.module.scss'
import Icons from '@/utils/icons'
import Link from 'next/link'
import Image from 'next/image'
import Navbar from '../navbar'
import { NavItem } from '@/types/Navbar'
import LibraryIcon from '../icons/LibraryIcon'
import ExploreIcon from '../icons/ExploreIcon'
import ZingChartIcon from '../icons/ZingChartIcon'
import RadioMusicIcon from '../icons/RadioMusicIcon'
import BXHIcon from '../icons/BXHIcon'
import CategoryIcon from '../icons/CategoryIcon'
import StarIcon from '../icons/StarIcon'
import LoginNav from '../navbar/LoginNav/LoginNav'
import PlusIcon from '../icons/PlusIcon'
import Button from '../button'

const navItems: NavItem[] = [
  {
    icon: <LibraryIcon />,
    title: 'Thư Viện'
  },
  {
    icon: <ExploreIcon />,
    title: 'Khám Phá'
  },
  {
    icon: <ZingChartIcon />,
    title: '#zingchart'
  },
  {
    icon: <RadioMusicIcon />,
    title: 'Radio'
  }
]

const navScrollItems: NavItem[] = [
  {
    icon: <BXHIcon />,
    title: 'BXH Nhạc Mới'
  },
  {
    icon: <CategoryIcon />,
    title: 'Chủ Đề & Thể Loại'
  },
  {
    icon: <StarIcon />,
    title: 'Top 100'
  }
]

export default function Sidebar() {

  return (
    <div className={styles['sidebar_wrapper']}>
      <nav className={styles['navbar']}>
        <div className={styles['navbar-brand']}>
          <div className={styles['logo']}>
            <Image src={Icons.LogoDark} width={120} height={40} alt='dark-logo' />
          </div>
        </div>
      </nav>
      <Navbar navItems={navItems} />
      <div className={styles['sidebar-divider']}></div>

      <div style={{ position: 'relative', height: '100%', width: '100%', overflow: 'hidden' }}>
        <div className={styles['sidebar-scrollbar']}>
          <Navbar navItems={navScrollItems} />
          <LoginNav />
        </div>
      </div>

      <div className={styles['add-playlist-sidebar']}>
        <Button className={styles['add-playlist-btn']} icon={<PlusIcon />} text='Tạp playlist mới' />
      </div>
    </div>
  )
}
