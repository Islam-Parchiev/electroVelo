import { useEffect, useState } from 'react'

export function useDebounce<T>(value: T, delay: number = 300):T {
	const [debounced, setDebounced] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => setDebounced(value), delay)
		return () => clearTimeout(handler)
	}, [value, delay])

	return debounced
}
// const debounced = useDebounce(search)
