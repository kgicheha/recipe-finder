import './App.css';
import Home from './components/Home';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          RECIPE FINDER
        </h1>
      </header>
      <Home apiKey={apiKey}/>
    </div>
  );
}

export default App;
