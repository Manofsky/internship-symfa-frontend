import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageWrapper from '../../components/PageWrapper'

export default function Favourites() {
  return (
    <PageWrapper>
      <Header>Let's eat<br></br>Favorite food</Header>
      <Footer page={'/favourites'} />
    </PageWrapper>
  )
}