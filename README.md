# dnd5e-enemy-automator

## Requirements (MVP)
- User can view list of Monsters from D&D 5e
- User can search, filter, & sort list
- User can add Monsters to an "Encounter"
- User can look at all the Monsters added, and view each one's stats quickly & sisinctly
- User can click a button for each of a Monster's actions/attacks to roll the appropriate dice
- User sees the result of the roll & damage in a side-bar
- User can scroll through to view the previous results from the 

## Needed modules
- redux
- react-router
- react-redux
- Axios

## state (data that changes)
```
{
  currentFilters: {  }, // data about the current filter settings
  addedToEncounter: [ // list of id's that have been added to the encounter page
    "goblin",
    "bugbear-captain"
  ],
  actionHistory: [] // history of the actions clicked on
} 
```

## Todo (MVP)
- [ ] Setup general file structure
- [ ] implement redux
  - [ ] setup initial state
- [ ] implement router
  - [ ] switch between tabs
- [ ] research api
- [ ] setup API calls
- [ ] `Encounter` page
  - [ ] display
  - [ ] click attacks & actions
  - [ ] syle the crap out of it!
- [ ] `MonsterList` page
  - [ ] get to display
  - [ ] search, filter, sort functionality
  - [ ] add monsters to encounters functionality
  - [ ] style!

## Post-MVP
- user can login and save multiple encounters
  - maybe no login, just use cookies, and only save one encounter?
  - each saved encounter will only be a list of monster id's
- desktop view displays when using over certain # of pixels
