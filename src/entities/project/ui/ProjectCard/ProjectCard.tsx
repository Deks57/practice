import clsx from 'clsx'
import Image from 'next/image'
import styles from './projectCard.module.scss'
import { ProjectCardProps } from './ProjectCard.types'

export function ProjectCard({
	image,
	title,
	description,
	className
}: ProjectCardProps) {
	return (
		<div className={clsx(styles.projectCard, className)}>
			<div className={styles.projectCard__wrapper}>
				<Image
					src={image}
					alt={title}
					width={652}
					height={412}
					className={styles.projectCard__image}
				/>
			</div>
			<div className={styles.projectCard__content}>
				<h3 className={styles.projectCard__title}>{title}</h3>
				<p className={styles.projectCard__description}>{description}</p>
			</div>
		</div>
	)
}
