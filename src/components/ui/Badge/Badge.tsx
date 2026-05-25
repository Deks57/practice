'use client'

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
    <div className={`${styles.badge} ${className}`}>
      <div className={styles.numberWrapper}>
        <span className={styles.number}>{number}</span>
        <span className={styles.label}>место</span>
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.text}>{text}</span>
      </div>
    </div>
  )
}