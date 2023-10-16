import {FC} from 'react'


import styles from './TickerItem.module.scss';

const TickerItem:FC<any> = ({children}) => {
	return (
		<div className={styles.Ticker__item}>
			{children}
		</div>
	)
}

export default TickerItem
