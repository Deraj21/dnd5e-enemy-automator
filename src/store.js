import { createStore } from 'redux'
import reducer from './ducks/reducer'

function saveToLocalStorage(state){
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) { return undefined }
    return JSON.parse(serializedState)
  } catch(e) {
    console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()
const store = createStore(
  reducer,
  persistedState
);

store.subscribe(() => saveToLocalStorage(store.getState()))

export default store