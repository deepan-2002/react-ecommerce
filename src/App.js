import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Footer from './components/Footer/Footer';
import Categories from './pages/Categories/Categories';
import men_banner from './Assets/img/banner_mens.png'
import women_banner from './Assets/img/banner_women.png'
import kids_banner from './Assets/img/banner_kids.png'
import Product from './pages/Product/Product';
import Cart from './pages/Cart/Cart';
import SearchResult from './pages/SearchResult/SearchResult';


function App() {
  return (
    <>
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/men' element={<Categories banner={men_banner} category='men' />} />
          <Route path='/women' element={<Categories banner={women_banner} category='women' />} />
          <Route path='/kid' element={<Categories banner={kids_banner} category='kid' />} />
          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/search-result' element={<SearchResult/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
