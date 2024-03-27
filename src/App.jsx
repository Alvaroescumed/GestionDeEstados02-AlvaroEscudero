import { useEffect} from 'react'
import './App.css'
import { useDispatch} from 'react-redux'
import  {Header} from './components/Header';
import {Email} from './components/Email';
import { addUser } from './redux/userSlice';



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
        <Header />
        <Email />
    </>
  )
}

export default App;
