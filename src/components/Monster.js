import React from 'react'

function Monster(props){
  
  let { name, actions } = props.data

  return (
    <div className="Monster">
      <h3>{name}</h3>
      <h4>Actions:</h4>
      {
        actions.map(action => {
          return (
            <div>
              <p><strong>{action.name}:</strong> {action.desc}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default Monster