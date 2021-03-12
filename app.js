
const Header = (props) => {
  console.log(props)
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers(5)}</span>
    </header>
  );
};


const Counter = (props) => {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ props.score }</span>
      <button className="counter-action increment"> + </button>
    </div>
  )
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.playerName }
      </span>

      <Counter  score={props.score}/>
      
    </div>
  );
}

const App = () => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={ n => n + 10} />

      {/* Player list*/}
      <Player playerName="Stefan" score={35}/>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);