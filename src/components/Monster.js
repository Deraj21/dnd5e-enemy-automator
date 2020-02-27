import React from 'react'

function Monster(props){
  let { name, size, type, subtype, alignment,
    armor_class, armor_desc, hit_points, hit_dice,
    speed,
    actions
  } = props.data
  console.log(props.data);

  let speeds = []
  for (let key in speed){
    speeds.push({
      type: key === "walk" ? "" : key,
      value: speed[key]
    })
  }

  return (
    <div className="Monster">
      <h4>{name}</h4>
      <p className="emph">{size} {type}{subtype ? ` (${subtype})` : ``}, {alignment}</p>
      
      <hr/>

      <label>Armor Class</label> <span>{armor_class}{armor_desc ? ` (${armor_desc})` : ``}</span><p></p>
      <label>Hit Points</label> <span>{hit_points} ({hit_dice})</span><p></p>
      <label>Speed</label>
      {
        speeds.map((s, i, arr) => <span>{s.type} {s.value} ft.{arr[i+1] ? `, ` : ``}</span>)
      }

      <hr/>

      {/* Ability Scores */}

      <hr/>

      {/* Skills, Senses, Langs, CR */}

      <hr/>

      {/* Special abilities */}

      <h5>Actions:</h5>
      <hr/>
      {
        actions.map(action => {
          return (
            <div className="monster-action" key={`${name}-${action.name}`}>
              <p>{}</p>
              <p><strong>{action.name}:</strong> {action.desc}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Monster