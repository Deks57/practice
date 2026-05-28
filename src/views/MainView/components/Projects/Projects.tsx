'use client'

import { Button } from '@/components/ui/Button/Button'
import { ProjectCard } from '@/entities/project/ui/ProjectCard'
import { projectsTabs } from '@/shared/config/projects.config'
import { useHorizontalDragScroll } from '@/shared/hooks/useHorizontalDragScroll'
import { useProjectsTabs } from '@/shared/hooks/useProjectsTabs'
import styles from './projects.module.scss'

export function Projects() {
	const { activeTab, setActiveTab, projects } = useProjectsTabs()
	const { containerRef, events } = useHorizontalDragScroll<HTMLDivElement>()

	const leftColumn = projects.filter((_, index) => index % 2 === 0)
	const rightColumn = projects.filter((_, index) => index % 2 === 1)

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

				<div className={styles.twoColumns}>
					<div className={styles.column}>
						{leftColumn.map((project) => (
							<ProjectCard
								key={project.id}
								image={project.image}
								title={project.title}
								description={project.description}
							/>
						))}
					</div>
					<div className={styles.column}>
						{rightColumn.map((project) => (
							<ProjectCard
								key={project.title}
								image={project.image}
								title={project.title}
								description={project.description}
							/>
						))}
					</div>
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
