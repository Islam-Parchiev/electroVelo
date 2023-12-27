import React from 'react'

import ProfileTitle from '@components/ProfileTitle/ProfileTitle';
import Card from '@components/Card/Card';

import styles from './Favorites.module.scss'

interface FavoritesProps {}

const Favorites:React.FC<FavoritesProps> = (props) => {
	const {} = props;
	return (
		<div className={styles.Favorites}>
			<div className={styles.Favorites__wrapper}>
				<ProfileTitle>Список желаний</ProfileTitle>
				<ul className={`list-reset ${styles.Favorites__items}`}>
					<Card 
						id={0} 
						type={'primary'}
						images={['pre1.1.png']} 
						available={true}
						countrySrc={'France.png'}
						price="123"
						title="Test"
						key={1}
						otherClass={styles.Favorites__item}
					/>
						<Card 
						id={0} 
						type={'primary'}
						images={['pre1.1.png']} 
						available={true}
						countrySrc={'France.png'}
						price="123"
						title="Test"
						key={1}
						otherClass={styles.Favorites__item}
					/>
						<Card 
						id={0} 
						type={'primary'}
						images={['pre1.1.png']} 
						available={true}
						countrySrc={'France.png'}
						price="123"
						title="Test"
						key={1}
						otherClass={styles.Favorites__item}
					/>
						<Card 
						id={0} 
						type={'primary'}
						images={['pre1.1.png']} 
						available={true}
						countrySrc={'France.png'}
						price="123"
						title="Test"
						key={1}
						otherClass={styles.Favorites__item}
					/>
						<Card 
						id={0} 
						type={'primary'}
						images={['pre1.1.png']} 
						available={true}
						countrySrc={'France.png'}
						price="123"
						title="Test"
						key={1}
						otherClass={styles.Favorites__item}
					/>

					
				</ul>
			</div>
		</div>
	)
}

export default Favorites
