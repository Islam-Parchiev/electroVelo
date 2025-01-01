import { FC } from 'react'

import StoragePreview from '@pages/Storage/ui/StoragePreview/StoragePreview';
import StorageContent from '@pages/Storage/ui/StorageContent/StorageContent';

import Header from '../../../widgets/Header/Header'
import Brands from '../../../widgets/Brands/Brands'
import Subscribe from '../../../widgets/Subscribe/Subscribe'
export const Storage: FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="Storage">
				<StoragePreview />
				<StorageContent />
				<Brands />
				<Subscribe />
			</main>
		</>
	)
}
