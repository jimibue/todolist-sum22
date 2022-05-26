import './App.css';
// a default export i can name anything when I import
// other export i grab in {} and match
import Todos, {myName as renamed, someFunction} from './Todos'

function App() {
  return (
    <div className="App">
       <Todos />
    </div>
  );
}

export default App;
