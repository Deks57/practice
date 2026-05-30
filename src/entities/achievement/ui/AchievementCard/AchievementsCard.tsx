import Image from 'next/image'
import { AchievementCardProps } from './achievementCard.types'
import styles from './achievementsCard.module.scss'

export function AchievementCard({
	icon,
	rank,
	description
}: AchievementCardProps) {
	return (
		<div className={styles.achievementsCard}>
			<div>
				<Image
					src={icon}
					alt=''
					width={80}
					height={80}
					className={styles.achievementsCard__icon}
				/>
			</div>
			<div className={styles.achievementsCard__text}>
				<span className={styles.achievementsCard__rank}>{rank}</span>
				<p>{description}</p>
			</div>
		</div>
	)
}
