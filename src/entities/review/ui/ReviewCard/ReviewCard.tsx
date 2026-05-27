'use client'

import Image from 'next/image'
import styles from './reviewCard.module.scss'
import type { Review } from './ReviewCard.types'

interface ReviewCardProps {
	review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
	return (
		<div className={styles.card}>
			<div className={styles.cardTop}>
				<h3 className={styles.reviewTitle}>{review.title}</h3>
				<div className={styles.icon}>
					<Image
						src='/notebook.svg'
						alt=''
						width={24}
						height={24}
					/>
				</div>
			</div>
			<div className={styles.cardBottom}>
				<p className={styles.text}>{review.text}</p>
				<div className={styles.author}>
					<div className={styles.avatarPlaceholder}>
						{review.avatar ? (
							<Image
								width={44}
								height={44}
								alt={review.name}
								src={review.avatar}
							/>
						) : (
							<div>
								<Image
									src='/reviewIcon.svg'
									alt=''
									width={16}
									height={18}
								/>
							</div>
						)}
					</div>
					<div>
						<div className={styles.name}>{review.name}</div>
						<div className={styles.role}>{review.role}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
