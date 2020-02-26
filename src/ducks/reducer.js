

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
  monsterData: []
}

// action types
const UPDATE_TEST = "UPDATE_TEST"
const UPDATE_MONSTER_LIST = "UPDATE_MONSTER_LIST"

// reducer
function reducer(state = initialState, action){
  let { type, payload } = action
  switch(type){
    case UPDATE_TEST:
      return Object.assign({}, state, { test: payload })
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

export default reducer