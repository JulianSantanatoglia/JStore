// IMPORTS
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Layout from './components/pages/Layout'


// COMPONENTES
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <CartProvider>

    <Layout>
    <NavBar />
    <Banner slogan={'Vive tu pasión, viste tu equipo'} />
    </Layout>
    <Routes>
    <Route path='/' element={<ItemListContainer />}/>
    <Route path='/category/:categoryId'/>
    <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
    <Route path='*' element={<h1 className="error-404">Lo siento, esta página no existe</h1>}/>
    </Routes>
    </CartProvider>
    </BrowserRouter>
    <Footer />

    </div>
  );
}


// EXPORTS
export default App;
