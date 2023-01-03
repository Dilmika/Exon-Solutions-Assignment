import React from 'react'
import data from '../data'
import CustomerReceipt from './CustomerReceipt'

export default function Home() {
  console.log("data", data.cheques)
  return (
    <div>
      <div className="home">
        <div>
          <h1>Customer Receipt</h1>
          <CustomerReceipt data={data}/>
        </div>
        <div>
          <h1>Tried generating a pdf but due to time limitaions i have done up to this :)</h1>
        </div>
      </div>
    </div>
  )
}
