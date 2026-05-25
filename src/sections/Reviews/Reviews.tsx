'use client'

import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useReviewsSlider } from '@/hooks/useReviewsSlider'
import { ReviewCard } from './ReviewCard'
import type { Review } from './reviews.data'
import styles from './reviews.module.scss'

interface Props {
	reviews: Review[]
}

export function Reviews({ reviews }: Props) {
	const { prevRef, nextRef, onSwiperInit } = useReviewsSlider()

	return (
		<section className={styles.reviews}>
			<div className='container'>
				<h1 className={styles.title}>Нам доверяют</h1>

				<Swiper
					modules={[Navigation, Pagination]}
					loop
					spaceBetween={20}
					onSwiper={onSwiperInit}
					pagination={{
						el: '.reviews-pagination',
						clickable: true
					}}
					className={styles.slider}
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 10
						},
						768: {
							slidesPerView: 2,
							spaceBetween: 16
						},
						1024: {
							slidesPerView: 2.8,
							spaceBetween: 20
						}
					}}>
					{reviews.map((review) => (
						<SwiperSlide key={review.id}>
							<ReviewCard review={review} />
						</SwiperSlide>
					))}
				</Swiper>

				<div className={styles.navigation}>
					<button
						ref={prevRef}
						className={styles.navBtn}
					/>
					<div className='reviews-pagination' />
					<button
						ref={nextRef}
						className={`${styles.navBtn} ${styles.navBtnNext}`}
					/>
				</div>
			</div>
		</section>
	)
}
