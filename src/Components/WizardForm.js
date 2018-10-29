import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../Redux/actioncreators'
class WizardForm extends Component {

  state={
    name: "",
    house: "",
    redux: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addWizard(this.state)

  }

  render() {
    const {name, house, redux} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" value={name} onChange={this.handleChange}/>
        <label>
          House
        </label>
          <input type="text" name="house" value={house} onChange={this.handleChange}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" value={redux} onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }

}

//Action is an object with type and payload

//First argument for connect is mapStateToProps, second argument is mapDispatchToProps
//First argument gets, second argument sets
//First argument is a reader, second argument is a writers

//The return value for this will also get merged as props
// const mapDispatchToProps = (dispatch) => {
//   return {
//     addWizard: (wizard) => dispatch(addWizard(wizard))
//   }
// }







export default connect(null, {addWizard})(WizardForm);
















//
