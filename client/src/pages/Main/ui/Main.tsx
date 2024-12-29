import { FC } from 'react'

import MainAbout from '@pages/Main/ui/MainAbout/MainAbout'
import MainNewItems from '@pages/Main/ui/MainNewItems/MainNewItems'
import MainCatalog from '@pages/Main/ui/MainCatalog/MainCatalog'
import MainVideo from '@pages/Main/ui/MainVideo/MainVideo'
import BestModels from '@pages/Main/ui/BestModels/BestModels'
import MountainBikes from '@pages/Main/ui/MountainBikes/MountainBikes'
import Advantages from '@pages/Main/ui/Advantages/Advantages'
import Kit from '@pages/Main/ui/Kit/Kit'
import Reviews from '@pages/Main/ui/Reviews/Reviews'
import MainContacts from '@pages/Main/ui/MainContacts/MainContacts'

import Subscribe from '../../../widgets/Subscribe/Subscribe'
import Brands from '../../../widgets/Brands/Brands'

import Header from '../../../widgets/Header/Header'

export const Main: FC = () => {
	return (
		<>
			<Header />
			<main className="Main">
				<MainAbout />
				<Brands />
				<MainNewItems />
				<MainCatalog />
				<MainVideo />
				<BestModels />
				<MountainBikes />
				<Advantages />
				<Kit />
				<Reviews />
				<MainContacts />
				<Subscribe />
			</main>
		</>
	)
}
