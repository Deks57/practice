import { Footer } from '@/layout/Footer/Footer'
import { Header } from '@/layout/Header/Header'
import { Achievements } from '@/sections/Awards/Achievements'
import { Banner } from '@/sections/Banner/Banner'
import { Hero } from '@/sections/Hero/Hero'
import { News } from '@/sections/News/News'
import { newsData } from '@/sections/News/news.data'
import { Projects } from '@/sections/Projects/Projects'
import { Reviews } from '@/sections/Reviews/Reviews'
import { reviewsData } from '@/sections/Reviews/reviews.data'
import { Team } from '@/sections/Team/Team'
import { TeamSection } from '@/sections/TeamSection/TeamSection'

export default function Home() {
	return (
		<>
			<Header />
			<Hero />
			<Achievements />
			<Projects />
			<Team />
			<Reviews reviews={reviewsData} />
			<Banner />
			<News news={newsData} />
			<TeamSection />
			<Footer />
		</>
	)
}
