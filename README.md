# dnd5e-enemy-automator

## Requirements (MVP)
- User can view list of Monsters from D&D 5e
- User can search, filter, & sort list
- User can add Monsters to an "Encounter"
- User can look at all the Monsters added, and view each one's stats quickly & succinctly
- User can click a button for each of a Monster's actions/attacks to roll the appropriate dice
- User sees the result of the roll & damage in a side-bar
- User can scroll through to view the previous results from the action history

## Todo (MVP)
- **General**
- figure out nested-routing so that I can do master-detail when screen gets big enough
- style everything to work for mobile and bigger
  - Footer changes to tabs?
  - Monsters in Encounter show multiple per row
  - MonsterList shows more and more info as screen gets bigger
- hide scroll-bar (or at least style to make thinner and nicer looking)
- **Encounter**
  - make actions work better
    - some are coming back with `NaN` or not firing at all
    - figure out how to do multi-attacks or special actions
    - account for critical rolls
  - Message Toast can be swiped away on touch screen
- **ActionHistory**
  - style better
- **MonsterList**

## Post-MVP
- figure out how to keep state with a reload (cookies?)
- clear Encounter button
  - in MonsterList, Encounter, or both?
- filters & sorts in MonsterList
- link to google photos for each monster?
- ADD ABACKEND:
  - user can login and save multiple encounters
  - maybe no login, just use cookies, and only save one encounter?
  - each saved encounter will only need to store a list of monster id's


`LEFT OFF: trying to add crit functionality; need to test; next, test action-clicking for many types of enemies`