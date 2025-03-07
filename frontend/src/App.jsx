import React from 'react';


import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Homepage from './components/homepage';
import ProductForm from './components/ProductForm';
import { useState } from 'react';
import LoginForm from './Login';
import SignupForm from './components/Signup';
import ProductList from './components/productlist';
import ProductCard from './components/productcard';
import EditProductPage from './components/productpage';


const App = () => {

  const [user, setUser] = useState(null);
  
return (
<BrowserRouter>

<Routes>

  <Route path='/signup' element = {<SignupForm setUser={setUser}/>}/>
  <Route path='/' element={<Homepage/>}/>
  <Route path='/login' element = {<LoginForm user={user}/>}/>
  <Route path='/form' element = {<ProductForm/>}/>
  <Route path='/product' element = {<ProductList/>}/>
  <Route path='/card' element = {<ProductCard/>}/>
  <Route path='/page' element = {<EditProductPage/>}/>
</Routes>

</BrowserRouter>
)
  
  ;
};

export default App;

