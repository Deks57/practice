'use client'
import styles from "./dropdownList.module.scss"

interface Props {}

export function DropdownList({}: Props) {
	return <div className={styles.dropdownList}>
		Выбрать отрасль
		<svg width="12" height="8" viewBox="0 0 12 8"
		  fill="none" xmlns="http://www.w3.org/2000/svg">
  		<path d="M5.62891 7.5L-0.000259399 0L11.2581 0L5.62891 7.5Z" fill="#2D41F9" />
		</svg>
	</div>
}
