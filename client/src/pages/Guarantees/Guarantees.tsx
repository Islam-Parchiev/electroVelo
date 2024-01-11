import {FC} from 'react'

import Header from '@components/Header/Header'
import GuaranteesPreview from '@components/GuaranteesPreview/GuaranteesPreview';
import GuaranteesText from '@components/GuaranteesText/GuaranteesText';
import GuaranteesInfo from '@components/GuaranteesInfo/GuaranteesInfo';
import GuaranteesConditions from '@components/GuaranteesConditions/GuaranteesConditions';
import GuaranteesRefusals from '@components/GuaranteesRefusals/GuaranteesRefusals';
import Brands from '@components/Brands/Brands'
import Subscribe from '@components/Subscribe/Subscribe'

const Guarantees:FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader"/>
			<main className="Guarantees">
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
