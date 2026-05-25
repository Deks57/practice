'use client'

import styles from './button.module.scss'

interface Props {
	text: string
	variant?: 'default' | 'dark' | 'light'
	disabled?: boolean
	isActive?: boolean
	onClick?: () => void
	className?: string
}

export function Button({
	text,
	variant = 'default',
	disabled = false,
	isActive = false,
	onClick,
	className = ''
}: Props) {
	return (
		<button
			className={`
        ${styles.button} 
        ${styles[`button_${variant}`]} 
        ${disabled ? styles.disabled : ''}
        ${isActive ? styles.active : ''}
        ${className}
      `}
			disabled={disabled}
			onClick={onClick}>
			{text}
		</button>
	)
}
