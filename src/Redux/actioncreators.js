export const addWizard = (wizard) => {
  console.log("inside add wizard");
  return {type: "ADD_WIZARD", payload: wizard}
}

export const removeWizard = (wizard) => {
  return {type: "REMOVE_WIZARD", payload: wizard}
}
