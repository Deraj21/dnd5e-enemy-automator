import React from 'react'
import crs from '../utilities/getXP'
import ClickableAction from './ClickableAction'

function Monster(props){
  const formatScore = function(n){ return Math.floor((n - 10) / 2) }

  let { name, size, type, subtype, alignment,
    armor_class, armor_desc, hit_points, hit_dice, speed,
    strength, dexterity, constitution, intelligence, wisdom, charisma,
    skills, senses, languages, challenge_rating,
    special_abilities, actions
  } = props.data

  // Speeds
  let speeds = []
  for (let key in speed){
    speeds.push({
      type: key === "walk" ? "" : key,
      value: speed[key]
    })
  }
  let speedElements = speeds.map((s, i, arr) => {
  return (
      <span key={`${name}-${s.type}`}>
        {s.type} {s.value} ft.{arr[i+1] ? `, ` : ``}
      </span>
    )
  })

  // Ability Scores
  let abilityScoreElements = [
    { name: "STR", score: strength, modifier: formatScore(strength) },
    { name: "DEX", score: dexterity, modifier: formatScore(dexterity) },
    { name: "CON", score: constitution, modifier: formatScore(constitution) },
    { name: "INT", score: intelligence, modifier: formatScore(intelligence) },
    { name: "WIS", score: wisdom, modifier: formatScore(wisdom) },
    { name: "CHA", score: charisma, modifier: formatScore(charisma) },
  ].map(score => {
    return (
      <div className="ability-score" key={`${name}-${score.name}`}>
        <h5>{score.name}</h5>
        <p>{score.score} ({score.modifier})</p>
      </div>
    )
  })
  
  // skills
  let skillElements = []
  for (let key in skills){
    let sign = skills[key] > 0 ? '+' : ''
    skillElements.push(
      <span key={`${name}-skill-${key}`}>{key} {sign}{skills[key]}</span>
    )
  }
  if (skillElements.length === 0){
    skillElements.push( <span key={`${name}-noskill`}>-</span> )
  }

  // special abilities
  let specialAbilitiesElements = special_abilities.map(special => (
    <p className="monster-special" key={`${name}-${special.name}`}
    ><strong className="emph">{special.name}.</strong> {special.desc}</p>
  ))

  // actions
  let actionElements = actions.map(action => {
    return (
      <ClickableAction key={`${name}-${action.name}`} monsterName={name} action={action} />
    )
  })

  return (
    <div className="Monster">
      <h4>{name}</h4>
      <p className="emph">{size} {type}{subtype ? ` (${subtype})` : ``}, {alignment}</p>
      
      <hr/>

      <label>Armor Class</label> <span>{armor_class}{armor_desc ? ` (${armor_desc})` : ``}</span><p></p>
      <label>Hit Points</label> <span>{hit_points} ({hit_dice})</span><p></p>
      <label>Speed</label> { speedElements }

      <hr/>

      <div className="ability-score-box">
        { abilityScoreElements }
      </div>

      <hr/>

      <label>Skills </label>{ skillElements }<p></p>
      <label>Senses</label><span> {senses}</span><p></p>
      <label>Languages</label><span> {languages}</span><p></p>
      <label>Challenge</label><span> {challenge_rating} ({crs[challenge_rating]} XP)</span><p></p>

      <hr/>

      { specialAbilitiesElements }

      <h5>Actions:</h5>
      <hr className="hr-thin"/>
      { actionElements }
    </div>
  );
}

export default Monster