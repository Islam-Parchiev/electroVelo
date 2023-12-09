import React from 'react'
import { RootState, useAppDispatch,useAppSelector } from '@redux/store'
import { changeCategory, toggleAvailable,changeBrand,changePrice,changeMaterial, changeColor,resetFilters } from '@redux/slices/filtersSlice'

export function useFilters(){
	const dispatch = useAppDispatch()

	const selectedCategories = useAppSelector(
		(state: RootState) => state.filters.selectedCategories,
	)
	console.log(selectedCategories);

	const selectedColors = useAppSelector((state:RootState)=>state.filters.selectedColors)
	
	const availableValue = useAppSelector((state: RootState) => state.filters.available)
	const brandValue=useAppSelector((state:RootState)=>state.filters.selectedBrands)
	const priceValue = useAppSelector((state:RootState)=> state.filters.price)
	const selectedMaterials = useAppSelector((state:RootState)=> state.filters.selectedMaterials);

	const handleCategoryToggle = (category: string) => {
		dispatch(changeCategory(category))
	}
	const handleColorChange = (color:string)=> {
		dispatch(changeColor(color));
	 }
	const handleMaterialToggle=(material:string)=> {
		dispatch(changeMaterial(material));
	}
	const handleAvailable = (value: boolean) => {
		dispatch(toggleAvailable(value))
	}
	const handleBrand=(value:string)=> {
		dispatch(changeBrand(value))
	}
	const handleInputMin=(e:any)=> {
		e.preventDefault(); 
		setValue({ ...value, min: +e.target.value })
		dispatch(changePrice({...priceValue,min:+e.target.value}));
	}
	const handleInputMax=(e:any)=> {
		e.preventDefault(); 
		setValue({ ...value, max: +e.target.value })
		dispatch(changePrice({...priceValue,max:+e.target.value}));
	}
	const handleButtonReset = ()=> {
		dispatch(resetFilters({
			available:false,
			selectedCategories:[],
			price:{
				min:0,
				max:1000000,
			},
			selectedBrands:[],
			selectedMaterials:[],
			selectedColors:[],
		}))
	}
	const [value, setValue] = React.useState({ min: priceValue.min, max: priceValue.max })
	const [val, setVal] = React.useState(1);
	const [secondVal,setSecondVal]=React.useState(1);
	const colors = ['#F2F1EF','#38D5C8','#ACB690','#CC7E3B',
		'#740222','#44ACFB','#FEF95F','#0D7F19','#FFD536',
		'#FE7E56','#AC632C','#FD0012','#25FD3C','#353839','#FEA32A','#E5E4E2',
		'#79526F','#FEC0CB','#BDBDBD','#7F7F7F','#0026F9','#49423D','#061E42',
		'#8926F9','#000'];

	return {
		selectedCategories,
		selectedColors,
		availableValue,
		brandValue,
		selectedMaterials,
		handleCategoryToggle,
		handleColorChange,
		handleMaterialToggle,
		handleAvailable,
		handleBrand,
		handleInputMin,
		handleInputMax,
		handleButtonReset,
		colors,
		setVal,
		setValue,
		priceValue,
		setSecondVal,
	}
}
