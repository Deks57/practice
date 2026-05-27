import { Achievements } from './components/Achievements/Achievements'
import { Banner } from './components/Banner/Banner'
import { Hero } from './components/Hero/Hero'
import { News } from './components/News/News'
import { Projects } from './components/Projects/Projects'
import { Reviews } from './components/Reviews/Reviews'
import { Team } from './components/Team/Team'

export function MainView() {
	return (
		<main>
			<Hero />
			<Achievements />
			<Projects />
			<News />
			<Team />
			<Reviews />
			<Banner />
		</main>
	)
}
