export class PagesConfig {
	static readonly HOME = '/'

	static readonly PROJECTS = '/projects'
	static readonly SERVICES = '/services'
	static readonly ABOUT = '/about'
	static readonly CAREER = '/career'
	static readonly BLOG = '/blog'
	static readonly NEWS = '/news'
	static readonly CONTACTS = '/contacts'

	static PROJECT_DETAILS(id: string) {
		return `/projects/${id}`
	}

	static BLOG_POST(id: string) {
		return `/blog/${id}`
	}

	static SERVICE_DETAILS(id: string) {
		return `/services/${id}`
	}

	static CAREER_VACANCY(id: string) {
		return `/career/${id}`
	}
}
