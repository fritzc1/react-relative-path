import logo from './logo.svg';
import './App.css';

import Item from './Components/ListItems';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <p className="App-intro">
        <Item />
      </p>
    </div>
  );
}

export default App;
