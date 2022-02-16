import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import Form from "./form";
import { bugRemoved, bugResolved, resetAll } from "./Redux/actions";


function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch()

  console.log(state);
  return (
    <div className="App">
      <Form/>
      <button onClick={() => dispatch(resetAll())}>Delete All</button>
      {state.map((data, i) => {
        return (
          <div key={i}>
            <h1>{data.description}</h1>
            <button onClick={()=> dispatch(bugResolved(data.id))}>isResolved? {data.resolved? 'yes' : 'no'}</button>
            <button onClick={()=> dispatch(bugRemoved(data.id))}>Remove item!</button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
