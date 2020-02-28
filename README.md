# dnd5e-enemy-automator

## Requirements (MVP)
- User can view list of Monsters from D&D 5e
- User can search, filter, & sort list
- User can add Monsters to an "Encounter"
- User can look at all the Monsters added, and view each one's stats quickly & succinctly
- User can click a button for each of a Monster's actions/attacks to roll the appropriate dice
- User sees the result of the roll & damage in a side-bar
- User can scroll through to view the previous results from the 

## Needed modules
- redux
- react-router
- react-redux
- Axios

## Todo (MVP)
- [x] Setup general file structure
- [x] research api
- [x] setup API calls
- [x] Really basic display of `Encounter` & `MonsterList` pages to test Redux and Router
- [x] change API call to happen in `componentDidMount()`
- [x] implement redux
  - [x] setup initial state to have monsterList
- [x] switch between tabs
- [x] create basic `ActionHistory` component & add nav button
- [ ] `Encounter`
  - [x] display full data
  - [x] click attacks & actions
  - [x] syle the crap out of it!
  - [ ] message toast thing appears when actions used
- [ ] `MonsterList`
  - [ ] search, filter, sort functionality
  - [ ] add monsters to encounters functionality
  - [ ] style!
  - [ ] dynamically load more monsters when user scrolls to bottom, rather than loading all at once
- [ ] `ActionHistory`
  - [ ] style!
- [ ] implement router (may not need this)

## Post-MVP
- user can login and save multiple encounters
  - maybe no login, just use cookies, and only save one encounter?
  - each saved encounter will only be a list of monster id's
- desktop view displays when using over certain # of pixels
