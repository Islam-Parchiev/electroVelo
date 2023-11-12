import React from 'react'

import SwitchCheckbox from '@components/SwitchCheckbox/SwitchCheckbox'
import Accordion from '@components/Accordion/Accordion'

import styles from './Filters.module.scss'

interface FiltersProps {}

const Filters: React.FC<FiltersProps> = props => {
	
	const [checked, setChecked] = React.useState<boolean>(false)
	const {} = props
	return (
		<div className={styles.Filters}>
			<SwitchCheckbox
				value={checked}
				text="Только в наличии"
				handleClick={setChecked}
			/>

			<Accordion accordionTitle="Tile">
				<div>content</div>
				<div>content</div>
				<div>content</div>
				<div>content</div>
			</Accordion>
			{/* <div className="accordion">

  <section>
    <input type="checkbox" className={styles.accordion__checkbox} id="accordion-heading-1"/>
    <label className={styles.accordion__heading} htmlFor="accordion-heading-1">Меню 1</label>
    <div className={styles.accordion__content}>
      <p>Текст 1</p>
      <p>Текст 1</p>
      <p>Текст 1</p>
    </div>
  </section>

  <section>
    <input type="checkbox" className={styles.accordion__checkbox} id="accordion-heading-2"/>
    <label className={styles.accordion__heading} htmlFor="accordion-heading-2">Меню 2</label>
    <div className={styles.accordion__content}>
      <p>Текст 2</p>
      <p>Текст 2</p>
      <p>Текст 2</p>
    </div>
  </section>

  <section>
    <input type="checkbox" className={styles.accordion__checkbox} id="accordion-heading-3"/>
    <label className={styles.accordion__heading} htmlFor="accordion-heading-3">Меню 3</label>
    <div className={styles.accordion__content}>
      <p>Текст 3</p>
      <p>Текст 3</p>
      <p>Текст 3</p>
    </div>
  </section>

</div> */}
		</div>
	)
}

export default Filters
