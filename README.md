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
  - ~~HOST somewhere!~~ (gh-pages)
- ~~link to google photos for each monster?~~
- **Now**
  - monster tile lengths are independant of one another
    - [Multi-Column blog](https://every-layout.dev/blog/multi-column-manipulation/)
    - [MDN scc grid guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- **Next**
  - add rolls breakdown to action history - ex: `2d6+4 = 5 + 2 + 4 = 11 piercing dmg`
  - while looking into new api, add a place to do rolls in header
    - keyboard shortcut to get there
- **Later**
  - MonsterList shows more and more info as screen gets bigger
  - style monsterlist to look more like table
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
- turn order
- ability to 1/2 or *2 the damage on the fly (or maybe just manipulate in any way with the keyboard)
- ADD A BACKEND:
  - user can login and save multiple encounters
  - maybe no login, just use cookies, and only save one encounter?
  - each saved encounter will only need to store a list of monster id's