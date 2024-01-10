import {FC} from 'react'

import { useParams } from 'react-router-dom';

import SingleBlogContent from '@components/SingleBlogContent/SingleBlogContent';
import Subscribe from '@components/Subscribe/Subscribe'
import Header from '@components/Header/Header'

import styles from './SingleBlog.module.scss';

const SingleBlog:FC = () => {
	const {id} = useParams();
	return (
		<>
			<Header otherClass={styles.SingleBlog__header}/>
			<main className={styles.SingleBlog}>
				<SingleBlogContent/>
				<Subscribe/>
				{id}
			</main>
		</>
	)
}

export default SingleBlog
