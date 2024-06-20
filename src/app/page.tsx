import MainPage from '@/components/MainPage'
import React, { Suspense } from 'react'

export default function Home() {
  return (
    <Suspense>
      <MainPage />
    </Suspense>
  )
}
