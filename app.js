const players = [
  {
    name: "Stefan",
    score: 50,
    id: 1
  },
  {
    name: "Treasure",
    score: 85,
    id: 2
  },
  {
    name: "Ashley",
    score: 95,
    id: 3
  },
  {
    name: "James",
    score: 80,
    id: 4
  }

];

const Header = (props) => {
  console.log(props)
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};


class Counter extends React.Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     score: 0
  //   };
  // }

  state = {
    score: 0
  }

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1
    })
  }

  decrementScore = () => {
    if(this.state.score) {
      this.setState({
      
        score: this.state.score - 1
        
      });
    }
    
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={ this.decrementScore }> - </button>
        <span className="counter-score">{ this.state.score }</span>
        <button className="counter-action increment" onClick={ this.incrementScore }> + </button>
      </div>
    )
  }
  
}

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        { props.playerName }
      </span>

      <Counter />
      
    </div>
  );
}

const App = (props) => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" totalPlayers={ props.initialPlayers.length } />

      {/* Player list*/}
      {props.initialPlayers.map(player => {
        return <Player 
        playerName={ player.name } 
        
        key={player.id.toString()}
        />
      })}
      
    </div>
  );
}

ReactDOM.render(
  <App initialPlayers={players}/>,
  document.getElementById('root')
);