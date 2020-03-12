import React, { Component } from 'react'
import Axios from 'axios'
import MonsterListItem from './MonsterListItem'

class MonsterList extends Component {
  constructor(){
    super()

    this.state = {
      data: [],
      nextUrl: '',
      search: ''
    }

    this.handleSearchChange = this.handleSearchChange.bind(this)
  }

  componentDidMount(){
    this.getData()
  }

  handleSearchChange(e){
    this.setState({
      search: e.target.value
    })
  }

  // TODO: change later to call 2nd page when the user scrolls to the bottom
  getData(){
    return Axios.get("https://api.open5e.com/monsters/?fields=slug,name,challenge_rating,type,size,hit_points,document__slug,%20document__title&limit=2000&ordering=slug")
      .then(response => {
        let newData = [...this.state.data, ...response.data.results]
        this.setState({
          data: newData,
          nextUrl: response.data.next
        })
      })
  }

  render() {
    let { search, data } = this.state

    let monsterList = data
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
        <h2>Add Monsters</h2>
        <input type="text" value={search} onChange={this.handleSearchChange}/>
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

export default MonsterList