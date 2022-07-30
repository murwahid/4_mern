import logo from './logo.svg';
import './App.css';
import TodoForm from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
        <div>
          <TodoForm/>
        </div>
     
    </div>
  );
}

export default App;
