'use client'

import { Button } from '@/components/ui/Button/Button'
import Link from 'next/link'
import styles from './teamSection.module.scss'

interface Props {}

export function TeamSection({}: Props) {
	return (
		<section className={styles.team}>
			<div className='container'>
				<div className={styles.inner}>
					<img
						src={'/team-section-card-img.png'}
						alt='team'
						className={styles.backgroundImage}></img>
					<div className={styles.content}>
						<h2 className={styles.title}>
							Мы всегда ищем новые <br /> таланты в нашу команду
						</h2>

						<div className={styles.info}>
							<div className={styles.text}>
								<p>
									Работая в нашей команде, каждый день ты будешь делать и
									узнавать что-то новое и интересное. Крутые знакомства,
									долгосрочные проекты и необычные задачи – то, что ждет тебя в
									Киберии
								</p>
							</div>

							<div className={styles.actions}>
								<Button
									text='Присоединяйся'
									variant='default'
									className={styles.ctaButton}></Button>
								<Link
									href='#'
									target='_blank'
									className={styles.hhLink}>
									Вакансии на hh.ru
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
