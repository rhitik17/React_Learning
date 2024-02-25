import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import ProductList from './components/ProductList';
import FilteredProduct from './components/FilterableProduct';


function App() {
  return(
    <>
    <ProductList/>
   <FilteredProduct/> 
   
    </>
  )
}
export default App
