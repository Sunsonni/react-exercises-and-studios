import { useState } from 'react'
import './App.css'
import RecipeDescription from './Components/Description'
import RecipeIngredients from './Components/Ingredients'
import RecipePhoto from './Components/Photos'

function App() {
  return (
   <>
    <div className='App'>
      <div className='recipePhotoBlock'>
      <RecipePhoto/>
      <div className='recipePhotoBlock'>
        <RecipeDescription/>
        <RecipeIngredients/>
      </div>
      </div>
    </div>
   </>
  )
}

export default App
