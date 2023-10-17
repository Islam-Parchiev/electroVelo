import {FC} from 'react'


import MainAbout from '../../components/MainAbout/MainAbout'
import Brands from '../../components/Brands/Brands'
import MainNewItems from '../../components/MainNewItems/MainNewItems'

const Main:FC = () => {
	return (
		<main className="Main">
			<MainAbout/>
			<Brands/>
			<MainNewItems/>
		</main>
	)
}

export default Main
