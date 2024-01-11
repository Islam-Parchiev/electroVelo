import {FC} from 'react'


import Brands from '@components/Brands/Brands'

import Subscribe from '@components/Subscribe/Subscribe'
import Header from '@components/Header/Header'
import TermsContent from '@components/TermsContent/TermsContent';

const Terms:FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader"/>
			<main className="Terms">
				<TermsContent/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Terms
