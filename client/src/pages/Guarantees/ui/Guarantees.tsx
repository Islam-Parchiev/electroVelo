import { FC } from 'react'

import GuaranteesPreview from '@pages/Guarantees/ui/GuaranteesPreview/GuaranteesPreview';
import GuaranteesText from '@pages/Guarantees/ui/GuaranteesText/GuaranteesText';
import GuaranteesInfo from '@pages/Guarantees/ui/GuaranteesInfo/GuaranteesInfo';
import GuaranteesConditions from '@pages/Guarantees/ui/GuaranteesConditions/GuaranteesConditions';
import GuaranteesRefusals from '@pages/Guarantees/ui/GuaranteesRefusals/GuaranteesRefusals';

import Brands from '../../../widgets/Brands/Brands'
import Header from '../../../widgets/Header/Header'
import Subscribe from '../../../widgets/Subscribe/Subscribe'

export const Guarantees: FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="Guarantees">
				<GuaranteesPreview />
				<GuaranteesText />
				<GuaranteesInfo />
				<GuaranteesConditions />
				<GuaranteesRefusals />
				<Brands />
				<Subscribe />
			</main>
		</>
	)
}
