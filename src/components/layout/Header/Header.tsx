'use client'

import { OkIcon } from '@/components/icons/OkIcon'
import { TelegramIcon } from '@/components/icons/TelegramIcon'
import { VkIcon } from '@/components/icons/VkIcon'
import { SocialIcon } from '@/components/SocialIcon/SocialIcon'
import { BurgerButton } from '@/components/ui/BurgerButton/BurgerButton'
import { navMenu } from '@/shared/config/navMenu.data'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { MobileMenu } from '../MobileMenu/MobileMenu'
import styles from './header.module.scss'

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const SCROLL_THRESHOLD = 40

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const isDark = isScrolled || isMobileMenuOpen

	return (
		<>
			<header
				className={clsx(styles.header, {
					[styles['header--scrolled']]: isDark
				})}>
				<div className='container'>
					<div className={styles.header__inner}>
						<Link
							href='/'
							className={styles.header__logo}>
							<Image
								src='/logo.svg'
								alt='logo'
								width={170}
								height={30}
							/>
						</Link>

						<nav className={styles.header__menu}>
							{navMenu.map((item, index) => (
								<Link
									key={index}
									href={item.href}
									className={styles['header__menu-item']}>
									{item.label}
								</Link>
							))}
						</nav>

						<div className={styles.header__socials}>
							<div className={styles['header__desktop-socials']}>
								<SocialIcon
									href='/'
									gradientId='tg'
									Icon={TelegramIcon}
									isDark={isDark}
								/>
								<SocialIcon
									href='/'
									gradientId='ok'
									Icon={OkIcon}
									isDark={isDark}
								/>
								<SocialIcon
									href='/'
									gradientId='vk'
									Icon={VkIcon}
									isDark={isDark}
								/>
							</div>

							<div className={styles['header__mobile-socials']}>
								<SocialIcon
									href='/'
									gradientId='mobile-tg'
									Icon={TelegramIcon}
									isDark={isDark}
								/>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className={styles['burger-wrapper']}>
				<BurgerButton
					isOpen={isMobileMenuOpen}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
					color={isDark ? 'light' : 'dark'}
				/>
			</div>

			<MobileMenu
				isOpen={isMobileMenuOpen}
				onClose={() => setIsMobileMenuOpen(false)}
			/>
		</>
	)
}
