export default (state = null, action) => {
  switch (action.type) {
    case 'SELECT_LIBRARY':
      console.log(action.payload)
      return action.payload
    default:
      return state
  }
}
