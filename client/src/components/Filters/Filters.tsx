import React from 'react'

import SwitchCheckbox from '@components/SwitchCheckbox/SwitchCheckbox';

import styles from './Filters.module.scss'

interface FiltersProps {}

const Filters:React.FC<FiltersProps> = (props) => {
	const {} = props;
	return (
		<div className={styles.Filters}>
			<SwitchCheckbox/>
		</div>
	)
}

export default Filters
