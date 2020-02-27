

// initial state
// {
//   currentFilters: {  }, // data about the current filter settings
// }

let initialState = {
  currentView: "Encounter",
  monsterNames: [ "Goblin", "Flying Snake"/*, "Skein Witch"*/ ],
  monsterData: [], // maybe not needed
  actionHistory: []
}

// action types
const UPDATE_CURRENT_VIEW = "UPDATE_CURRENT_VIEW"

// reducer
function reducer(state = initialState, action){
  let { type, payload } = action
  switch(type){
    case UPDATE_CURRENT_VIEW:
      return Object.assign({}, state, { currentView: payload })
    default:
      return state
  }
}

// action creators
export function updateCurrentView(viewName){
  return {
    type: UPDATE_CURRENT_VIEW,
    payload: viewName
  }
}

export default reducer