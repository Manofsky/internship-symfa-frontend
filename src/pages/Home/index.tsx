import React from 'react';
import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SearchBar from '../../components/SearchBar';
import Filters from '../../components/Filters';
import Menu from '../../components/Menu';
import PageWrapper from '../../components/PageWrapper';
import { useGetAllProductsQuery } from '../../App/reducers/goodsApi';

export default function Home() {
  const { data: goods = [] } = useGetAllProductsQuery();

  return (
    <PageWrapper>
      <Header>Let's eat<br></br>Quality food</Header>
      <div className='main'>
        <SearchBar className='main__searchBar' />
        <Filters className='main__filters' />
        <Menu goods={goods} className='main__menu' />
      </div>
      <Footer page={'/'} />
    </PageWrapper>
  )
}