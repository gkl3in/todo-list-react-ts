import { useState } from 'react'
import Card from './components/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className='add-todo'>
        <input placeholder="Fazer café" type="text" />
        <button>Adicionar</button>
      </div>

      <Card title="Fazer café"/>
    </div>
  )
}

export default App
