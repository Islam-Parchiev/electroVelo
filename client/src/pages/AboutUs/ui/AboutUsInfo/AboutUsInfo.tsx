import React from 'react'

import AboutUsCard from '@pages/AboutUs/ui/AboutUsCard/AboutUsCard'

import styles from './AboutUsInfo.module.scss'

const AboutUsInfo: React.FC = () => {
	return (
		<section className={styles.AboutUsInfo}>
			<div className="container">
				<div className={styles.AboutUsInfo__inner}>
					<h2 className={styles.AboutUsInfo__title}>
						<span>Велосипед</span> – это не просто средство
						передвижения!
					</h2>
					<ul className={`list-reset ${styles.AboutUsInfo__cards}`}>
						<AboutUsCard
							title="Хранение"
							description="Любишь кататься — люби и велосипед в квартире на
								зиму парковать или сдавай к нам на хранение и
								обслуживание."
						/>
						<AboutUsCard
							title="Хранение"
							description="Любишь кататься — люби и велосипед в квартире на
								зиму парковать или сдавай к нам на хранение и
								обслуживание."
						/>
						<AboutUsCard
							title="Хранение"
							description="Любишь кататься — люби и велосипед в квартире на
								зиму парковать или сдавай к нам на хранение и
								обслуживание."
						/>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default AboutUsInfo
