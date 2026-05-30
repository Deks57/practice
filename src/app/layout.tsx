import { Footer } from '@/components/layout/Footer/Footer'
import { Header } from '@/components/layout/Header'
import type { Metadata } from 'next'
import {
	Geist,
	Geist_Mono,
	Inter,
	Manrope,
	Montserrat,
	Roboto,
	Rubik,
	Unbounded,
	Wix_Madefor_Text
} from 'next/font/google'
import './globals.scss'

const wixMadeforText = Wix_Madefor_Text({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700', '800'],
	variable: '--second-family',
	display: 'swap'
})

const unbounded = Unbounded({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '500', '600', '700', '800', '900'],
	variable: '--third-family',
	display: 'swap'
})

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
				${wixMadeforText.variable}
				${unbounded.variable}
        h-full antialiased
      `}>
			<body>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
