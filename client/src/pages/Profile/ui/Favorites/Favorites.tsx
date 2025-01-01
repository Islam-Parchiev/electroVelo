import React from 'react'

import { useQuery } from '@tanstack/react-query'

import ProfileTitle from '@pages/Profile/ui/ProfileTitle/ProfileTitle'

import { FavoritesData } from '../../../../shared/types/Favorites'

import { Card } from '../../../../shared/ui'

import favoritesService from '../../../../shared/services/favorites.service'

import styles from './Favorites.module.scss'

const Favorites: React.FC = () => {
	const { data, isLoading, isSuccess } = useQuery<FavoritesData>({
		queryKey: ['favoritesItems'],
		queryFn: () => favoritesService.findAllFavorites(),
	})
	console.log(data)
	return (
		<div className={styles.Favorites}>
			<div className={styles.Favorites__wrapper}>
				<ProfileTitle>Список желаний</ProfileTitle>
				{data && data?.items.length > 0 ? (
					<ul className={`list-reset ${styles.Favorites__items}`}>
						{isLoading
							? 'loading'
							: isSuccess
								? data?.items.map(item => (
									<Card
										id={item.product.id}
										type={'primary'}
										previewImage={item.product.previewImage}
										available={item.product.available}
										country={item.product.country}
										prevPrice={item.product.prevPrice}
										price={item.product.price}
										title={item.product.title}
										key={item.id}
										otherClass={styles.Favorites__item}
									/>
								))
								: 'Error'}
					</ul>
				) : (
					<div className={styles.Favorites__empty}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="211"
							height="188"
							viewBox="0 0 211 188"
							fill="none">
							<path
								d="M190.239 89.7069L105.5 177.897L20.7611 89.7071C20.7611 89.707 20.761 89.707 20.761 
							89.7069C12.0599 80.6509 7.125 68.3119 7.125 55.3901C7.125 28.399 28.0802 7 53.3475 7C65.5141 
							7 77.2418 12.0274 85.9341 21.0733C85.9341 21.0733 85.9342 21.0734 85.9342 21.0734L100.452 
							36.1833C101.772 37.557 103.595 38.3334 105.5 38.3334C107.405 38.3334 109.228 37.557 110.548 
							36.1833L125.066 21.0734C125.066 21.0734 125.066 21.0733 125.066 21.0733C133.758 12.0274 
							145.486 7 157.652 7C182.919 7 203.875 28.399 203.875 55.3901C203.875 68.312 198.94 80.6511 190.239 89.7069Z"
								stroke="#F57520"
								strokeWidth="14"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<span>В списке пока нет ни одного избранного товара</span>
					</div>
				)}
			</div>
		</div>
	)
}

export default Favorites
