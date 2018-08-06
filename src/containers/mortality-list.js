import React, { Component } from 'react'
import {fetchMortality} from "../actions/index"
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import MortalityListItem from "../components/mortality-list-item"


class MortalityList extends Component {
    constructor(props){
        super(props)

    }
    componentWillMount () {
       this.props.fetchMortality(this.props.defaultCountry)
    }
 
   renderMortality(){
       const {mortality} = this.props
     return  mortality.map((data) => {
           return <MortalityListItem key={data.country} mortality={data}/>    
       })
   }
   
    render () {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                        <th>Pays</th>
                        <th className="col-md-6">Hommes</th>
                        <th className="col-md-6">Femmes</th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.renderMortality()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mortality: state.mortality
    }
}
 function mapDispatchToProps (dispatch) {
    return bindActionCreators({fetchMortality:fetchMortality},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(MortalityList)