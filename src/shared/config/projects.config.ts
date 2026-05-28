import { ProjectTab } from '@/shared/hooks/useProjectsTabs'

export const projectsTabs = [
	{ id: 'webServices', label: 'Веб-сервисы' },
	{ id: 'CRM-services', label: 'CRM-системы' },
	{ id: 'online-stores', label: 'Интернет-магазины' },
	{ id: 'corporate', label: 'Корпоративные сайты' },
	{ id: 'aggregators', label: 'Агрегаторы, маркетплейсы' },
	{ id: 'logistics', label: 'Логистические сервисы' },
	{ id: 'mobile', label: 'Мобильные приложения' }
] satisfies readonly { id: ProjectTab; label: string }[]

export const projectsData = {
	webServices: [
		{
			id: 1,
			image: '/project-img1.png',
			title: 'Форкарго',
			description:
				'Платформа для развития агробизнеса на национальном и международном рынке'
		},
		{
			id: 2,
			image: '/project-img2.png',
			title: 'Калькулятор парикмахера',
			description:
				'Веб-платформа с набором инструментов для мастеров бьюти-индустрии'
		},
		{
			id: 3,
			image: '/project-img3.png',
			title: 'SmartDelivery',
			description:
				'Система управления доставкой с маршрутизацией и онлайн-трекингом'
		},
		{
			id: 4,
			image: '/project-img4.png',
			title: 'SmartDelivery',
			description:
				'Система управления доставкой с маршрутизацией и онлайн-трекингом'
		},
		{
			id: 5,
			image: '/project-img5.png',
			title: 'SmartDelivery',
			description:
				'Система управления доставкой с маршрутизацией и онлайн-трекингом'
		}
	],
	'CRM-services': [
		{
			id: 6,
			image: '/project-img1.png',
			title: 'CRM для логистики',
			description:
				'Комплексная CRM-система для управления клиентами и заказами в логистической компании'
		},
		{
			id: 7,
			image: '/project-img2.png',
			title: 'AutoDeal CRM',
			description:
				'CRM-система для автосалона с интеграцией с сайтом и автоподбором'
		},
		{
			id: 8,
			image: '/project-img3.png',
			title: 'MediCare CRM',
			description:
				'Платформа для управления клиникой: запись пациентов, электронная карта, интеграция с МИС'
		}
	],
	'online-stores': [
		{
			id: 9,
			image: '/project-img4.png',
			title: 'Маниа Онлайн',
			description:
				'Мобильное приложение для заказа доставки товаров на дом из сети гипермаркетов «Маниа»'
		},
		{
			id: 10,
			image: '/project-img5.png',
			title: 'FashionStore',
			description:
				'Интернет-магазин одежды с виртуальной примерочной и системой рекомендаций'
		},
		{
			id: 11,
			image: '/project-img1.png',
			title: 'TechnoMarket',
			description:
				'Маркетплейс электроники с удобным сравнением характеристик и отзывов'
		}
	],
	corporate: [
		{
			id: 12,
			image: '/project-img2.png',
			title: 'Газпром Карьера',
			description:
				'Интерактивная карьерная карта для сотрудников нефтяной компании'
		},
		{
			id: 13,
			image: '/project-img3.png',
			title: 'Комфортел',
			description: 'Корпоративный сайт для оператора связи бизнес-класса'
		},
		{
			id: 14,
			image: '/images/projects/rosatom-production.png',
			title: 'РосАтом Производство',
			description:
				'Корпоративный портал для управления производственными процессами'
		}
	],
	aggregators: [
		{
			id: 15,
			image: '/images/projects/foodmaster.png',
			title: 'FoodMaster',
			description:
				'Агрегатор доставки еды из ресторанов с системой лояльности и кешбэком'
		},
		{
			id: 16,
			image: '/images/projects/city-services.png',
			title: 'CityServices',
			description:
				'Маркетплейс услуг: от ремонта до клининга с рейтингом исполнителей'
		},
		{
			id: 17,
			image: '/images/projects/real-estate-hub.png',
			title: 'RealEstateHub',
			description:
				'Агрегатор недвижимости с 3D-турами и онлайн-показом объектов'
		}
	],
	logistics: [
		{
			id: 18,
			image: '/images/projects/cargotrack.png',
			title: 'CargoTrack',
			description:
				'Логистический сервис для отслеживания грузов и оптимизации маршрутов'
		},
		{
			id: 19,
			image: '/images/projects/warehouse-pro.png',
			title: 'WarehousePro',
			description:
				'Система управления складом с интеграцией с 1С и маркировкой товаров'
		},
		{
			id: 20,
			image: '/images/projects/logichain.png',
			title: 'LogiChain',
			description:
				'Платформа для управления цепочками поставок и автоматизации документооборота'
		}
	],
	mobile: [
		{
			id: 21,
			image: '/images/projects/mania-online.png',
			title: 'Маниа Онлайн',
			description:
				'Мобильное приложение для заказа доставки товаров на дом из сети гипермаркетов «Маниа»'
		},
		{
			id: 22,
			image: '/images/projects/fittrack.png',
			title: 'FitTrack',
			description:
				'Мобильное приложение для фитнес-клубов с трекингом тренировок и питанием'
		},
		{
			id: 23,
			image: '/images/projects/bank-easy.png',
			title: 'BankEasy',
			description:
				'Мобильный банк с биометрией, платежами по QR и финансовой аналитикой'
		}
	]
} as const
