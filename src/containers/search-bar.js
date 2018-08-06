import React,{Component} from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import {fetchMortality,fetchCountries} from "../actions/index"
class SearchBar extends Component{

   constructor(props){
       super(props);

       this.state = {
           country:this.props.defaultCountry,
           placeHolder:"Ex : France",
        }
   }

   
   componentWillMount () {
        this.props.fetchCountries()
   }

   renderSelectCountries()
    {
       
        const {countries} = this.props
       
        if(countries){
            return (
                <select value={this.state.country} onChange={(e) => this.fetchMortality(e)} className="col-lg-12 input-group" >
                    {countries.map((country) => {
                        return <option key={country} value={country}>{country}</option>
                    })}
                </select>
            )
        }else{
            return <select>No country Found</select>
        }
    }    
render(){
        return (
           <form onSubmit={(e) => this.onFormSubmit(e) }className="row search_bar">
                    {this.renderSelectCountries()}
                     <span className="input-group-btn">
                     </span>
            </form>
                    
        )
    }

    fetchMortality(e){
        this.setState({country:e.target.value},() =>{
             this.props.fetchMortality(this.state.country)
        })
       
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        countries: state.countries
    }
}
 function mapDispatchToProps (dispatch) {
    return bindActionCreators({fetchMortality:fetchMortality,fetchCountries:fetchCountries},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar)