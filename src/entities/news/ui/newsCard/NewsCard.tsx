'use client'

import { DateIcon } from '@/components/icons/DateIcon'
import Image from 'next/image'
import styles from './newsCard.module.scss'
import type { NewsData } from './NewsCard.types'

interface NewsCardProps {
	news: NewsData
}

export function NewsCard({ news }: NewsCardProps) {
	return (
		<section className={styles['news-card']}>
			<div className={styles['news-card__image-wrapper']}>
				<Image
					src={news.image}
					alt={news.title}
					width={400}
					height={250}
					className={styles['news-card__image']}
				/>
			</div>
			<div className={styles['news-card__content']}>
				<h3 className={styles['news-card__title']}>{news.title}</h3>
				<p className={styles['news-card__description']}>{news.description}</p>
				<div className={styles['news-card__footer']}>
					<div className={styles['news-card__date']}>
						<DateIcon className={styles.dateIcon} />
						<span>{news.date}</span>
					</div>
				</div>
			</div>
		</section>
	)
}
