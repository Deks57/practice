'use client'

import Image from 'next/image'
import styles from './newsCard.module.scss'
import type { NewsData } from './NewsCard.types'

interface NewsCardProps {
	news: NewsData
}

export function NewsCard({ news }: NewsCardProps) {
	return (
		<article className={styles.card}>
			<div className={styles.imageWrapper}>
				<Image
					src={news.image}
					alt={news.title}
					width={400}
					height={250}
					className={styles.image}
				/>
			</div>
			<div className={styles.content}>
				<h3 className={styles.cardTitle}>{news.title}</h3>
				<p className={styles.description}>{news.description}</p>
				<div className={styles.footer}>
					<div className={styles.date}>
						<span>{news.date}</span>
					</div>
				</div>
			</div>
		</article>
	)
}
