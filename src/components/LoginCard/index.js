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
      <div className="card-container">
        <div className="card-container__box">
          <img src={logo} alt="logo"/>
          <input className="card-container__box--input" type="test" />
          <input className="card-container__box--input" type="password"/>
          <button className="card-container__box--button">SUBMIT</button>
        </div>
      </div>
    )
  }
}

export default LoginCard
