import type { Metadata } from 'next'
import {
	Geist,
	Geist_Mono,
	Inter,
	Manrope,
	Montserrat,
	Roboto,
	Rubik
} from 'next/font/google'
import './globals.scss'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
})

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700']
})

const rubik = Rubik({
	variable: '--font-rubik',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700']
})

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700']
})

const manrope = Manrope({
	variable: '--font-manrope',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700']
})

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '700']
})

export const metadata: Metadata = {
	title: 'New Application',
	description: 'КИБЕРИЯ'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ru'
			className={`
        ${geistSans.variable} 
        ${geistMono.variable}
        ${inter.variable}
        ${rubik.variable}
        ${montserrat.variable}
        ${manrope.variable}
        ${roboto.variable}
        h-full antialiased
      `}>
			<body>
				<div style={{ width: '100%' }}></div>
				{children}
			</body>
		</html>
	)
}
