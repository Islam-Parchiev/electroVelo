import {FC} from 'react'

import MainAbout from '@components/MainAbout/MainAbout'
import Brands from '@components/Brands/Brands'
import MainNewItems from '@components/MainNewItems/MainNewItems'
import MainCatalog from '@components/MainCatalog/MainCatalog'
import MainVideo from '@components/MainVideo/MainVideo'
import BestModels from '@components/BestModels/BestModels'
import MountainBikes from '@components/MountainBikes/MountainBikes'
import Advantages from '@components/Advantages/Advantages'
import Kit from '@components/Kit/Kit'
import Reviews from '@components/Reviews/Reviews'
import MainContacts from '@components/MainContacts/MainContacts'
import Subscribe from '@components/Subscribe/Subscribe'
import Header from '@components/Header/Header'

const Main:FC = () => {
	return (
		<>
			<Header/>
			<main className="Main">
				<MainAbout/>
				<Brands/>
				<MainNewItems/>
				<MainCatalog/>
				<MainVideo/>
				<BestModels/>
				<MountainBikes/>
				<Advantages/>
				<Kit/>
				<Reviews/>
				<MainContacts/>	
				<Subscribe/>
			</main>
		</>
	)
}

export default Main
