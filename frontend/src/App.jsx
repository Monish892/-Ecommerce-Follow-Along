

import React from 'react';
import Login from './Login';
import SignUp from './components/Signup'

import {Route, Routes, BrowserRouter} from 'react-router-dom'

const App = () => {
  
return (
<BrowserRouter>
<Routes>
  <Route path='/signup' element = {<SignUp/>}/>
  <Route path='/login' element = {<Login/>}/>
</Routes>
</BrowserRouter>
)
  
  ;
};

export default App;

