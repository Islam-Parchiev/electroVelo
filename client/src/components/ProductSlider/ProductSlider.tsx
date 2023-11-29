import React, { useRef, useState } from 'react'


import { Swiper, SwiperSlide } from 'swiper/react'

import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import styles from './ProductSlider.module.scss';


interface ProductSliderProps {}

const ProductSlider: React.FC<ProductSliderProps> = props => {
	const [thumbsSwiper, setThumbsSwiper] = useState<any>()
	const {} = props
	return (
		<div className={styles.ProductSlider}>
			<Swiper
				spaceBetween={10}
				navigation={true}
				thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
				modules={[FreeMode, Navigation, Thumbs]}
				className={styles.mySwiper2}>
				<SwiperSlide className={styles.ProductSlider__slide}>
					<img src="/images/Card/1.1.png" />
				</SwiperSlide>
				<SwiperSlide className={styles.ProductSlider__slide}>
				<img src="/images/Card/1.1.png" />
				</SwiperSlide>
		
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className={styles.mySwiper}>
				<SwiperSlide>
				<img src="/images/Card/1.1.png" />
				</SwiperSlide>
				<SwiperSlide>
						<img src="/images/Card/1.1.png" />
				</SwiperSlide>
	
			</Swiper>
		</div>
	)
}

export default ProductSlider
