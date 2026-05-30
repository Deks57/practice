'use client'

import { Button } from '@/components/ui/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import styles from './teamSection.module.scss'

export function TeamSection() {
	return (
		<section className={styles['team-section']}>
			<div className='container'>
				<div className={styles['team-section__inner']}>
					<Image
						src='/team-section-card-img.png'
						alt='team'
						width={749}
						height={962}
						className={styles['team-section__background']}
					/>
					<div className={styles['team-section__content']}>
						<h2 className={styles['team-section__title']}>
							Мы всегда ищем новые <br /> таланты в нашу команду
						</h2>

						<div className={styles['team-section__info']}>
							<div className={styles['team-section__text']}>
								<p>
									Работая в нашей команде, каждый день ты будешь делать и
									узнавать что-то новое и интересное. Крутые знакомства,
									долгосрочные проекты и необычные задачи – то, что ждет тебя в
									Киберии
								</p>
							</div>

							<div className={styles['team-section__actions']}>
								<Button
									text='Присоединяйся'
									variant='default'
									className={styles['team-section__cta-button']}
								/>
								<Link
									href='#'
									target='_blank'
									className={styles['team-section__hh-link']}>
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
