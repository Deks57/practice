import { AchievementCard } from '@/entities/achievement/ui/AchievementCard'
import { achievementsData } from './achievements.data'
import styles from './achievements.module.scss'

export function Achievements() {
	return (
		<section className={styles.achievements}>
			<div className='container'>
				<h2 className={styles.achievements__title}>Награды студии</h2>
				<div className={styles.achievements__list}>
					{achievementsData.map((item) => (
						<AchievementCard
							key={item.id}
							icon={item.icon}
							rank={item.rank}
							description={item.description}
						/>
					))}
				</div>
			</div>
		</section>
	)
}
