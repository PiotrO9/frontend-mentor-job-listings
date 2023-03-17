import { useState, useEffect } from 'react'
import data from '../data.json'
import './App.scss'
import JobOffer from './components/JobOffer';
import Filter from './components/Filter';

function App() {
  const [OriginalJobOffers, SetOriginalJobOffers] = useState(data);
  const [JobOffers, FilterJobOffers] = useState(data);
  const [ActualFiltersList, SetFilters] = useState([]);

  const [LevelsFilter, SetLevelsFilter] = useState([]);
  const [RolesFilter, SetRolesFilter] = useState([]);
  const [ToolsFilter, SetToolsFilter] = useState([]);

  useEffect(() => {
    console.log(LevelsFilter)
    ApplyFilters()
  }, [LevelsFilter], [RolesFilter], [ToolsFilter])

  const handleLevelsFilter = (filter) => {
    SetLevelsFilter(prevFilters => [...prevFilters, filter]);
  } 

  const handleRolesFilter = (filter) => {
    SetRolesFilter(prevFilters => [...prevFilters, filter])
  }

  const handleToolsFilter = (filter) => {
    SetToolsFilter(prevFilters => [...prevFilters, filter])
  }

  function ApplyFilters() {
    let tmpFiltersArr = LevelsFilter.concat(RolesFilter, ToolsFilter)
    SetFilters(tmpFiltersArr);
  }

  return (
    <div className="App">
      <header>
      </header>
      <main>
        <div className='Filters'>
          {
            ActualFiltersList != [] && (
              ActualFiltersList.map((item, index) => (
                <Filter key={index} name={item} />
              ))
            )
          }
        </div>
        <div className='Listings'>
          {
          JobOffers.map((item, index) => (
            <JobOffer 
              key={index} 
              JobDatas={item} 
              setLevelsFilter={handleLevelsFilter}
              setRolesFilter={handleRolesFilter}
              setToolsFilter={handleToolsFilter}
            />
          ))}
        </div>
      </main>
    </div>
  )
}

export default App
