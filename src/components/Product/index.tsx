import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'
import { useAppSelector } from '../../App/hooks'
import { selectTheme } from '../../App/reducers/switchTheme'
import ic_favorite_unselected from '../../assets/images/icons/ic_favorite_unselected.svg'
import ic_favorite_selected from '../../assets/images/icons/ic_favorite_selected.svg'
import { IProduct } from '../../models/interfaces'
import { useGetSmallImageQuery } from '../../App/reducers/goodsApi'

type Props = {
  product: IProduct
}

export default function Product({ product }: Props) {
  const navigate = useNavigate();
  const themeValue = useAppSelector(selectTheme);
  const [favorite, setFavorite] = useState(ic_favorite_unselected);
  const { data: image } = useGetSmallImageQuery(product.SmallImage);

  function addToFavorites(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setFavorite(value => {
      return value === ic_favorite_unselected ? ic_favorite_selected : ic_favorite_unselected;
    });
  }

  function openProduct(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    return navigate('details', { replace: false });
  }

  return (
    <div className={`product product_${themeValue}`}>
      <div className='product__imgContainer'>
        <button className='product__imgButton' onClick={openProduct}>
          <img src={image} alt="img" className='product__img' />
        </button>
        <button className='product__favoritesBtn' onClick={addToFavorites}>
          <img src={favorite} alt="icon" />
        </button>
      </div>
      <h2 className='product__title'>{product.ProductTitle}</h2>
      <h3 className='product__subtitle'>{product.ProductSubtitle}</h3>
      <p className='product__price'><span>&#36;</span>{product.UnitPrice}</p>
      <button className='product__addBtn'>Add to Cart</button>
    </div>
  )
}