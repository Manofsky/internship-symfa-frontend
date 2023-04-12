import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PageWrapper from '../../components/PageWrapper'

export default function Notification() {
  return (
    <PageWrapper>
      <Header>Notification</Header>
      <Footer page={'/notification'} />
    </PageWrapper>
  )
}