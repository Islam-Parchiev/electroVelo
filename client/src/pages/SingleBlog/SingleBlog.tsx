import {FC} from 'react'

import { useParams } from 'react-router-dom';

import SingleBlogContent from '@components/SingleBlogContent/SingleBlogContent';
import Subscribe from '@components/Subscribe/Subscribe'
import Header from '@components/Header/Header'

const SingleBlog:FC = () => {
	const {id} = useParams();
	return (
		<>
			<Header otherClass="FixedHeader"/>
			<main className="SingleBlog">
				<SingleBlogContent/>
				<Subscribe/>
				{id}
			</main>
		</>
	)
}

export default SingleBlog
