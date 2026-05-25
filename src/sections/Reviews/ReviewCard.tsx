import Image from 'next/image'
import type { Review } from './reviews.data'
import styles from './reviews.module.scss'

interface Props {
	review: Review
}

export function ReviewCard({ review }: Props) {
	return (
		<div className={styles.card}>
			<div className={styles.cardTop}>
				<h3 className={styles.reviewTitle}>{review.title}</h3>
				<div className={styles.icon}>≡</div>
			</div>

			<div className={styles.cardBottom}>
				<p className={styles.text}>{review.text}</p>

				<div className={styles.author}>
					{review.avatar ? (
						<Image
							src={review.avatar}
							alt={review.name}
							width={32}
							height={32}
						/>
					) : (
						<div className={styles.avatarPlaceholder} />
					)}

					<div>
						<div className={styles.name}>{review.name}</div>
						<div className={styles.role}>{review.role}</div>
					</div>
				</div>
			</div>
		</div>
	)
}
