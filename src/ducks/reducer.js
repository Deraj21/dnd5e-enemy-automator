let initialState = {
  currentView: "Monster List",
  monsterData: [],
  encounterData: [],
  monsterNames: [],
  actionHistory: [],
  currentFilters: [],
  search: "",
  targetAC: 15,
  showMessage: false
}

// action types
const UPDATE_CURRENT_VIEW = "UPDATE_CURRENT_VIEW",
      UPDATE_MONSTER_DATA = "UPDATE_MONSTER_DATA",
      ADD_ENCOUNTER_ITEM = "ADD_ENCOUNTER_ITEM",
      REMOVE_ENCOUNTER_ITEM = "REMOVE_ENCOUNTER_ITEM",
      ADD_ACTION_ITEM = "ADD_ACTION_ITEM",
      CLEAR_ACTION_HISTORY = "CLEAR_ACTION_HISTORY",
      UPDATE_SHOW_MESSAGE = "UPDATE_SHOW_MESSAGE",
      ADD_TO_ENCOUNTER = "ADD_TO_ENCOUNTER",
      REMOVE_FROM_ENCOUNTER = "REMOVE_FROM_ENCOUNTER",
      CLEAR_ENCOUNTER = "CLEAR_ENCOUNTER",
      UPDATE_SEARCH = "UPDATE_SEARCH",
      UPDATE_TARGET_AC = "UPDATE_TARGET_AC"

// reducer
function reducer(state = initialState, action){
  let { type, payload } = action
  switch(type){
    case UPDATE_CURRENT_VIEW:
      return Object.assign({}, state, { currentView: payload })
    case UPDATE_MONSTER_DATA:
      return { ...state, monsterData: payload }
    case ADD_ENCOUNTER_ITEM:
      return { ...state, encounterData: [...state.encounterData, payload] }
    case REMOVE_ENCOUNTER_ITEM:
      let newEncounterData = [ ...state.encounterData ]
      let index1 = newEncounterData.findIndex(item => item.name === payload)
      newEncounterData.splice(index1, 1)
      return { ...state, encounterData: newEncounterData }
    case ADD_ACTION_ITEM:
      return { ...state, actionHistory: [...state.actionHistory, payload] }
    case CLEAR_ACTION_HISTORY:
      return { ...state, actionHistory: [] }
    case UPDATE_SHOW_MESSAGE:
      return { ...state, showMessage: payload }
    case ADD_TO_ENCOUNTER:
      return { ...state, monsterNames: [...state.monsterNames, payload] }
    case REMOVE_FROM_ENCOUNTER:
      let newList = [ ...state.monsterNames ]
      let index2 = newList.indexOf(payload)
      newList.splice(index2, 1)
      return { ...state, monsterNames: newList }
    case CLEAR_ENCOUNTER:
      return { ...state, encounterData: [] }
    case UPDATE_SEARCH:
      return { ...state, search: payload }
    case UPDATE_TARGET_AC:
        return { ...state, targetAC: parseInt(payload) }
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

export function updateMonsterData(data){
  return {
    type: UPDATE_MONSTER_DATA,
    payload: data
  }
}

export function addEncounterItem(monster){
  return {
    type: ADD_ENCOUNTER_ITEM,
    payload: monster
  }
}

export function clearActionHistory(){
  return {
    type: CLEAR_ACTION_HISTORY,
    payload: null
  }
}

export function removeEncounterItem(monsterName){
  return {
    type: REMOVE_ENCOUNTER_ITEM,
    payload: monsterName
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

export function clearEncounter(){
  return {
    type: CLEAR_ENCOUNTER,
    payload: null
  }
}

export function updateSearch(search){
  return {
    type: UPDATE_SEARCH,
    payload: search
  }
}

export function updateTargetAC(ac){
  return {
    type: UPDATE_TARGET_AC,
    payload: ac
  }
}

export default reducer