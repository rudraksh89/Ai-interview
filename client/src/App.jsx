import React from 'react'
import Home from './pages/Home'
import Auth from './pages/Auth'
import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setuserData } from './redux/userSlice'

export const ServerUrl = "http://localhost:4000"
const App = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    const getUser = async()=>{
      try{
        const result = await axios.get(ServerUrl + "/api/user/current-user", {withCredentials:true});
        // console.log(result.data);
        dispatch(setuserData(result.data));
      }catch(error){
        console.log(error);
        dispatch(setuserData(null));
      }
    }
    getUser();
  },[dispatch])
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
    </Routes>
  )
}

export default App
