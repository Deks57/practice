'use client'

import { Button } from '@/components/ui/Button/Button'
import { teamPhotos, teamStats } from './team.data'
import styles from './team.module.scss'

export function Team() {
	return (
		<section className={styles.team}>
			<div className={styles.inner}>
				<div className={styles.content}>
					<h2 className={styles.title}>Наша команда</h2>
					<p className={styles.subtitle}>
						Благодаря многолетнему опыту мы гибко используем современные
						методологии разработки — Scrum, Agile, Lean, Kanban, применяя и
						адаптируя их под нужды проекта
					</p>

					<Button
						text='Подробнее'
						variant='dark'
						className={styles.detailsButton}
					/>

					<div className={styles.grid}>
						{teamStats.map((stat, index) => (
							<div
								key={stat.id}
								className={styles.card}>
								<div
									className={`${styles.number} ${
										stat.id === 1
											? styles.blue
											: stat.id === 2
												? styles.purple
												: stat.id === 3
													? styles.purple
													: styles.blue
									}`}>
									{stat.number}
								</div>
								<div className={styles.description}>{stat.description}</div>
							</div>
						))}
					</div>
				</div>
				<div className={styles.images}>
					{teamPhotos.map((photo) => (
						<div
							key={photo.id}
							className={styles.imageContainer}
							data-id={photo.id}>
							<img
								src={photo.src}
								alt={photo.alt}
								className={styles.teamPhoto}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
