import { useState } from 'react'

import { useAppSelector } from '@redux/store'
import { useQuery } from '@tanstack/react-query'
import productService from '@services/product.service'
import { ICard } from 'Card'

export function useCatalog() {
	const [page, setPage] = useState(1)
	const sortProperty = useAppSelector(state => state.sort.sortProperty)
	const availableValue = useAppSelector(state => state.filters.available)
	const categoriesValue = useAppSelector(state => state.filters.selectedCategories)
	const materialsValue = useAppSelector(state => state.filters.selectedMaterials)
	const {data,isLoading,isSuccess} = useQuery<{ data: any }>({
		queryKey: [
			'catalogProducts',
			page,
			sortProperty,
			availableValue,
			categoriesValue,
			materialsValue,
		],
		queryFn: () =>
			productService.getProductsByFilters(
				page,
				6,
				sortProperty,
				availableValue.toString(),
				categoriesValue,
				materialsValue,
			),
	})
	const products:ICard[] =data?.data.data;
	console.log('useCatalog',products);
	const totalPages:number = data?.data.totalPages;
	return {products,totalPages,page,setPage,isLoading,isSuccess}
}
