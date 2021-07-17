import './App.css';
import { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Body from './components/Body';
import Content from './components/Content';
import ProductPage from './pages/ProductPage';

function App() {
  
  const [products, setProducts] = useState([])

  const [selectedProduct, setSelectedProduct] = useState({})

  const getProducts = () => {
    fetch('https://e-commerce-apiv3.herokuapp.com/products')
      .then(response => response.json())
      .then(apiProducts => setProducts(apiProducts))
  }

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
        console.log('i resized');
      }
    };

    window.addEventListener('resize', hideMenu);

    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  });

  useEffect(getProducts, [])

  return (
    <>
      <Navbar toggle={toggle} />
      { isOpen ? null : <Body toggle={toggle}/>}
      <Switch>
        { isOpen ? <Route exact path='/content'><Content products={products} setSelectedProduct={setSelectedProduct}/></Route> : null}
        <Route exact path='/product/:id'><ProductPage product={selectedProduct}/></Route>
        { isOpen ? <Route exact path='/' component={Body}></Route> : null }
      </Switch>
    </>
  );
}

export default App;
