import {FC, ReactNode} from 'react'


import styles from './TickerItem.module.scss';

const TickerItem:FC<{children:ReactNode}> = ({children}) => {
	return (
		<div className={styles.Ticker__item}>
			{children}
		</div>
	)
}

export default TickerItem
