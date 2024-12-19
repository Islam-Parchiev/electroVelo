import React from 'react'

import Filters from '@components/Filters/Filters';

import { Button } from '../../shared/ui'

import styles from './MobileFilters.module.scss'
interface IMobileFilters {
	handleOpen: (value: boolean) => void;
	productsCount: number;
	loading: boolean;
	success: boolean;
}

const MobileFilters: React.FC<IMobileFilters> = ({ handleOpen, productsCount, loading, success }) => {

	return (
		<div className={styles.MobileFilters}>
			<div className={styles.MobileFilters__top}>
				<h3>Фильтры</h3>
				<Button handleClick={() => handleOpen(false)}>Показать {loading ? 'loading..' : success ? productsCount : 'error'} товаров</Button>
			</div>
			<Filters />
		</div>
	)
}

export default MobileFilters
