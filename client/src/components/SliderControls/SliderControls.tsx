import {FC,ReactNode} from 'react'
import { useSwiper } from 'swiper/react'
interface ISliderControls {
	children:ReactNode;
	type:string;
	className?:string;
}
const SliderControls:FC<ISliderControls> = ({children,type,className}) => {
	const swiper = useSwiper()
  	if(type==='next') return 	<button onClick={()=>swiper.slideNext()} className={`btn-reset ${className}`}>{children}</button>
	else return 	<button onClick={()=>swiper.slidePrev()}  className={`btn-reset ${className}`}>{children}</button>
}

export default SliderControls
