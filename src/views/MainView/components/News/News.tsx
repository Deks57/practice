'use client'

import { Button } from '@/components/ui/Button/Button'
import { useLoadMore } from '@/shared/hooks/useLoadMore'
import { NewsCard } from '../../../../entities/news/ui/newsCard'
import { newsData } from './news.data'
import styles from './news.module.scss'

export function News() {
	const { visibleNews, loadMore, hasMore } = useLoadMore(newsData)

	return (
		<section className={styles.section}>
			<div className='container'>
				<h1 className={styles.title}>Новости</h1>

				<div className={styles.grid}>
					{visibleNews.map((item) => (
						<NewsCard
							key={item.id}
							news={item}
						/>
					))}
				</div>

				{hasMore && (
					<div className={styles.loadMoreWrapper}>
						<Button
							variant='default'
							text='Загрузить ещё'
							className={styles.loadMoreButton}
							onClick={loadMore}
						/>
					</div>
				)}
			</div>
		</section>
	)
}
