import React from 'react';
import Login from './Login';
import SignUp from './components/Signup'

import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Homepage from './components/homepage';
import ProductForm from './components/ProductForm';

const App = () => {
  
return (
<BrowserRouter>
<Routes>
  <Route path='/signup' element = {<SignUp/>}/>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/login' element = {<Login/>}/>
  <Route path='/form' element = {<ProductForm/>}/>

</Routes>

</BrowserRouter>
)
  
  ;
};

export default App;

