import { useState } from 'react'
import data from '../data.json'
import './App.scss'

function App() {
  console.log(data)

  return (
    <div className="App">
      <header>
      </header>
      <main>
        <div className='Filters'>
          
        </div>
        <div className='Listings'>
          {
          data.map((item, index) => (
            <p>{item.company}</p>
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
