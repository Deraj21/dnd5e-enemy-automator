let initialState = {
  currentView: "Encounter",
  monsterNames: [ "Goblin", "Flying Snake"/*, "Skein Witch"*/ ],
  actionHistory: [],
  currentFilters: [],
  showMessage: false
}

// action types
const UPDATE_CURRENT_VIEW = "UPDATE_CURRENT_VIEW",
      ADD_ACTION_ITEM = "ADD_ACTION_ITEM",
      UPDATE_SHOW_MESSAGE = "UPDATE_SHOW_MESSAGE"

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

export default reducer