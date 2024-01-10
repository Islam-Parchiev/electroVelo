import {FC} from 'react'

import Header from '@components/Header/Header'

import BlogPreview from '@components/BlogPreview/BlogPreview';
import BlogContent from '@components/BlogContent/BlogContent';
import Brands from '@components/Brands/Brands'
import Subscribe from '@components/Subscribe/Subscribe'

import styles from './Blog.module.scss';

const Blog:FC = () => {
	return (
		<>
			<Header otherClass={styles.Blog__header}/>
			<main className={styles.Blog}>
				<BlogPreview/>
				<BlogContent/>
				<Brands/>
				<Subscribe/>
			</main>
		</>
	)
}

export default Blog
