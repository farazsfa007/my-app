// Write your code here
import './index.css'
import {Component} from 'react'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onGenerateRandomNumber = () => {
    this.setState({randomNumber: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="box-container">
          <h1 className="heading">Random Number</h1>
          <p>Generate a random number in the range of 0 to 100</p>
          <button
            onClick={this.onGenerateRandomNumber}
            className="button"
            type="button"
          >
            Generate
          </button>
          <h1 className="random-number">{randomNumber}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
