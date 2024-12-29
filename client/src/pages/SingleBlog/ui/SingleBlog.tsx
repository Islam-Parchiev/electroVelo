import { FC } from 'react'

// import { useParams } from 'react-router-dom';

import SingleBlogContent from '@pages/SingleBlog/ui/SingleBlogContent/SingleBlogContent';

import Header from '../../../widgets/Header/Header'
import Subscribe from '../../../widgets/Subscribe/Subscribe'

export const SingleBlog: FC = () => {
	// const {id} = useParams();
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="SingleBlog">
				<SingleBlogContent />
				<Subscribe />
				{/* {id} */}
			</main>
		</>
	)
}

