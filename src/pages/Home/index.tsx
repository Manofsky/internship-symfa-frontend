import React from 'react';
import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import Filters from '../../components/Filters';
import Menu from '../../components/Menu';
import PageWrapper from '../../components/PageWrapper';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Home() {
  return (
    <PageWrapper>
      <Header>Let's eat<br></br>Quality food</Header>
      <div className='main'>
        <SearchBar className='main__searchBar' />
        <Filters className='main__filters' />
        <Menu goods={arr} className='main__menu' />
      </div>
      <Footer page={'/'} />
    </PageWrapper>
  )
}