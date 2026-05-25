'use client'

import styles from './burgerButton.module.scss'

interface Props {
  isOpen: boolean
  onClick: () => void
  className?: string
  color?: 'light' | 'dark'
}

export function BurgerButton({ isOpen, onClick, className = '', color = 'dark' }: Props) {
  return (
    <button
      className={`${styles.burger} ${isOpen ? styles.active : ''} ${styles[color]} ${className}`}
      onClick={onClick}
      aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  )
}