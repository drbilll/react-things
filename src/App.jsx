
import './App.css'

function App() {
  return (
    <> 
      <div>
        <Gallery />
      </div>

      <div>
        <ToDoList />
        <Bio />
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
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
