'use client'

import { Badge } from '@/components/ui/Badge/Badge'
import { Button } from '@/components/ui/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import styles from './hero.module.scss'

interface Props {}

export function Hero({}: Props) {
	return (
		<section className={styles.hero}>
			<div className='container'>
				<div className={styles.inner}>
					<div className={styles.content}>
						<h1 className={styles.title}>
							Разрабатываем
							<br />
							сложные ITпродукты:
							<br />
							е-ком, веб-сервисы, ИИ
						</h1>

						<div className={styles.heroWrapper}>
							<div className={styles.actions}>
								<Button
									className={styles.heroButton}
									variant='dark'
									text='Обсудить проект'
								/>

								<div className={styles.socials}>
									<Link
										href='#'
										className={styles.socialLink}>
										<Image
											src='/icons/telegram.svg'
											alt='Telegram'
											width={24}
											height={24}
										/>
									</Link>

									<Link
										href='#'
										className={styles.socialLink}>
										<Image
											src='/icons/max.svg'
											alt='OK'
											width={24}
											height={24}
										/>
									</Link>

									<Link
										href='#'
										className={styles.socialLink}>
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
