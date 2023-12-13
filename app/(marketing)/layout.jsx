import React from 'react'
import Navbar from './_components/navbar'

function MarketingLayout({children }) {
  return (
    <div>
      <Navbar/>
      {children}
    </div>
  )
}

export default MarketingLayout
