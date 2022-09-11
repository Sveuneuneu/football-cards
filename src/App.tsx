import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { playerAdded } from './store/players';

function App() {

  const players = useSelector((state: any) => state.players)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header>
      </header>
      <main>
        <div>
          { JSON.stringify(players) }
        </div>
        <button onClick={() => dispatch(playerAdded())}>add</button>
        <div>
          Nav bar here
          TODO: logo + login/logout
        </div>
        <div>
          main display here
          <div>
            on default
            <div>
              Player display here
              <div>
                search and filter tools here
              </div>
              <div>
                cards display here
              </div>
            </div>
            on card click
            <div>
              Bigger card for update purpose
            </div>
          </div>
        </div>
        <div>
          Footer here
        </div>
      </main>
    </div>
  );
}

export default App;
