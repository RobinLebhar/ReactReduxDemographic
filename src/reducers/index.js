import { combineReducers } from 'redux';
import MortalityReducer from './reducer_mortality'
import CountriesReducer from './reducer_countries'
const rootReducer = combineReducers({
  mortality : MortalityReducer,
  countries : CountriesReducer
});

export default rootReducer;
