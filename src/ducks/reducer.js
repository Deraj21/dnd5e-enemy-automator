

let initialState = {
  test: "This is a test",
  monsterNames: [ "Goblin", "Unicorn", "Skein Witch" ]
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