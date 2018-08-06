import axios from 'axios'
export const GET_MORTALITY = "GET_MORTALITY"
export const ERROR_GET_MORTALITY = "ERROR_GET_MORTALITY"

export const GET_COUNTRIES = "GET_COUNTRIES"
export const ERROR_GET_COUNTRIES = "ERROR_GET_COUNTRIES"

const API_END_POINT = "http://api.population.io:80/1.0/"
const MORTALITY_URL = "mortality-distribution/"


export function fetchMortality(country){
    return function (dispatch) {
        return axios(`http://api.population.io:80/1.0/mortality-distribution/${country}/male/25/today/`).then(function(responseMale){
             axios(`http://api.population.io:80/1.0/mortality-distribution/${country}/female/25/today/`).then(function(responseFemale){
                   dispatch({type : GET_MORTALITY,
                       payload:{
                           country:country,
                           male:responseMale.data.mortality_distribution,
                           female:responseFemale.data.mortality_distribution
                        }
                   })
             })
        });
           /*  .catch(function (error) {
                  dispatch({type : ERROR_GET_MORTALITY,errors:error})
             });
        }).catch(function (error) {
          dispatch({type : ERROR_GET_MORTALITY,errors:error})
        });*/
    }
}

export function fetchCountries(){
     return function (dispatch) {
        return axios(`http://api.population.io:80/1.0/countries`).then(function(response){
           dispatch({type : GET_COUNTRIES,payload:response.data.countries})
        }).catch(function (error) {
          dispatch({type : ERROR_GET_COUNTRIES,errors:error.response.data.detail})
        });
    }
}
      
    



         



