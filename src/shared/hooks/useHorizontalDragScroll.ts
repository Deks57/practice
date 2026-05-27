'use client'

import { useRef } from 'react'

export function useHorizontalDragScroll<T extends HTMLElement>() {
	const containerRef = useRef<T>(null)

	const drag = useRef({
		isActive: false,
		startX: 0,
		scrollLeft: 0
	})

	const onMouseDown = (e: React.MouseEvent) => {
		const el = containerRef.current
		if (!el) return

		drag.current.isActive = true
		drag.current.startX = e.pageX - el.offsetLeft
		drag.current.scrollLeft = el.scrollLeft

		el.style.cursor = 'grabbing'
	}

	const onMouseUp = () => {
		const el = containerRef.current
		if (!el) return

		drag.current.isActive = false
		el.style.cursor = 'grab'
	}

	const onMouseMove = (e: React.MouseEvent) => {
		const el = containerRef.current
		if (!el || !drag.current.isActive) return

		const x = e.pageX - el.offsetLeft
		el.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX) * 1.5
	}

	return {
		containerRef,
		events: {
			onMouseDown,
			onMouseUp,
			onMouseLeave: onMouseUp,
			onMouseMove
		}
	}
}
