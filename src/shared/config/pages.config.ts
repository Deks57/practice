export const PagesConfig = {
	HOME: '/',

	PROJECTS: '/projects',
	SERVICES: '/services',
	ABOUT: '/about',
	CAREER: '/career',
	BLOG: '/blog',
	NEWS: '/news',
	CONTACTS: '/contacts',

	PROJECT_DETAILS: (id: string) => `/projects/${id}`,
	BLOG_POST: (id: string) => `/blog/${id}`,
	SERVICE_DETAILS: (id: string) => `/services/${id}`,
	CAREER_VACANCY: (id: string) => `/career/${id}`
} as const
