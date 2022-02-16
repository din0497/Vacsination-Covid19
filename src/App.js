import './App.css';
import { useSelector } from 'react-redux'

function App() {
  return (
    <div className="App">
    <form>
      <label>Bug description:</label>
      <input type="text"/>
      <label>is resolved?:</label>
      <input type="radio"/>
      <button type='submit'>Submit</button>
    </form>
          <h1>some txt</h1>
           <button>Remove item!</button>
    </div>
  );
}

export default App;
