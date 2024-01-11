import {FC} from 'react'

import Header from '@components/Header/Header'

import BlogPreview from '@components/BlogPreview/BlogPreview';
import BlogContent from '@components/BlogContent/BlogContent';
import Brands from '@components/Brands/Brands'
import Subscribe from '@components/Subscribe/Subscribe'


const Blog:FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader"/>
			<main className="Blog">
				<BlogPreview/>
				<BlogContent/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Blog
