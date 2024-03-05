import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Menu from './components/Menu/Menu';
import Home from './pages/Home/Home';
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
          <Route path='/men' element={<Categories banner={men_banner} category='men' />} />
          <Route path='/women' element={<Categories banner={women_banner} category='women' />} />
          <Route path='/kids' element={<Categories banner={kids_banner} category='kids' />} />
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
