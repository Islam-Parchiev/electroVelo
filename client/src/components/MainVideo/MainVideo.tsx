import { FC, useState, useRef } from 'react'

import MainVideoItem from '../MainVideoItem/MainVideoItem'

import styles from './MainVideo.module.scss'
const MainVideo: FC = () => {
	const [play, setPlay] = useState(false)
	const videoRef = useRef<HTMLVideoElement>(null)

	const onPlay = () => {
		videoRef?.current?.play()
		setPlay(true)
	}
	const onStop = () => {
		videoRef?.current?.pause()
		setPlay(false)
	}
	return (
		<section className={styles.MainVideo}>
		
			<div className="container">
				<div className={styles.MainVideo__inner}>			
					<h2 className="title">Ничего не&nbsp;сможет остановить вас</h2>
					<div className={styles.MainVideo__info}>
						<p>
							Наша компания специализируется на продаже товаров
							для велосипедного спорта — велосипедов, запасных
							частей, аксессуаров и различного спортивного инвентаря
							для активного спорта и отдыха.
						</p>
						<button className={`btn-reset ${styles.MainVideo__btn}`}>
							Подробнее
						</button>
				
					</div>
				</div>
				
			</div>
			<div className={styles.MainVideo__body}>
				<video
					onClick={onStop}
					ref={videoRef}
					src="/vidtou.mp4"
					poster="/images/Main/videoPreview.jpg"></video>
				{play === false && (
					<button className="btn-reset" onClick={onPlay}>
						<svg
						
							viewBox="0 0 53 60"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M49.5259 25.6729C52.8523 27.5987 52.8523 32.4013 49.5259 34.3271L7.50518 
						58.6549C4.17185 60.5847 2.10133e-07 58.1794 3.7803e-07 54.3278L2.49896e-06 
						5.67224C2.66686e-06 1.82058 4.17185 -0.584717 7.50518 1.34511L49.5259 25.6729Z"
								fill="#F57520"
							/>
						</svg>
					</button>
				)}
			</div>
			<div className={styles.MainVideo__footer}>
				<div className={`container ${styles.MainVideo__footer_container}`}>
					<ul className={`list-reset ${styles.MainVideo__items}`}>
						<MainVideoItem />
						<MainVideoItem />
						<MainVideoItem />
						<MainVideoItem />
					</ul>
				</div>
			</div>
		</section>
	)
}

export default MainVideo
