'use client'

import { Button } from '@/components/ui/Button/Button'
import { useLoadMore } from '@/hooks/useLoadMore'
import Image from 'next/image'
import { INews } from './news.data'
import styles from './news.module.scss'

interface Props {
	news: INews[]
}

export function News({ news }: Props) {
	const { visibleNews, loadMore, hasMore, isMounted } = useLoadMore(news)

	return (
		<section className={styles.section}>
			<div className='container'>
				<h1 className={styles.title}>Новости</h1>

				<div className={styles.grid}>
					{visibleNews.map((item) => (
						<article
							key={item.id}
							className={styles.card}
							data-visible={isMounted}>
							<div className={styles.imageWrapper}>
								<Image
									src={item.image}
									alt={item.title}
									width={400}
									height={250}
									className={styles.image}
								/>
							</div>

							<div className={styles.content}>
								<h3 className={styles.cardTitle}>{item.title}</h3>
								<p className={styles.description}>{item.description}</p>

								<div className={styles.footer}>
									<div className={styles.date}>
										<span>{item.date}</span>
									</div>
								</div>
							</div>
						</article>
					))}
				</div>

				{hasMore && (
					<div className={styles.loadMoreWrapper}>
						<Button
							variant='default'
							text='Загрузить ещё'
							className={styles.loadMoreButton}
							onClick={loadMore}></Button>
					</div>
				)}
			</div>
		</section>
	)
}
