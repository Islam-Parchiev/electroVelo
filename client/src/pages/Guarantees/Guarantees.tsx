import {FC} from 'react'

import Header from '@components/Header/Header'
import GuaranteesPreview from '@components/GuaranteesPreview/GuaranteesPreview';
import GuaranteesText from '@components/GuaranteesText/GuaranteesText';
import GuaranteesInfo from '@components/GuaranteesInfo/GuaranteesInfo';
import GuaranteesConditions from '@components/GuaranteesConditions/GuaranteesConditions';
import GuaranteesRefusals from '@components/GuaranteesRefusals/GuaranteesRefusals';
import Brands from '@components/Brands/Brands'
import Subscribe from '@components/Subscribe/Subscribe'

import styles from './Guarantees.module.scss';

const Guarantees:FC = () => {
	return (
		<>
			<Header otherClass={styles.Guarantees__header}/>
			<main className={styles.Guarantees}>
				<GuaranteesPreview/>
				<GuaranteesText/>
				<GuaranteesInfo/>
				<GuaranteesConditions/>
				<GuaranteesRefusals/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Guarantees
