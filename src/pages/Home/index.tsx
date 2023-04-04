import React from 'react';
import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
  return (
    <div className='home'>
      <div className='home__wrapper'>
        <Header className='home__header'>Let's eat<br></br>Quality food</Header>
        <Footer />
      </div>
    </div>
  )
}