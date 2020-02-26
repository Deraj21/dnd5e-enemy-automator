

// initial state
// {
//   currentFilters: {  }, // data about the current filter settings
//   addedToEncounter: [ // list of id's that have been added to the encounter page
//     "goblin",
//     "bugbear-captain"
//   ],
//   actionHistory: [] // history of the actions clicked on
// }

let initialState = {
  test: "This is a test",
  monsterNames: [ "Goblin", "Unicorn", "Skein Witch" ],
  monsterData: [],
  currentView: "MonsterList"
}

// action types
const UPDATE_TEST = "UPDATE_TEST"
const UPDATE_CURRENT_VIEW = "UPDATE_CURRENT_VIEW"

// reducer
function reducer(state = initialState, action){
  let { type, payload } = action
  switch(type){
    case UPDATE_TEST:
      return Object.assign({}, state, { test: payload })
    case UPDATE_CURRENT_VIEW:
      return Object.assign({}, state, { currentView: payload })
    default:
      return state
  }
}

// action creators
export function updateTest(test){
  return {
    type: UPDATE_TEST,
    payload: test
  }
}

export function updateCurrentView(viewName){
  return {
    type: UPDATE_CURRENT_VIEW,
    payload: viewName
  }
}

export default reducer