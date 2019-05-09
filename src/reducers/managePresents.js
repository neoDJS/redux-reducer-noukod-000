export function managePresents(state, action){
  switch (action.type) {
  case 'INCREASE':
    return {...state, presents: state.presents + 1}
  default:
    return state;
  }
}
