import './App.css';
// import Home from './components/home/Home';
// import Hero from './components/product/hero/Hero';
// import Slider from './components/product/slider/Slider';
// import Related from './components/product/related/Related';
// import Recommend from './components/product/recommend/Recommend';
// import News from './components/product/news/News';
import ProductPage from './pages/ProductPage';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <>

<Routes >

<Route  path="/"  element={<ProductPage/>}/>




</Routes>



    </>
  );
}

export default App;
