import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="app">
        <h1>Lottery</h1>
        <Lottery max={40} len={6} />
        <Lottery max={10} len={4} />
    </div>
  );
}

export default App;
