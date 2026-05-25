'use client'

import { INews } from '@/sections/News/news.data'
import { useEffect, useState } from 'react'

const MOBILE_BREAKPOINT = 768
const MOBILE_START = 3
const DESKTOP_START = 6
const STEP = 3

export function useLoadMore(news: INews[]) {
	const [visibleCount, setVisibleCount] = useState(DESKTOP_START)
	const [isMounted, setIsMounted] = useState(false)

	useEffect(() => {
		if (typeof window === 'undefined') return

		const isMobile = window.innerWidth <= MOBILE_BREAKPOINT
		setVisibleCount(isMobile ? MOBILE_START : DESKTOP_START)
		setIsMounted(true)
	}, [])

	const loadMore = () => {
		setVisibleCount((prev) => prev + STEP)
	}

	const visibleNews = news.slice(0, visibleCount)
	const hasMore = visibleCount < news.length

	return {
		visibleNews,
		loadMore,
		hasMore,
		isMounted
	}
}
