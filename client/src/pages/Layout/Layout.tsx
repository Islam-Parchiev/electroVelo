import {FC} from 'react'
import { Outlet } from 'react-router-dom'

import Footer from '@components/Footer/Footer'
const Layout:FC = () => {
 	 return (
		<>
		 <Outlet/>
		 <Footer/>
		</>
  	)
}

export default Layout
