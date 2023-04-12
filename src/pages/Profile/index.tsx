import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageWrapper from '../../components/PageWrapper'

export default function Profile() {
  return (
    <PageWrapper>
      <Header>My Profile</Header>
      <Footer page={'/profile'} />
    </PageWrapper>
  )
}