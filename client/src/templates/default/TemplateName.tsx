import React from 'react'

import styles from './TemplateName.module.scss'

interface TemplateNameProps {}

const TemplateName:React.FC<TemplateNameProps> = (props) => {
	const {} = props;
	return (
		<div className={styles.TemplateName}>
			TemplateName Component
		</div>
	)
}

export default TemplateName
