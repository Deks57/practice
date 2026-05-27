'use client'

import { SocialIcon } from '@/components/SocialIcon/SocialIcon'
import { OkIcon } from '@/components/icons/OkIcon'
import { TelegramIcon } from '@/components/icons/TelegramIcon'
import { VkIcon } from '@/components/icons/VkIcon'
import Image from 'next/image'
import styles from './banner.module.scss'

interface Props {}

export function Banner({}: Props) {
	return (
		<section className={styles.section}>
			<div className='container'>
				<div className={styles.content}>
					<div className={styles.image}>
						<Image
							src='/banner-img.png'
							alt='Команда'
							fill
							priority
						/>
					</div>

					<div className={styles.text}>
						<h2>Обсудим ваш проект?</h2>
						<p>
							Сформируем четкий план реализации проекта
							<br />в кратчайшие сроки и в рамках вашего бюджета
						</p>

						<div className={styles.actions}>
							<p>Обсудить проект</p>
							<div className={styles.bannerSocials}>
								<SocialIcon
									href='/'
									gradientId='banner-tg'
									Icon={TelegramIcon}
									isDark={true}
								/>
								<SocialIcon
									href='/'
									gradientId='banner-ok'
									Icon={OkIcon}
									isDark={true}
								/>
								<SocialIcon
									href='/'
									gradientId='banner-vk'
									Icon={VkIcon}
									isDark={true}
								/>
							</div>
							<svg
								width='111'
								className={styles.arrowWhite}
								height='36'
								viewBox='0 0 111 36'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M2.14074 1.17879C2.23965 0.635434 1.87935 0.114774 1.336 0.015863C0.792642 -0.0830479 0.271982 0.277245 0.173071 0.820601L1.1569 0.999695L2.14074 1.17879ZM24.4714 21.6137L24.7955 22.5597L24.4714 21.6137ZM20.742 15.7535L21.719 15.9668L20.742 15.7535ZM107.516 9.13032C107.35 8.60351 106.788 8.31085 106.261 8.47665L97.6766 11.1785C97.1498 11.3443 96.8571 11.9058 97.023 12.4326C97.1887 12.9594 97.7502 13.2521 98.277 13.0863L105.908 10.6846L108.31 18.3156C108.475 18.8424 109.037 19.1351 109.564 18.9693C110.091 18.8035 110.383 18.242 110.217 17.7152L107.516 9.13032ZM1.1569 0.999695L0.173071 0.820601C-0.283459 3.3285 0.19025 6.23064 1.30362 9.05462C2.42151 11.8901 4.21198 14.7197 6.48633 17.1062C11.0221 21.8655 17.6526 25.0073 24.7955 22.5597L24.4714 21.6137L24.1472 20.6677C17.9975 22.775 12.1453 20.1451 7.93414 15.7264C5.83503 13.5238 4.18604 10.9128 3.16423 8.32106C2.1379 5.71784 1.77167 3.2062 2.14074 1.17879L1.1569 0.999695ZM24.4714 21.6137L24.7955 22.5597C28.611 21.2522 30.7443 19.4367 31.415 17.3755C32.1028 15.2617 31.1319 13.3 29.6838 12.0491C28.2431 10.8046 26.1501 10.0861 24.1761 10.5064C22.1086 10.9466 20.4115 12.5796 19.765 15.5401L20.742 15.7535L21.719 15.9668C22.2296 13.6286 23.4291 12.7103 24.5926 12.4625C25.8497 12.1949 27.3221 12.6519 28.3764 13.5626C29.4232 14.4668 29.8766 15.6398 29.5132 16.7566C29.1327 17.9259 27.7391 19.4368 24.1472 20.6677L24.4714 21.6137ZM20.742 15.7535L19.765 15.5401C18.4228 21.6864 22.5647 26.6081 29.0667 29.9008C35.6118 33.2153 44.9061 35.1101 54.8677 35.1893C74.7282 35.3474 97.871 28.2674 107.448 9.89274L106.562 9.43052L105.675 8.96831C96.6198 26.3408 74.4675 33.3452 54.8836 33.1894C45.123 33.1117 36.1579 31.25 29.9703 28.1165C23.7397 24.9613 20.6759 20.7435 21.719 15.9668L20.742 15.7535Z'
									fill='white'
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
