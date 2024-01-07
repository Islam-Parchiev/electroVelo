import {FC} from 'react'


import Brands from '@components/Brands/Brands'

import Subscribe from '@components/Subscribe/Subscribe'
import Header from '@components/Header/Header'
import TermsContent from '@components/TermsContent/TermsContent';

import styles from './Terms.module.scss';

const Terms:FC = () => {
	return (
		<>
			<Header otherClass={styles.Terms__header}/>
			<main className={styles.Terms}>
				<TermsContent/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Terms
