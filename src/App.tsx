import { useState } from 'react'
import './App.css'
import { Button } from './components'
import { useFetch } from './hooks'

const url = "https://api.example.com/data"

interface Data {
  name: string
  lastName: string
  age: number
}

function App() {
  const { data, loading, error } = useFetch<Data>(url)
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Roger")

  const changeName = () => {
    setName("Omar")
  }

  const countMore = () => {
    setCount((count) => count + 1)
  }

  const countLess = () => {
    if(count > 0){
      setCount(count - 1)
    }
  }

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>{error.message}</div>
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

        <div>
          {JSON.stringify(data)}
        </div>
      </div>
    </>
  )
}

export default App