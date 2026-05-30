'use client'

import { NewsData } from '@/entities/news/ui/NewsCard'
import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 768
const MOBILE_START = 3
const DESKTOP_START = 6
const STEP = 3

export function useLoadMore(news: NewsData[]) {
	const [visibleCount, setVisibleCount] = useState(DESKTOP_START)

	useEffect(() => {
		const updateCount = () => {
			const isMobile = window.innerWidth <= MOBILE_BREAKPOINT
			setVisibleCount(isMobile ? MOBILE_START : DESKTOP_START)
		}

		updateCount()
		window.addEventListener('resize', updateCount)
		return () => window.removeEventListener('resize', updateCount)
	}, [])

	const loadMore = () => {
		setVisibleCount((prev) => prev + STEP)
	}

	const visibleNews = news.slice(0, visibleCount)
	const hasMore = visibleCount < news.length

	return {
		visibleNews,
		loadMore,
		hasMore
	}
}
