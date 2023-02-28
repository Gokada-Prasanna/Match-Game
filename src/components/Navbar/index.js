import './index.css'

const Header = props => {
  const {score, time} = props

  return (
    <div className="navbar-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
      <ul className="score-and-timer-container">
        <li>
          <div className="score-container">
            <p className="score-text">
              Score:<span className="score">{score}</span>
            </p>
          </div>
        </li>
        <li>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              alt="timer"
              className="timer-image"
            />
            <p className="timer">{time} sec</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Header
