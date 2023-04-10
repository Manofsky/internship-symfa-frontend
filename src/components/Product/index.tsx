import React, { useState } from 'react'
import './style.scss'
import { useAppSelector } from '../../App/hooks'
import { selectTheme } from '../../App/reducers/switchTheme'
import ic_favorite_unselected from '../../assets/images/icons/ic_favorite_unselected.svg'
import ic_favorite_selected from '../../assets/images/icons/ic_favorite_selected.svg'

export default function Product() {
  const themeValue = useAppSelector(selectTheme);

  const [favorite, setFavorite] = useState(ic_favorite_unselected);

  function addToFavorites(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setFavorite(value => {
      return value === ic_favorite_unselected ? ic_favorite_selected : ic_favorite_unselected;
    });
  }
  // product
  return (
    <div className={`product product_${themeValue}`}>
      <div className='product__img'>
        <button className='product__favoritesBtn' onClick={addToFavorites}>
          <img src={favorite} alt="icon" />
        </button>
      </div>
      <h2 className='product__title'>Title</h2>
      <h3 className='product__subtitle'>Subtitle</h3>
      <p className='product__price'><span>&#36;</span>8.50</p>
      <button className='product__addBtn'>Add to Cart</button>
    </div>
  )
}