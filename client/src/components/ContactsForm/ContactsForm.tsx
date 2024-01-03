import React from 'react'

import FormInput from '@components/FormInput/FormInput'
import Button from '@components/Button/Button'

import styles from './ContactsForm.module.scss'

const ContactsForm: React.FC = () => {
	return (
		<section className={styles.ContactsForm}>
			<div className="container">
				<div className={styles.ContactsForm__inner}>
					<h2 className={styles.ContactsForm__title}>
						СВЯЖИТЕСЬ С НАМИ ПО ЛЮБЫМ ВОПРОСАМ
					</h2>
					<form className={styles.Form}>
						<div className={styles.Form__top}>
							<FormInput
								error={'error'}
								inputType="secondary"
								labelTitle="Имя"
								type="text"
								validationSchema={undefined}
								anotherClass={styles.Form__input}
							/>
							<FormInput
								error={'error'}
								inputType="secondary"
								labelTitle="E-mail"
								type="text"
								validationSchema={undefined}
								anotherClass={styles.Form__input}
							/>
							<FormInput
								error={'error'}
								inputType="secondary"
								labelTitle="Телефон"
								type="text"
								validationSchema={undefined}
								anotherClass={styles.Form__input}
							/>
							<FormInput
								error={'error'}
								inputType="secondary"
								labelTitle="Компания"
								type="text"
								validationSchema={undefined}
								anotherClass={styles.Form__input}
							/>
						</div>
						<textarea className={styles.Form__textarea} placeholder="Сообщение"></textarea>
						<Button otherClass={styles.Form__submit}>Задать вопрос</Button>
					</form>
				</div>
			</div>
		</section>
	)
}

export default ContactsForm
