//The return value of reducer is state
import wizards from '../wizards'

const initialState = {
  wizards: wizards
}

const reducer = (state = initialState, action) => {
  console.log("inside reducer");
  switch (action.type) {
    case "ADD_WIZARD":
      return {...state, wizards: [...state.wizards, action.payload]}

    case "REMOVE_WIZARD":
      const wizardsArr = state.wizards.filter(wiz => wiz.name !== action.payload.name)
      return {...state, wizards: wizardsArr}

    default:
      return state
  }
}

export default reducer
