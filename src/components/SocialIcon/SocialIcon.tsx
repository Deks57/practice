import {
	CIRCLE_GRADIENT_COORDS,
	GRADIENT_STOPS,
	ICON_GRADIENT_COORDS
} from '@/constants/socialIcons'
import styles from './SocialIcon.module.scss'

type Props = {
	href: string
	gradientId: string
	path: string
	viewBox: string
	width: number
	height: number
	isDark?: boolean
}

export function SocialIcon({
	href,
	gradientId,
	path,
	viewBox,
	width,
	height,
	isDark
}: Props) {
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
				className={styles.iconDefault}
				width={width}
				height={height}
				viewBox={viewBox}
				fill='none'
				style={{ color: defaultColor }}>
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d={path}
					fill='currentColor'
				/>
			</svg>

			<svg
				className={styles.iconGradient}
				width={width}
				height={height}
				viewBox={viewBox}
				fill='none'>
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
				<path
					fillRule='evenodd'
					clipRule='evenodd'
					d={path}
					fill={`url(#${iconGradId})`}
				/>
			</svg>
		</a>
	)
}
