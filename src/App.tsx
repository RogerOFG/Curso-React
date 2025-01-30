import { useState } from 'react'
import './App.css'
import { Button } from './components';

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Roger")

  const changeName = () => {
    setName("Omar");
  }

  const countMore = () => {
    setCount((count) => count + 1)
  }

  const countLess = () => {
    if(count > 0){
      setCount(count - 1);
    }
  }

  return (
    <>
      <div className="card">
        <p className='pb-8'>{name}</p>
        <Button label='Cambiar Nombre' parentMethod={changeName} />

        <div className='flex justify-around gap-5 pt-10 m-auto'>
          <Button label='Suma' parentMethod={countMore} />

          <Button label='Resta' parentMethod={countLess} />
        </div>

        <p className='pt-8'>Count is {count}</p>
      </div>
    </>
  )
}

export default App