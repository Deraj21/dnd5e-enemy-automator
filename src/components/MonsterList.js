import React, { Component } from 'react'
import Axios from 'axios'
import { connect } from 'react-redux'
import { updateMonsterData, updateSearch } from '../ducks/reducer'

import MonsterListItem from './MonsterListItem'

class MonsterList extends Component {

  componentDidMount(){
    let { monsterData, updateMonsterData } = this.props
    if (!monsterData.length){
      this.getData()
        .then(response => {
          // let newData = [...]
          updateMonsterData( response.data.results )
        })
    }
  }

  // TODO: change later to load more when the user scrolls to the bottom
  getData(){
    return Axios.get("https://api.open5e.com/monsters/?fields=slug,name,challenge_rating,type,size,hit_points,document__slug,%20document__title&limit=2000&ordering=slug")
  }

  render() {
    let { monsterData, search } = this.props

    let monsterList = monsterData
      .filter(item => {
        return item.name.includes(search) || item.slug.includes(search)
      })
      .map(item => {
        return (
          <MonsterListItem key={`MonsterListItem-${item.slug}`}
            name={item.name}
            type={item.type}
            size={item.size}
            hp={item.hit_points}
            cr={item.challenge_rating}
          />
        )
      })

    return (
      <div className="MonsterList view" >
        
        <table>
          <thead>
            <tr className="table-header">
              <th>Name</th>
              <th>Type</th>
              <th>CR</th>
              <th></th>
              {/* <th>Size</th> */}
              {/* <th>HP</th> */}
            </tr>
          </thead>
          <tbody>
            { monsterList }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
  let {
    monsterData,
    search
  } = state
  return {
    monsterData,
    search
  }
}

export default connect(mapStateToProps, { updateMonsterData, updateSearch })(MonsterList)