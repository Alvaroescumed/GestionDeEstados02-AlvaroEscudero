import { useEffect, useState } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'

function App() {

  const dispatch = useDispatch();

  //fetcheamos el placeholder
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => dispatch(addUser(data)))
      .catch((err) => console.log(err));
  }, []);


  return (
    <>
     
    </>
  )
}

export default App
