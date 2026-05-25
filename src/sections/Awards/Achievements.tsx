import Image from 'next/image'
import { achievementsData } from './achievements.data'
import styles from './achievements.module.scss'

interface Achievements {
	image: string
	title: string
	description: string
}

export function Achievements() {
	return (
		<section className={styles.achievements}>
			<div className='container'>
				<h1 className={styles.title}>Награды студии</h1>
				<div className={styles.list}>
					{achievementsData.map((item, index) => (
						<div
							key={index}
							className={styles.item}>
							<div className={styles.itemHeader}>
								<Image
									src={item.icon}
									alt=''
									width={80}
									height={80}
									className={styles.itemIcon}
								/>
							</div>
							<div className={styles.itemText}>
								<span className={styles.rank}>{item.rank}</span>
								<p className={styles.itemDescription}>{item.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
