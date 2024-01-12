import React from 'react'

import Breadcrumbs from '@components/Breadcrumbs/Breadcrumbs'

import styles from './SingleBlogContent.module.scss'

const SingleBlogContent: React.FC = () => {
	return (
		<section className={styles.SingleBlogContent}>
			<div className="container">
				<Breadcrumbs 
					paths={['Главная','Блог','Pinarello Dogma F развивает карбоновый шоссейный велосипед следующего поколения, сохраняя возможность выбора ободного тормоза!']}
					color="b"
				/>
				<h1 className={styles.SingleBlogContent__title}>
					Pinarello Dogma F развивает карбоновый шоссейный велосипед
					следующего поколения, сохраняя возможность выбора ободного
					тормоза!
				</h1>
				<div className={styles.SingleBlog__inner}>
					<div className={styles.Paragraph}>
						<h4 className={styles.Paragraph__title}>
							2022 Pinarello Dogma F изогнутый аэродинамический
							шоссейный гоночный велосипед из карбона
						</h4>
						<div className={styles.Paragraph__content}>
							<div className={styles.Paragraph__image}>
								<img src="/images/Blog/1.png" alt="" />
							</div>
							<div className={styles.Paragraph__text}>
								<p>
									Форма нового шоссейного аэродинамического
									велосипеда Pinarello Dogma F не сильно
									отличается от предыдущей Dogma, за
									исключением более плоского верха и чуть более
									опущенных перьев сиденья. Но что интересно,
									номерное обозначение было заменено с самой
									последней Dogma F12 на эту новую Dogma F
									седьмого поколения, что, по словам Пинарелло,
									упрощает связь мотоциклов с его давним
									прошлым (с 2000 года) и его «неопровержимым»
									превосходством, простирающимся в будущее.
								</p>
								<p>
									Это также намёк на универсальность нового
									мотоцикла. В то время как у предыдущих
									поколений были версии для альпинистов
									или спринтеров, эта новая Pinarello Dogma F
									предназначена для того, чтобы стать
									сбалансированным универсальным гонщиком.
								</p>
							</div>
						</div>
					</div>
					<div className={styles.Paragraph}>
						<h4 className={styles.Paragraph__title}>
							2022 Pinarello Dogma F изогнутый аэродинамический
							шоссейный гоночный велосипед из карбона
						</h4>
						<div className={styles.Paragraph__content}>
							<div className={styles.Paragraph__image}>
								<img src="/images/Blog/1.png" alt="" />
							</div>
							<div className={styles.Paragraph__text}>
								<p>
									Форма нового шоссейного аэродинамического
									велосипеда Pinarello Dogma F не сильно
									отличается от предыдущей Dogma, за
									исключением более плоского верха и чуть более
									опущенных перьев сиденья. Но что интересно,
									номерное обозначение было заменено с самой
									последней Dogma F12 на эту новую Dogma F
									седьмого поколения, что, по словам Пинарелло,
									упрощает связь мотоциклов с его давним
									прошлым (с 2000 года) и его «неопровержимым»
									превосходством, простирающимся в будущее.
								</p>
								<p>
									Это также намёк на универсальность нового
									мотоцикла. В то время как у предыдущих
									поколений были версии для альпинистов
									или спринтеров, эта новая Pinarello Dogma F
									предназначена для того, чтобы стать
									сбалансированным универсальным гонщиком.
								</p>
							</div>
						</div>
					</div>
					<div className={styles.Paragraph}>
						<h4 className={styles.Paragraph__title}>
							2022 Pinarello Dogma F изогнутый аэродинамический
							шоссейный гоночный велосипед из карбона
						</h4>
						<div className={styles.Paragraph__content}>
							<div className={styles.Paragraph__image}>
								<img src="/images/Blog/1.png" alt="" />
							</div>
							<div className={styles.Paragraph__text}>
								<p>
									Форма нового шоссейного аэродинамического
									велосипеда Pinarello Dogma F не сильно
									отличается от предыдущей Dogma, за
									исключением более плоского верха и чуть более
									опущенных перьев сиденья. Но что интересно,
									номерное обозначение было заменено с самой
									последней Dogma F12 на эту новую Dogma F
									седьмого поколения, что, по словам Пинарелло,
									упрощает связь мотоциклов с его давним
									прошлым (с 2000 года) и его «неопровержимым»
									превосходством, простирающимся в будущее.
								</p>
								<p>
									Это также намёк на универсальность нового
									мотоцикла. В то время как у предыдущих
									поколений были версии для альпинистов
									или спринтеров, эта новая Pinarello Dogma F
									предназначена для того, чтобы стать
									сбалансированным универсальным гонщиком.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SingleBlogContent
