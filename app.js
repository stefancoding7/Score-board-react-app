
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
    this.setState( prevState => {
      return {
        score: this.state.score + 1
      }
      })
      
  }

  decrementScore = () => {
    if(this.state.score) {
      this.setState( prevState => {
        return {
          score: this.state.score - 1
        }
        })
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
      <button className="remove-player" onClick={ () => props.removePlayer(props.id) }>✖</button>

        { props.playerName }
      </span>

      <Counter />
      
    </div>
  );
}

class App extends React.Component {

  state = {
    players: [
      {
        name: "Stefan",
        
        id: 1
      },
      {
        name: "Treasure",
        
        id: 2
      },
      {
        name: "Ashley",
        
        id: 3
      },
      {
        name: "James",
        
        id: 4
      }

    ]
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {

        return {
          players: prevState.players.filter(p => p.id !== id)
        };

      });
     
  }

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={ this.state.players.length } />
  
        {/* Player list*/}
        {this.state.players.map(player => {
          return <Player 
          playerName={ player.name } 
          id={ player.id }
          key={player.id.toString()}
          removePlayer={ this.handleRemovePlayer }
          />
        })}
        
      </div>
    );
  }
  }
  

ReactDOM.render(
  <App />,
  document.getElementById('root')
);