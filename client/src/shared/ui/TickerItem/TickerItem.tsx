import { FC, ReactNode } from 'react'

import styles from './TickerItem.module.scss'
interface TickerItemProps {
	children: ReactNode
	anotherClass?: string
}
const TickerItem: FC<TickerItemProps> = props => {
	const { children, anotherClass = '' } = props

	return <div className={`${styles.Ticker__item} ${anotherClass}`}>{children}</div>
}

export { TickerItem };
