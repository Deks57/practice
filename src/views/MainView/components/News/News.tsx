'use client'

import { Button } from '@/components/ui/Button/Button'
import { NewsCard } from '@/entities/news'
import { useLoadMore } from '@/shared/hooks/useLoadMore'
import { newsData } from './news.data'
import styles from './news.module.scss'

export function News() {
	const { visibleNews, loadMore, hasMore } = useLoadMore(newsData)

	return (
		<section className={styles.news}>
			<div className='container'>
				<h2 className={styles.news__title}>Новости</h2>
				<div className={styles.news__grid}>
					{visibleNews.map((item) => (
						<NewsCard
							key={item.id}
							news={item}
						/>
					))}
				</div>

				{hasMore && (
					<div className={styles['news__load-more-wrapper']}>
						<Button
							variant='default'
							text='Загрузить ещё'
							className={styles['news__load-more-button']}
							onClick={loadMore}
						/>
					</div>
				)}
			</div>
		</section>
	)
}
