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
- **Done**
  - ~~style actions like buttons~~
- **Now**
  - ~~add header~~
    - ~~search bar in header~~
    - ~~LEFT OFF: figure out why 2nd `clearEncounterBtn` doesn't work~~
    - ~~clear monsters in encounter button~~
    - ~~clear action historybutton~~
    - ~~dynamically displays content based on current view~~
      - ~~add target AC to action history header~~
  - ~~actions change color based on whether they hit or not~~
  - ~~total the damage based on what hits~~
  - ~~style actions~~
  - style header
- **Next**
  - figure out nested-routing so that I can do master-detail when screen gets big enough
  - style everything to work for mobile and bigger
    - Footer changes to tabs?
    - Monsters in Encounter show multiple per row
    - MonsterList shows more and more info as screen gets bigger
- **Later**
  - style actionHistory better
  - Message Toast can be swiped away on touch screen
  - hide scroll-bar (or at least style to make thinner and nicer looking)
  - put dropdown next to button for multiple actions at a time
  - optimize performance
    - load only *some* monsterListItems at begining, and load more when scroll to the bottom
  - FIX: target ac bar changes it's number randomly or sets it to the end?

## Post-MVP
- figure out how to handle multi-attacks or special actions
- filters & sorts in MonsterList
- link to google photos for each monster?
- ADD A BACKEND:
  - user can login and save multiple encounters
  - maybe no login, just use cookies, and only save one encounter?
  - each saved encounter will only need to store a list of monster id's