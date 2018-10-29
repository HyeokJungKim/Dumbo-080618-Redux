import React from 'react'
import Wizard from './Wizard'

import {connect} from 'react-redux'

class WizardDisplay extends React.Component{
  render(){
    console.log("WizardDisplay", this.props);
    return(
      <div>
        <h2>Welcome to the Wizarding World of Harry Potter!</h2>
        <ul>
          {this.props.wizards.map(wizard => <Wizard key={wizard.name} wizard={wizard}/>)}
        </ul>
      </div>
    )
  }
}





//Getter & Reader
//Return value (object) of this will be merged as props
const mapStateToProps = (state) => {
  return {wizards: state.wizards}
}

const func = connect(mapStateToProps)
const specialComponent = func(WizardDisplay)
export default specialComponent

// export default connect(mapStateToProps)(WizardDisplay)
