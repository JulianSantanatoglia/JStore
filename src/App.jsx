// IMPORTS
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './components/pages/Layout'
import Contact from './components/Contact/Contact'
import AboutUs from './components/AboutUs/AboutUs'


// COMPONENTES
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    {/* <CartProvider> */}
    <Layout> 
      <Routes>
        <Route path='/' element={<ItemListContainer />}/>
        <Route path='/home' element={<ItemListContainer />}/>
        <Route path='/camisetas/:categoryId' element={<ItemListContainer />}/>
        <Route path='/product/:id' element={<ItemDetailContainer />}/>
        <Route path='*' element={<h1 className="error-404">Lo siento, esta página no existe</h1>}/>
      </Routes>
    </Layout>
    {/* </CartProvider> */}
    </BrowserRouter>
  

    </div>
  );
}


// EXPORTS
export default App;
