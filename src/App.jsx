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
    ApplyFilters()
  }, [LevelsFilter, RolesFilter, ToolsFilter])

  const handleLevelsFilter = (filter) => {
    if(!LevelsFilter.includes(filter)) {
      SetLevelsFilter(prevFilters => [...prevFilters, filter]);
    }
  } 

  const handleRolesFilter = (filter) => {
    if(!RolesFilter.includes(filter)) {
      SetRolesFilter(prevFilters => [...prevFilters, filter])
    }
  }

  const handleToolsFilter = (filter) => {
    if(!ToolsFilter.includes(filter)) {
      SetToolsFilter(prevFilters => [...prevFilters, filter])
    }
  }

  function ApplyFilters() {
    FilterJobOffers(OriginalJobOffers);
    let tmpFiltersArr = LevelsFilter.concat(RolesFilter, ToolsFilter)
    SetFilters(tmpFiltersArr);
    if(LevelsFilter.length > 0) {
        FilterJobOffers(oldValues => {
          return oldValues.filter(item => CheckIfOfferContainsLevel(item.level))            
        })
    }
    if(RolesFilter.length > 0) {
      FilterJobOffers(oldValues => {
          return oldValues.filter(item => CheckIfOfferContainsRole(item.role))
      })
    }
    if(ToolsFilter.length > 0) {
      FilterJobOffers(oldValues => {
        return oldValues.filter(item => CheckIfOfferContainsTools(item.tools))
      })
    }
  }

  const CheckIfOfferContainsLevel = (level) => {
    let ifFound = false;

    LevelsFilter.forEach(element => {
      if(element == level) {
        ifFound = true;
      }
    })

    return (ifFound) ? true : false;
  }

  const CheckIfOfferContainsRole = (role) => {
    let ifFound = false;

    RolesFilter.forEach(element => {
      if(element == role) {
        console.log(element + " " + role)
        ifFound = true;
      }
    })

    return (ifFound) ? true : false;
  }

  const CheckIfOfferContainsTools = (tools) => {
    let isMatching = true;

    tools.forEach((tool) => {
      if(!ToolsFilter.includes(tool)) {
        isMatching = false;
      }
    })

    return isMatching ? true : false;
}

  const RemoveFilter = (filter) => {
    SetFilters(oldValues => {
      return oldValues.filter(item => item != filter)
    })
    SetLevelsFilter(oldValues => {
      return oldValues.filter(item => item != filter)
    })
    SetRolesFilter(oldValues => {
      return oldValues.filter(item => item != filter)
    })
    SetToolsFilter(oldValues => {
      return oldValues.filter(item => item != filter)
    })
  }

  const handleFilterCancel = (filterName) => {
    RemoveFilter(filterName)
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
                <Filter key={index} name={item} 
                  filterCancel={handleFilterCancel}
                />
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
