import React, { Component } from 'react';
import {connect} from 'react-redux'
import {removeWizard} from '../Redux/actioncreators'

class Wizard extends Component {
  handleClick = () => {
  removeWizard(this.props.wizard)
  }

  render() {
    return (
      <div onClick={this.handleClick}>
      <h6>{this.props.wizard.name}</h6>
        <p>
          {this.props.wizard.house} | {this.props.wizard.redux}
        </p>
      </div>
    );
  }
}



// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeWizard: (wizard) => dispatch({type:"REMOVE_WIZARD", payload: wizard})
//   }
// }

export default connect(null, {removeWizard})(Wizard);
