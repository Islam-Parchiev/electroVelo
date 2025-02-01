import React from 'react'

import { Button, Checkbox } from '../../shared/ui'

import styles from './Subscribe.module.scss'

const Subscribe: React.FC = () => {
	const [check, setCheck] = React.useState(true)
	const [value, setValue] = React.useState(1)
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
						{/* TODO:fix Checkbox */}
						<Checkbox
							text="Согласен(на) на обработку персональных данных"
							otherClass={styles.Subscribe__checkbox}
							check={check}
							setCheck={setCheck}
							value={value}
							setValue={setValue}
						/>
					</div>

					<Button otherClass={styles.Subscribe__submit} handleClick={() => console.log('click')}>
						Подписаться
					</Button>
				</form>
			</div>
		</section>
	)
}

export default Subscribe
