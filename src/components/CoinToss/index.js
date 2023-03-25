// Write your code here

import {Component} from 'react'

import './index.css'

const HEADS_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAILS_IMAGE_URL = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultsImg: HEADS_IMAGE_URL,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImg = HEADS_IMAGE_URL
      latestHeadsCount += 1
    } else {
      tossImg = TAILS_IMAGE_URL
      latestTailsCount += 1
    }
    this.setState({
      tossResultsImg: tossImg,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultsImg, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="main-container">
        <div className="app-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img
            src={tossResultsImg}
            alt="toss result"
            className="toss-result-img"
          />
          <button type="button" className="btn" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="container">
            <p className="counts">Total: {totalCount}</p>
            <p className="counts">Heads: {headsCount}</p>
            <p className="counts">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
