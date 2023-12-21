import { useEffect, useState } from 'react'

export function useDebounce(value: any, delay: number = 300): any {
	const [debounced, setDebounced] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => setDebounced(value), delay)
		return () => clearTimeout(handler)
	}, [value, delay])

	return debounced
}
// const debounced = useDebounce(search)
