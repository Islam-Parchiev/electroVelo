import {FC} from 'react'


import MainAbout from '../../components/MainAbout/MainAbout'
import Brands from '../../components/Brands/Brands'
import MainNewItems from '../../components/MainNewItems/MainNewItems'
import MainCatalog from '../../components/MainCatalog/MainCatalog'

const Main:FC = () => {
	return (
		<main className="Main">
			<MainAbout/>
			<Brands/>
			<MainNewItems/>
			<MainCatalog/>
		</main>
	)
}

export default Main
