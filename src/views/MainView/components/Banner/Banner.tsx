'use client'

import { SocialIcon } from '@/components/SocialIcon/SocialIcon'
import { ArrowIcon } from '@/components/icons/ArrowIcon'
import { OkIcon } from '@/components/icons/OkIcon'
import { TelegramIcon } from '@/components/icons/TelegramIcon'
import { VkIcon } from '@/components/icons/VkIcon'
import Image from 'next/image'
import styles from './banner.module.scss'

export function Banner() {
	return (
		<section className={styles.banner}>
			<div className='container'>
				<div className={styles.banner__content}>
					<div className={styles.banner__image}>
						<Image
							src='/banner-img.png'
							alt='Команда'
							fill
							priority
						/>
					</div>

					<div className={styles.banner__text}>
						<h2 className={styles.banner__title}>Обсудим ваш проект?</h2>
						<p className={styles.banner__description}>
							Сформируем четкий план реализации проекта
							<br />в кратчайшие сроки и в рамках вашего бюджета
						</p>

						<div className={styles.banner__actions}>
							<p className={styles['banner__action-text']}>Обсудить проект</p>
							<div className={styles.banner__socials}>
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
							<ArrowIcon className={styles.banner__arrow} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
