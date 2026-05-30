'use client'

import { Badge } from '@/components/ui/Badge/Badge'
import { Button } from '@/components/ui/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import styles from './hero.module.scss'

export function Hero() {
	return (
		<section className={styles.hero}>
			<div className='container'>
				<div className={styles.hero__inner}>
					<div className={styles.hero__content}>
						<h1 className={styles.hero__title}>
							Разрабатываем
							<br />
							сложные ITпродукты:
							<br />
							е-ком, веб-сервисы, ИИ
						</h1>

						<div className={styles.hero__wrapper}>
							<div className={styles.hero__actions}>
								<Button
									className={styles.hero__button}
									variant='dark'
									text='Обсудить проект'
								/>

								<div className={styles.hero__socials}>
									<Link
										href='#'
										className={styles['hero__social-link']}>
										<Image
											src='/icons/telegram.svg'
											alt='Telegram'
											width={24}
											height={24}
										/>
									</Link>

									<Link
										href='#'
										className={styles['hero__social-link']}>
										<Image
											src='/icons/max.svg'
											alt='OK'
											width={24}
											height={24}
										/>
									</Link>

									<Link
										href='#'
										className={styles['hero__social-link']}>
										<Image
											src='/icons/vk.svg'
											alt='VK'
											width={24}
											height={24}
										/>
									</Link>
								</div>
							</div>

							<Badge
								number='23'
								text='Разработка решений на базе ИИ'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
