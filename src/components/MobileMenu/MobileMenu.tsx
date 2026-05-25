'use client'

import { navMenu } from '@/config/navMenu.data'
import { SOCIAL_ICONS } from '@/constants/socialIcons'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { SocialIcon } from '../SocialIcon/SocialIcon'
import styles from './mobileMenu.module.scss'

interface Props {
	isOpen: boolean
	onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: Props) {
	const pathname = usePathname()

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
		return () => {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	return (
		<div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
			<div>
				<Link
					href='/'
					className={styles.mobileLogo}
					onClick={onClose}>
					<Image
						src='/logo.svg'
						alt='logo'
						width={130}
						height={25}
					/>
				</Link>
			</div>

			<div className={styles.mobileContent}>
				<div className={styles.menuCard}>
					{navMenu.map((item, index) => (
						<Link
							key={index}
							href={item.href}
							className={`${styles.mobileMenuItem} ${pathname === item.href ? styles.active : ''}`}>
							{item.label}
						</Link>
					))}
				</div>

				<div className={styles.contactsCard}>
					<a
						href='tel:+79609591866'
						className={styles.contactItem}>
						+7 960 959 18 66
					</a>
					<a
						href='mailto:hello@cyberia.studio'
						className={styles.contactItem}>
						hello@cyberia.studio
					</a>

					<div className={styles.mobileSocials}>
						<SocialIcon
							href='/'
							gradientId='mobileMenu-tg'
							{...SOCIAL_ICONS.telegram}
							isDark={true}
						/>
						<SocialIcon
							href='/'
							gradientId='mobileMenu-ok'
							{...SOCIAL_ICONS.ok}
							isDark={true}
						/>
						<SocialIcon
							href='/'
							gradientId='mobileMenu-vk'
							{...SOCIAL_ICONS.vk}
							isDark={true}
						/>
					</div>
				</div>

				<Link
					href='#contact'
					className={styles.mobileCta}>
					Обсудить проект
				</Link>
			</div>
		</div>
	)
}
