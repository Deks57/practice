'use client'

import { MobileMenu } from '@/components/MobileMenu/MobileMenu'
import { SocialIcon } from '@/components/SocialIcon/SocialIcon'
import { BurgerButton } from '@/components/ui/BurgerButton/BurgerButton'
import { navMenu } from '@/config/navMenu.data'
import { SOCIAL_ICONS } from '@/constants/socialIcons'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from './header.module.scss'

export function Header() {
	const [isScrolled, setIsScrolled] = useState(false)
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 40)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const isDark = isScrolled || isMobileMenuOpen

	return (
		<>
			<header className={`${styles.header} ${isDark ? styles.scrolled : ''}`}>
				<div className={styles.inner}>
					<Link
						href='/'
						className={styles.logo}>
						<Image
							src='/logo.svg'
							alt='logo'
							width={170}
							height={30}
						/>
					</Link>

					<nav className={styles.headerMenu}>
						{navMenu.map((item, index) => (
							<Link
								key={index}
								href={item.href}
								className={styles.headerMenuItem}>
								{item.label}
							</Link>
						))}
					</nav>

					<div className={styles.socials}>
						<div className={styles.desktopSocials}>
							<SocialIcon
								href='/'
								gradientId='tg'
								{...SOCIAL_ICONS.telegram}
								isDark={isDark}
							/>
							<SocialIcon
								href='/'
								gradientId='ok'
								{...SOCIAL_ICONS.ok}
								isDark={isDark}
							/>
							<SocialIcon
								href='/'
								gradientId='vk'
								{...SOCIAL_ICONS.vk}
								isDark={isDark}
							/>
						</div>

						<div className={styles.mobileSocials}>
							<SocialIcon
								href='/'
								gradientId='mobile-tg'
								{...SOCIAL_ICONS.telegram}
								isDark={isDark}
							/>
						</div>
					</div>
				</div>
			</header>

			<div className={styles.burgerWrapper}>
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
