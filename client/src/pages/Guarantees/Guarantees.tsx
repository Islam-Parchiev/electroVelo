import {FC} from 'react'

import GuaranteesPreview from '@components/GuaranteesPreview/GuaranteesPreview';
import GuaranteesText from '@components/GuaranteesText/GuaranteesText';
import GuaranteesInfo from '@components/GuaranteesInfo/GuaranteesInfo';
import Brands from '@components/Brands/Brands'
import Subscribe from '@components/Subscribe/Subscribe'
import Header from '@components/Header/Header'

import styles from './Guarantees.module.scss';

const Guarantees:FC = () => {
	return (
		<>
			<Header otherClass={styles.Guarantees__header}/>
			<main className={styles.Guarantees}>
				<GuaranteesPreview/>
				<GuaranteesText/>
				<GuaranteesInfo/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Guarantees
