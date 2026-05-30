'use client'

import { SocialIcon } from '@/components/SocialIcon/SocialIcon'
import { OkIcon } from '@/components/icons/OkIcon'
import { TelegramIcon } from '@/components/icons/TelegramIcon'
import { VkIcon } from '@/components/icons/VkIcon'
import { navMenu } from '@/shared/config/navMenu.data'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.scss'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.footer__top}>
					<div className={styles['footer__logo-col']}>
						<Link href='/'>
							<Image
								src='/logo.svg'
								alt='Киберия'
								width={540}
								height={100}
								className={styles.footer__logo}
							/>
						</Link>
					</div>

					<div className={styles['footer__mobile-nav']}>
						<div className={styles['footer__nav-col']}>
							<ul className={styles.footer__nav}>
								{navMenu.map((item) => (
									<li key={item.href}>
										<Link
											href={item.href}
											className={styles['footer__nav-link']}>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</div>

						<div className={styles['footer__contacts-col']}>
							<a
								href='tel:+79609591866'
								className={styles.footer__phone}>
								+7 960 959 18 66
							</a>
							<a
								href='mailto:hello@cyberia.studio'
								className={styles.footer__email}>
								hello@cyberia.studio
							</a>
							<p className={styles.footer__address}>
								г.Барнаул, ул.Ярных, 35, оф.10
							</p>
							<div className={styles.footer__socials}>
								<SocialIcon
									href='/'
									gradientId='footer-tg'
									Icon={TelegramIcon}
								/>
								<SocialIcon
									href='/'
									gradientId='footer-ok'
									Icon={OkIcon}
								/>
								<SocialIcon
									href='/'
									gradientId='footer-vk'
									Icon={VkIcon}
								/>
							</div>
						</div>
					</div>
				</div>

				<div className={styles.footer__bottom}>
					<p className={styles.footer__copyright}>
						© 2026 ООО «Киберия», номер в реестре
						<br />
						аккредитованных IT-компаний: 53278
					</p>
					<Link
						href='/'
						className={styles['footer__bottom-link']}>
						Реквизиты компании
					</Link>
					<Link
						href='/'
						className={styles['footer__bottom-link']}>
						Политика конфиденциальности
					</Link>
				</div>
			</div>
		</footer>
	)
}
