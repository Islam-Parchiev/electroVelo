import {FC} from 'react'


import MainAbout from '../../components/MainAbout/MainAbout'
import Brands from '../../components/Brands/Brands'

const Main:FC = () => {
	return (
		<main className="Main">
			<MainAbout/>
			<Brands/>
		</main>
	)
}

export default Main
