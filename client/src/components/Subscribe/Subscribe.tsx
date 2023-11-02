import React, { useState } from 'react'

import Checkbox from '@components/Checkbox/Checkbox'
import Button from '@components/Button/Button';

import styles from './Subscribe.module.scss'


const Subscribe: React.FC = () => {
	const [check,setCheck]= useState(false);
	console.log('ccccc',check);
	return (
		<section className={styles.Subscribe}>
			<div className={`container ${styles.Subscribe__container}`}>
				<h2 className={`title ${styles.Subscribe__title}`}>
					Подпишитесь на наши новости
				</h2>
				<form className={styles.Subscribe__form}>
					<div className={styles.Subscribe__inputs}>
						<label className={styles.Subscribe__input}>
							<input
								type="text"
								className="input-reset"
								placeholder="E-main"
							/>
						</label>
				
						<Checkbox 
							text="Согласен(на) на обработку персональных данных"
							otherClass={styles.Subscribe__checkbox}
							check={check}
							setCheck={setCheck}/>
					</div>
					{/* <button className={`btn-reset btn ${styles.Subscribe__btn}`}>Подписаться</button> */}
					<Button handleClick={()=>console.log('click')}>Подписаться</Button>
				</form>
			</div>
		</section>
	)
}

export default Subscribe
