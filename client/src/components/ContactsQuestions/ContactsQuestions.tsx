import React from 'react'

import ContactsAccordion from '@components/ContactsAccordion/ContactsAccordion'

import styles from './ContactsQuestions.module.scss'

interface ContactsQuestionsProps {}

const ContactsQuestions: React.FC<ContactsQuestionsProps> = props => {
	const {} = props
	return (
		<section className={styles.ContactsQuestions}>
			<div className="container">
				<div className={styles.ContactsQuestions__inner}>
					<h2 className={styles.ContactsQuestions__title}>
						Часто задаваемы евопросы
					</h2>
					<div className={styles.ContactsQuestions__accordions}>
						<ContactsAccordion accordionTitle="Получу ли я тот же товар, что и на картинке?">
							<div>
								<p>
									Consectetur cras scelerisque dis nec mi
									vestibulum ullamcorper turpis enim natoque
									tempus a malesuada suspendisse iaculis
									adipiscing himenaeos tincidunt.Tellus
									pharetra dis nostra urna a scelerisque id
									parturient ullamcorper ullamcorper class ad
									consectetur tristique et.
								</p>
								<p>
									Hendrerit mollis facilisi odio a montes
									scelerisque a scelerisque justo a praesent
									conubia aenean mi tempor.
								</p>
							</div>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Где я могу посмотреть чек о продаже?">
							<div>
								<p>
									Consectetur cras scelerisque dis nec mi
									vestibulum ullamcorper turpis enim natoque
									tempus a malesuada suspendisse iaculis
									adipiscing himenaeos tincidunt.Tellus
									pharetra dis nostra urna a scelerisque id
									parturient ullamcorper ullamcorper class ad
									consectetur tristique et.
								</p>
								<p>
									Hendrerit mollis facilisi odio a montes
									scelerisque a scelerisque justo a praesent
									conubia aenean mi tempor.
								</p>
							</div>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Как я могу вернуть товар?">
							<p>
								Consectetur cras scelerisque dis nec mi vestibulum
								ullamcorper turpis enim natoque tempus a malesuada
								suspendisse iaculis adipiscing himenaeos
								tincidunt.Tellus pharetra dis nostra urna a
								scelerisque id parturient ullamcorper ullamcorper
								class ad consectetur tristique et.
							</p>
							<p>
								Hendrerit mollis facilisi odio a montes
								scelerisque a scelerisque justo a praesent conubia
								aenean mi tempor.
							</p>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="Будете ли вы пополнять запасы товаров, помеченных как «нет в наличии»?">
							<p>
								Consectetur cras scelerisque dis nec mi vestibulum
								ullamcorper turpis enim natoque tempus a malesuada
								suspendisse iaculis adipiscing himenaeos
								tincidunt.Tellus pharetra dis nostra urna a
								scelerisque id parturient ullamcorper ullamcorper
								class ad consectetur tristique et.
							</p>
							<p>
								Hendrerit mollis facilisi odio a montes
								scelerisque a scelerisque justo a praesent conubia
								aenean mi tempor.
							</p>
						</ContactsAccordion>
						<ContactsAccordion accordionTitle="С какими видами доставки вы работаете?">
							<p>
								Consectetur cras scelerisque dis nec mi vestibulum
								ullamcorper turpis enim natoque tempus a malesuada
								suspendisse iaculis adipiscing himenaeos
								tincidunt.Tellus pharetra dis nostra urna a
								scelerisque id parturient ullamcorper ullamcorper
								class ad consectetur tristique et.
							</p>
							<p>
								Hendrerit mollis facilisi odio a montes
								scelerisque a scelerisque justo a praesent conubia
								aenean mi tempor.
							</p>
						</ContactsAccordion>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ContactsQuestions
