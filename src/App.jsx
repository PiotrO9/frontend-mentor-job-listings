import { useState } from 'react'
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

  const [test, test1] = useState("123");

  function handleLevelsFilter(filter) {
    SetLevelsFilter([...LevelsFilter, test]);
    ApplyFilters()
  } 

  function handleRolesFilter(filter) {
    let tmpArr = RolesFilter
    console.log(RolesFilter)
    SetRolesFilter(tmpArr.push(filter))
    console.log(RolesFilter)
    ApplyFilters()
  }

  function handleToolsFilter(filter) {
    SetToolsFilter(ToolsFilter.push(filter))
    ApplyFilters()
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
