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
  - ~~put dropdown next to button for multiple actions at a time~~
  - ~~FIX: target ac bar changes it's number randomly or sets it to the end?~~ (seems to be fixed)
  - ~~Footer changes to tabs?~~
  - ~~BUG: search doesn't allow spaces~~
  - ~~Monsters in Encounter show multiple per column~~
- **Now**
  - monster tile lengths are independant of one another
    - [Multi-Column blog](https://every-layout.dev/blog/multi-column-manipulation/)
    - [MDN scc grid guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- **Next**
  - figure out how to parse special actions (saving throw instead of attack roll)
    - take a look at monster data to see if there is something consistant about special actions
    - if not, add a place to do rolls on the side or something
  - HOST somewhere!
- **Later**
  - add ability to half or double damage in action history 
  - MonsterList shows more and more info as screen gets bigger
  - style actionHistory better
  - style header better
  - figure out nested-routing so that I can do master-detail when screen gets big enough
  - Message Toast can be swiped away on touch screen
  - hide scroll-bar (or at least style to make thinner and nicer looking)
  - optimize performance
    - load only *some* monsterListItems at begining, and load more when scroll to the bottom
  - BUG: fix issue where sometimes site starts with 1st tab highlighted, but shows 2nd or 3rd tab in the view; something to do with it remembering where you last left off, but not applying the style changes to the tabs
## Post-MVP
  - figure out multi-attacks
- filters & sorts in MonsterList
- link to google photos for each monster?
- ADD A BACKEND:
  - user can login and save multiple encounters
  - maybe no login, just use cookies, and only save one encounter?
  - each saved encounter will only need to store a list of monster id's