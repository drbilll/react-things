import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bio from './Bio'
import Copyright from './Copyright'
import FancyText from './FancyText'
import Gallery from './Gallery'
import GetImageURL from './GetImageURL'
import InspirationGenerator from './InspirationGenerator'
import List from './List'
import PackingList from './PackingList'
import Profile1 from './Profile1'
import ToDoList from './ToDoList'
import TodoListBrace from './TodoListBrace'



function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <div>
        <TodoListBrace />
      </div>

      <div>
         <GetImageURL imageId='https://i.imgur.com/YfeOqp2s.jpg' />
      </div>

      <div>
        <PackingList />
      </div>

      <div>
        <List />
      </div>

      <div>
      <Profile1 person={{
        imageId: 'lrWQx8l',
        name: 'Subrahmanyan Chandrasekhar',
      }} />
      <Profile1 person={{
        imageId: 'MK3eW3A',
        name: 'Creola Katherine Johnson',
      }} />
      </div>

      <div>
      <FancyText title text="Get Inspired App" />
      <InspirationGenerator>
        <Copyright year={2004} />
      </InspirationGenerator>
      </div>
      
    </>
  )
}


function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default App
