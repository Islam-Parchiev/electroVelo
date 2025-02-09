import { FC } from 'react'

import TermsContent from '@pages/Terms/ui/TermsContent/TermsContent';

import Brands from '../../../widgets/Brands/Brands'
import Header from '../../../widgets/Header/Header'
import Subscribe from '../../../widgets/Subscribe/Subscribe'
export const Terms: FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="Terms">
				<TermsContent />
				<Brands />
				<Subscribe />
			</main>
		</>
	)
}
