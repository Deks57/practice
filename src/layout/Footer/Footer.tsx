'use client'

import Image from 'next/image'
import Link from 'next/link'
import { navMenu } from '../../config/navMenu.data'
import styles from './footer.module.scss'

export function Footer() {
	return (
		<footer className={styles.footer}>
			<div className='container'>
				<div className={styles.top}>
					<div className={styles.logoCol}>
						<Link href='/'>
							<Image
								src='/logo.svg'
								alt='Киберия'
								width={640}
								height={100}
								className={styles.logo}
							/>
						</Link>
					</div>

					<div className={styles.mobileNav}>
						<nav className={styles.navCol}>
							<ul className={styles.nav}>
								{navMenu.map((item) => (
									<li key={item.href}>
										<Link
											href={item.href}
											className={styles.navLink}>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
						</nav>

						<div className={styles.contactsCol}>
							<a
								href='tel:+79609591866'
								className={styles.phone}>
								+7 960 959 18 66
							</a>
							<a
								href='mailto:hello@cyberia.studio'
								className={styles.email}>
								hello@cyberia.studio
							</a>
							<p className={styles.address}>г.Барнаул, ул.Ярных, 35, оф.10</p>

							{/* <div className={styles.socials}>
								{socialLinks.map((social, index) => (
									<Link
										key={index}
										href={social.href}
										target='_blank'
										rel='noopener noreferrer'
										className={styles.socialLink}
										aria-label={social.name}>
										<Image
											src={social.iconSrc}
											alt={social.name}
											width={32}
											height={32}
										/>
									</Link>
								))}
							</div> */}
						</div>
					</div>
				</div>

				<div className={styles.bottom}>
					<p className={styles.copyright}>
						© 2026 ООО «Киберия», номер в реестре
						<br />
						аккредитованных IT-компаний: 53278
					</p>
					<Link
						href='/'
						className={styles.bottomLink}>
						Реквизиты компании
					</Link>
					<Link
						href='/'
						className={`${styles.bottomLink} ${styles.bottomLinkRight}`}>
						Политика конфиденциальности
					</Link>
				</div>
			</div>
		</footer>
	)
}
