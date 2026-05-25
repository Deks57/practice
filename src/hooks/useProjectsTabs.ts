'use client'

import { projectsData } from '@/config/projects.config'
import { useState } from 'react'

export type ProjectTab = keyof typeof projectsData

export function useProjectsTabs() {
	const [activeTab, setActiveTab] = useState<ProjectTab>('webServices')

	const projects = projectsData[activeTab]

	return {
		activeTab,
		setActiveTab,
		projects
	}
}
