import React from 'react'
import './isLoading.css'

const IsLoading = () => {
  return (
    <div>
      <p className='isLoading__p'>Un proyectito más de:</p>
      <img
        className='isLoading__img'
        src="/kluvo-logo.png"  // Ruta relativa a la carpeta 'public'
        alt="Kluvo Logo" 
      />
    </div>
  )
}

export default IsLoading
