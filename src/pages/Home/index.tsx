import React from 'react';
import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import Filters from '../../components/Filters';
import Menu from '../../components/Menu';
import { useAppSelector } from '../../App/hooks';
import { selectTheme } from '../../App/reducers/switchTheme';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Home() {
  const themeValue = useAppSelector(selectTheme);

  return (
    <div className={`home home_${themeValue}`}>
      <div className='home__wrapper'>
        <Header className='home__header'>Let's eat<br></br>Quality food</Header>
        <div className='home__main'>
          <SearchBar className='home__searchBar' />
          <Filters className='home__filters' />
          <Menu goods={arr} className='home__menu' />
        </div>
        <Footer />
      </div>
    </div>
  )
}