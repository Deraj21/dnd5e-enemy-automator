let initialState = {
  currentView: "Encounter",
  monsterNames: ["Skein Witch"],
  actionHistory: [],
  currentFilters: [],
  showMessage: false
}

// action types
const UPDATE_CURRENT_VIEW = "UPDATE_CURRENT_VIEW",
      ADD_ACTION_ITEM = "ADD_ACTION_ITEM",
      UPDATE_SHOW_MESSAGE = "UPDATE_SHOW_MESSAGE",
      ADD_TO_ENCOUNTER = "ADD_TO_ENCOUNTER",
      REMOVE_FROM_ENCOUNTER = "REMOVE_FROM_ENCOUNTER"

// reducer
function reducer(state = initialState, action){
  let { type, payload } = action
  switch(type){
    case UPDATE_CURRENT_VIEW:
      return Object.assign({}, state, { currentView: payload })
    case ADD_ACTION_ITEM:
      return { ...state, actionHistory: [...state.actionHistory, payload] }
    case UPDATE_SHOW_MESSAGE:
      return { ...state, showMessage: payload }
    case ADD_TO_ENCOUNTER:
      return { ...state, monsterNames: [...state.monsterNames, payload] }
    case REMOVE_FROM_ENCOUNTER:
      let newList = [ ...state.monsterNames ]
      let index = newList.indexOf(payload)
      let name = newList.splice(index, 1)[0]
      return { ...state, monsterNames: newList }
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

export function addActionItem(action){
  return {
    type: ADD_ACTION_ITEM,
    payload: action
  }
}

export function updateShowMessage(bool){
  return {
    type: UPDATE_SHOW_MESSAGE,
    payload: bool
  }
}

export function addToEncounter(name){
  return {
    type: ADD_TO_ENCOUNTER,
    payload: name
  }
}

export function removeFromEncounter(name){
  return {
    type: REMOVE_FROM_ENCOUNTER,
    payload: name
  }
}

export default reducer