import { FC } from 'react'


import BlogPreview from '@pages/Blog/ui/BlogPreview/BlogPreview';
import BlogContent from '@pages/Blog/ui/BlogContent/BlogContent';

import Brands from '../../../widgets/Brands/Brands'
import Subscribe from '../../../widgets/Subscribe/Subscribe'
import Header from '../../../widgets/Header/Header'


export const Blog: FC = () => {
	return (
		<>
			<Header otherClass="FixedHeader" />
			<main className="Blog">
				<BlogPreview />
				<BlogContent />
				<Brands />
				<Subscribe />
			</main>
		</>
	)
}

