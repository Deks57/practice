import { AchievementCard } from '@/entities/achievement/ui/AchievementCard'
import { achievementsData } from './achievements.data'
import styles from './achievements.module.scss'

export function Achievements() {
	return (
		<section className={styles.achievements}>
			<div className='container'>
				<h1 className={styles.title}>Награды студии</h1>
				<div className={styles.list}>
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
