'use client'

import Image from 'next/image'
import styles from './reviewCard.module.scss'
import type { Review } from './ReviewCard.types'

interface ReviewCardProps {
	review: Review
}

export function ReviewCard({ review }: ReviewCardProps) {
	return (
		<div className={styles['review-card']}>
			<div className={styles['review-card__top']}>
				<h3 className={styles['review-card__title']}>{review.title}</h3>
				<div className={styles['review-card__icon']}>
					<Image
						src='/notebook.svg'
						alt=''
						width={24}
						height={24}
					/>
				</div>
			</div>
			<div className={styles['review-card__bottom']}>
				<p className={styles['review-card__text']}>{review.text}</p>
				<div className={styles['review-card__author']}>
					<div className={styles['review-card__avatar']}>
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
						<div className={styles['review-card__name']}>{review.name}</div>
						<div className={styles['review-card__role']}>{review.role}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
