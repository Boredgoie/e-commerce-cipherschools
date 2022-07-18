import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/product/:id" element={<ProductPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
