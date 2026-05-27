import {
	CIRCLE_GRADIENT_COORDS,
	GRADIENT_STOPS,
	ICON_GRADIENT_COORDS
} from '@/shared/constants/socialIcons'
import { FC, SVGProps } from 'react'
import styles from './SocialIcon.module.scss'

type IconComponent = FC<SVGProps<SVGSVGElement> & { gradientId?: string }>

type Props = {
	href: string
	gradientId: string
	Icon: IconComponent
	isDark?: boolean
}

export function SocialIcon({ href, gradientId, Icon, isDark }: Props) {
	const iconGradId = `${gradientId}-icon`
	const circleGradId = `${gradientId}-circle`
	const defaultColor = isDark ? '#FFFFFF' : '#0B0D20'

	return (
		<a
			href={href}
			className={styles.btn}
			aria-label='social link'
			style={{ borderColor: defaultColor }}>
			<svg
				className={styles.circleSvg}
				width='32'
				height='32'
				viewBox='0 0 32 32'
				fill='none'>
				<defs>
					<linearGradient
						id={circleGradId}
						{...CIRCLE_GRADIENT_COORDS}>
						{GRADIENT_STOPS.map((s) => (
							<stop
								key={s.offset}
								offset={s.offset}
								stopColor={s.color}
							/>
						))}
					</linearGradient>
				</defs>
				<circle
					cx='16'
					cy='16'
					r='15.5'
					stroke={`url(#${circleGradId})`}
				/>
			</svg>

			<svg
				width='0'
				height='0'
				style={{ position: 'absolute' }}>
				<defs>
					<linearGradient
						id={iconGradId}
						{...ICON_GRADIENT_COORDS}>
						{GRADIENT_STOPS.map((s) => (
							<stop
								key={s.offset}
								offset={s.offset}
								stopColor={s.color}
							/>
						))}
					</linearGradient>
				</defs>
			</svg>

			<Icon
				className={styles.iconDefault}
				style={{ color: defaultColor }}
			/>

			<Icon
				className={styles.iconGradient}
				gradientId={iconGradId}
			/>
		</a>
	)
}
