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
  - Monsters in Encounter show 2 or 3 per row
  - MonsterList shows more and more info as screen gets bigger
- hide scroll-bar (or at least style to make thinner and nicer looking)
- **Encounter**
  - ~~make monsters render at same position every time~~
  - ~~*message-toast*-like thing appears when actions used~~
    - ~~can be dismissed by clicking little `"x"`~~
    - can be swiped away on touch screen
- **General**
  - figure out nested-routing so that I can do master-detail when screen gets big enough
  - hide scroll-bar (or at least style to make thinner and nicer looking)
- **ActionHistory**
  - style better

- **MonsterList**
  - Monsters display more info
  - Monsters display in a table rather than a list
  - add monsters to encounters functionality
  - dynamically load more monsters when user scrolls to bottom

## Post-MVP
- search, filter, sort functionality in MonsterList
- link to google photos for each monster?
- user can login and save multiple encounters
  - maybe no login, just use cookies, and only save one encounter?
  - each saved encounter will only be a list of monster id's
- desktop view displays when using over certain # of pixels


