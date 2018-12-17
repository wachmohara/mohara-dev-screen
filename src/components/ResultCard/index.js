import React, { Component } from 'react'
import logo from '../../assets/images/insights_mohara.png';
import './style.css'

class LoginCard extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <div className="result-container">
        <div className="result-container__box">
          <img src={logo} alt="logo"/>
          <span>Please welcome to join with US</span>
        </div>
      </div>
    )
  }
}

export default LoginCard
