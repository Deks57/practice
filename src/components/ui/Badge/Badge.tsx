'use client'

import clsx from 'clsx'
import styles from './badge.module.scss'

interface Props {
	number?: string | number
	text?: string
	className?: string
}

export function Badge({
	number = '23',
	text = 'Разработка решений на базе ИИ',
	className = ''
}: Props) {
	return (
		<div className={clsx(styles.badge, className)}>
			<div className={styles.badge__numberWrapper}>
				<span className={styles.badge__number}>{number}</span>
				<span className={styles.badge__label}>место</span>
			</div>
			<div className={styles.badge__textWrapper}>
				<span className={styles.badge__text}>{text}</span>
			</div>
		</div>
	)
}
