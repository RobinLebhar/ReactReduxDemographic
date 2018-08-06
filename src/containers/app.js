import React, { Component } from 'react';
import MortalityList from "./mortality-list"
import SearchBar from "../containers/search-bar"

const DEFAULT_COUNTRY = "France"
 class App extends Component {
  
  render() {
    return (
      <div>
        
        <SearchBar defaultCountry={DEFAULT_COUNTRY}/>
        <MortalityList defaultCountry={DEFAULT_COUNTRY}/>
      </div>
    )
  }
}



 export default App