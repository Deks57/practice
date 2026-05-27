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
		<div className={`${styles.item} ${className || ''}`}>
			<div className={styles.imageWrapper}>
				<Image
					src={image}
					alt={title}
					width={652}
					height={412}
					className={styles.projectImage}
				/>
			</div>
			<div className={styles.contentWrapper}>
				<h3 className={styles.projectTitle}>{title}</h3>
				<p className={styles.projectDescription}>{description}</p>
			</div>
		</div>
	)
}
