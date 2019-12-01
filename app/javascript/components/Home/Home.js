import React, { Component } from 'react'
import Jumbotron from './Jumbotron'
import Table from './Table/Table'

class Home extends Component {
  constructor(){
    super();
    this.state = {
      course_modules: [
        { id: 1, title: "Some Title 1", desciption: "Something somehting Somehting", active: false },
        { id: 2, title: "Some Title 2", desciption: "Something somehting Somehting", active: false },
        { id: 3, title: "Some Title 3", desciption: "Something somehting Somehting", active: false },
        { id: 4, title: "Some Title 4", desciption: "Something somehting Somehting", active: false },
        { id: 5, title: "Some Title 5", desciption: "Something somehting Somehting", active: false },
      ] 
    }
  }

  render() {
    return (
      <div>
        <Jumbotron/>
        <Table course_modules={this.state.course_modules} />
      </div>
    )
  }
}

export default Home
