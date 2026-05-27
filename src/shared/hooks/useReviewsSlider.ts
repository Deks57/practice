'use client'

import { useEffect, useRef } from 'react'
import type { Swiper as SwiperType } from 'swiper'

export function useReviewsSlider() {
	const prevRef = useRef<HTMLButtonElement>(null)
	const nextRef = useRef<HTMLButtonElement>(null)
	const swiperRef = useRef<SwiperType | null>(null)

	useEffect(() => {
		if (!swiperRef.current || !prevRef.current || !nextRef.current) return

		const navigation = swiperRef.current.params.navigation

		if (navigation && typeof navigation === 'object') {
			navigation.prevEl = prevRef.current
			navigation.nextEl = nextRef.current

			swiperRef.current.navigation.destroy()
			swiperRef.current.navigation.init()
			swiperRef.current.navigation.update()
		}
	}, [])

	return {
		prevRef,
		nextRef,
		onSwiperInit: (swiper: SwiperType) => {
			swiperRef.current = swiper
		}
	}
}
