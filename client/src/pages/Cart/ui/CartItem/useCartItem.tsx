import React from 'react'

import { UseMutateFunction, useMutation, useQueryClient } from '@tanstack/react-query'

import cartService from '../../../../shared/services/cart.service'

import { useDebounce } from '../../../../shared/lib/useDebounce'

interface IReturnDataUseCartItem {
	debounced: number
	isSuccess: boolean
	mutate: UseMutateFunction<any, Error, number, unknown>
	onClickMinus: () => void
	onClickPlus: () => void
	countt: number
}

export function useCartItem(count: number, id: number): IReturnDataUseCartItem {
	const [countt, setCountt] = React.useState(count)
	const queryClient = useQueryClient()
	const debounced = useDebounce<number>(countt, 300)
	const { isSuccess, mutate } = useMutation({
		mutationFn: (id: number) => {
			return cartService.deleteCartItem(id)
		},

		mutationKey: ['cartItem delete'],
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cartItems'] }),
	})
	const changeQ = useMutation({
		mutationFn: () => {
			const data = cartService.changeQuantity(id, countt)
			console.log('changeQ', data)
			return data
		},
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cartItems'] }),
		mutationKey: ['cartItem update', countt],
	})

	const onClickMinus = () => {
		setCountt(prev => prev - 1)
		changeQ.mutate()
		console.log('-')
	}
	const onClickPlus = () => {
		setCountt(prev => prev + 1)
		changeQ.mutate()
		console.log('+')
	}
	return {
		debounced,
		isSuccess,
		mutate,
		onClickMinus,
		onClickPlus,
		countt,
	}
}
