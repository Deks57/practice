'use client'

import { Button } from '@/components/ui/Button/Button'
import { projectsTabs } from '@/config/projects.config'
import { useHorizontalDragScroll } from '@/hooks/useHorizontalDragScroll'
import { useProjectsTabs } from '@/hooks/useProjectsTabs'
import Image from 'next/image'
import styles from './projects.module.scss'

export function Projects() {
	const { activeTab, setActiveTab, projects } = useProjectsTabs()

	const { containerRef, events } = useHorizontalDragScroll<HTMLDivElement>()

	return (
		<section className={styles.projects}>
			<div className='container'>
				<h2 className={styles.title}>Наши проекты</h2>

				<div
					className={styles.tabsWrapper}
					ref={containerRef}
					onMouseDown={events.onMouseDown}
					onMouseLeave={events.onMouseLeave}
					onMouseUp={events.onMouseUp}
					onMouseMove={events.onMouseMove}>
					<div className={styles.tabs}>
						{projectsTabs.map((tab) => (
							<Button
								key={tab.id}
								text={tab.label}
								variant='light'
								isActive={activeTab === tab.id}
								onClick={() => setActiveTab(tab.id)}
								className={styles.tabButton}
							/>
						))}
					</div>
				</div>

				<div className={styles.list}>
					{projects.map((project, index) => (
						<div
							key={index}
							className={`${styles.item} ${styles[`div${index + 1}`]}`}>
							<div className={styles.imageWrapper}>
								<Image
									src={project.image}
									alt={project.title}
									width={652}
									height={412}
									className={styles.projectImage}
								/>
							</div>

							<div className={styles.contentWrapper}>
								<h3 className={styles.projectTitle}>{project.title}</h3>
								<p className={styles.projectDescription}>
									{project.description}
								</p>
							</div>
						</div>
					))}
				</div>

				<Button
					text='Загрузить еще'
					variant='dark'
					className={styles.loadButton}
				/>
			</div>
		</section>
	)
}
