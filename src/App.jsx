import { useState } from 'react'
import data from '../data.json'
import './App.scss'
import JobOffer from './components/JobOffer';

function App() {
  const [JobOffers, FilterJobOffers] = useState(data);

  return (
    <div className="App">
      <header>
      </header>
      <main>
        <div className='Filters'>
          
        </div>
        <div className='Listings'>
          {
          JobOffers.map((item, index) => (
            <JobOffer key={index} JobDatas={item} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
