import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Player from './components/Player';

function App() {
  const [activePlayer, SetActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    SetActivePlayer((currentActivePlayer) => (currentActivePlayer === 'X' ? 'O' : 'X'));
  };
  return (
    <main>
      <div id='game-container'>
        <ol id='players' className='highlight-player'>
          <Player name='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player name='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        </ol>
        <GameBoard activePlayer={activePlayer} onSelectSquare={handleSelectSquare} />
      </div>
    </main>
  );
}

export default App;
