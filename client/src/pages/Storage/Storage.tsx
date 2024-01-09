import {FC} from 'react'

import Header from '@components/Header/Header'
import Brands from '@components/Brands/Brands'
import StoragePreview from '@components/StoragePreview/StoragePreview';
import StorageContent from '@components/StorageContent/StorageContent';
import Subscribe from '@components/Subscribe/Subscribe'

import styles from './Storage.module.scss';

const Storage:FC = () => {
	return (
		<>
			<Header otherClass={styles.Storage__header}/>
			<main className={styles.Storage}>
				<StoragePreview/>
				<StorageContent/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Storage
