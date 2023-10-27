import {FC} from 'react'


import MainAbout from '@components/MainAbout/MainAbout'
import Brands from '@components/Brands/Brands'
import MainNewItems from '@components/MainNewItems/MainNewItems'
import MainCatalog from '@components/MainCatalog/MainCatalog'
import MainVideo from '@components/MainVideo/MainVideo'
import BestModels from '@components/BestModels/BestModels'
import MountainBikes from '@components/MountainBikes/MountainBikes'

const Main:FC = () => {
	return (
		<main className="Main">
			<MainAbout/>
			<Brands/>
			<MainNewItems/>
			<MainCatalog/>
			<MainVideo/>
			<BestModels/>
			<MountainBikes/>
		</main>
	)
}

export default Main
