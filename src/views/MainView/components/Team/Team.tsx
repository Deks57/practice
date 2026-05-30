'use client'

import { Button } from '@/components/ui/Button'
import clsx from 'clsx'
import Image from 'next/image'
import { teamPhotos, teamStats } from './team.data'
import styles from './team.module.scss'

export function Team() {
	return (
		<section className={styles.team}>
			<div className='container'>
				<div className={styles.team__inner}>
					<div className={styles.team__content}>
						<h2 className={styles.team__title}>Наша команда</h2>
						<p className={styles.team__subtitle}>
							Благодаря многолетнему опыту мы гибко используем современные
							методологии разработки — Scrum, Agile, Lean, Kanban, применяя и
							адаптируя их под нужды проекта
						</p>

						<Button
							text='Подробнее'
							variant='dark'
							className={styles['team__details-button']}
						/>

						<div className={styles.team__grid}>
							{teamStats.map((stat) => (
								<div
									key={stat.id}
									className={styles.team__card}>
									<div
										className={clsx(
											styles.team__number,
											styles[`team__number--${stat.colorClass}`]
										)}>
										{stat.number}
									</div>
									<p className={styles.team__description}>{stat.description}</p>
								</div>
							))}
						</div>
					</div>

					<div className={styles.team__images}>
						{teamPhotos.map((photo) => (
							<div
								key={photo.id}
								className={styles['team__image-container']}
								data-id={photo.id}>
								<Image
									src={photo.src}
									alt={photo.alt}
									fill
									className={styles.team__photo}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
