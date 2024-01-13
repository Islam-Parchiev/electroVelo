import React from 'react'
import ContentLoader from 'react-content-loader'

interface ISkeleton {
	type:'primary'|'seconadry'
}

const Skeleton: React.FC<ISkeleton> = props => {
	const {
		type,
	} = props;
	return (
		<ContentLoader
			title="Loading..."
			speed={2}
			width={type==='primary'?400:290}
			height={type==='primary'?519:420}
			viewBox="0 0 400 529"
			backgroundColor="#a3a3a3"
			foregroundColor="#ededed"
			{...props}>
			{/* <rect x="5" y="22" rx="0" ry="0" width="399" height="3" /> */}
			{/* <rect x="2" y="22" rx="0" ry="0" width="3" height="512" /> */}
			{/* <rect x="3" y="526" rx="0" ry="0" width="399" height="3" /> */}
			{/* <rect x="397" y="22" rx="0" ry="0" width="3" height="512" /> */}
			<rect x="2" y="22" rx="8" ry="8" width="88" height="46" />
			<rect x="297" y="45" rx="6" ry="6" width="85" height="11" />
			<rect x="15" y="80" rx="33" ry="33" width="371" height="300" />
			<rect x="15" y="394" rx="8" ry="8" width="372" height="39" />
			<rect x="15" y="446" rx="7" ry="7" width="106" height="18" />
			<rect x="15" y="476" rx="14" ry="14" width="367" height="45" />
		</ContentLoader>
	)
}
export default Skeleton
