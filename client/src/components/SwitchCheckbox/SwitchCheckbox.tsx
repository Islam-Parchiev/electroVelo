import React from 'react'

import styles from './SwitchCheckbox.module.scss'

interface SwitchCheckboxProps {}

const SwitchCheckbox:React.FC<SwitchCheckboxProps> = (props) => {
	const {} = props;
	const [checked,setChecked] =React.useState<boolean>(false);
	console.log(checked);
	return (
		<label className={styles.checkboxIos}>
			<input type="checkbox" checked={checked} onClick={()=> setChecked(!checked)}/>
			<span className={styles.checkboxIosSwitch}></span>
		</label>
	)
}

export default SwitchCheckbox
