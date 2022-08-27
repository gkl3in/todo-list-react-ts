import { useState } from 'react'
import Card from './components/Card';
import './App.css';

export type Todo = {
  id: string,
  title: string,
  completed: boolean;
}

function App() {
  const [todoInput, setTodoInput] = useState('');
  const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo() {
    
  }

  function handleInputChange(e) {
    setTodoInput(e.target.value);
  }

  return (
    <div className="App">
      <div className='add-todo'>
        <input placeholder="Fazer café" value={todoInput} onChange={handleInputChange}/>
        <button onClick={addTodo}>Adicionar</button>
      </div>
      {
        todos.map(todo => (
          <Card key={todo.id} todo={todo}/>
        ))
      }
    </div>
  )
}

export default App
