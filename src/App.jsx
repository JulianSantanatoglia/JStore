// IMPORTS

import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartContextProvider from './context/CartContext'
import Layout from './components/pages/Layout'
import Cart from './components/Cart/Cart'

function App() {
  const TituloDelProyecto = "Camisetas de Futbol";
  
  return (
    <CartContextProvider>
    <div className="App">
    <BrowserRouter>
    <Layout> 
      <Routes>
        <Route path='/' element={<ItemListContainer title={TituloDelProyecto} />}/>
        <Route path='/home' element={<ItemListContainer />}/>
        <Route path='/camisetas/:categoryId' element={<ItemListContainer />}/>
        <Route path='/product/:id' element={<ItemDetailContainer />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='*' element={<h1 className="error-404">Lo siento, esta página no existe</h1>}/>
      </Routes>
    </Layout>
    </BrowserRouter>
    </div>
    </CartContextProvider>

  );
}


// EXPORTS
export default App;
