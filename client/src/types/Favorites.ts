import { ICard } from 'Card'

export interface FavoritesItem {
	id: number
	product: ICard
}
export interface FavoritesData {
	id: number
	items: FavoritesItem[]
}
