import React from 'react'

import SwitchCheckbox from '@components/SwitchCheckbox/SwitchCheckbox';

import styles from './Filters.module.scss'

interface FiltersProps {}

const Filters:React.FC<FiltersProps> = (props) => {
	const [checked,setChecked]= React.useState<boolean>(false);
	const {} = props;
	return (
		<div className={styles.Filters}>
			<SwitchCheckbox value={checked} text="Только в наличии" handleClick={setChecked}/>
		</div>
	)
}

export default Filters
