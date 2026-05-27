import Image from 'next/image'
import { AchievementCardProps } from './AchievementCard.types'
import styles from './achievementsCard.module.scss'

export function AchievementCard({
	icon,
	rank,
	description
}: AchievementCardProps) {
	return (
		<div className={styles.item}>
			<div className={styles.itemHeader}>
				<Image
					src={icon}
					alt=''
					width={80}
					height={80}
					className={styles.itemIcon}
				/>
			</div>
			<div className={styles.itemText}>
				<span className={styles.rank}>{rank}</span>
				<p className={styles.itemDescription}>{description}</p>
			</div>
		</div>
	)
}
