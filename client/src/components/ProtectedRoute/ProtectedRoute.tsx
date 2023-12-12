import { FC } from 'react'

import { useAuth } from '../../hooks/useAuth'

interface Props {
	children: JSX.Element
}

const ProtectedRoute: FC<Props> = ({ children }) => {
	const isAuth = useAuth()
	return (
		<>
			{isAuth ? (
				children
			) : (
				<h1>Not auth</h1>
			)}
		</>
	)
}

export default ProtectedRoute
