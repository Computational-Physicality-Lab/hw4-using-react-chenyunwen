import React, { Component } from 'react';
import { Routes, Route, Redirect } from 'react-router-dom';
import appRoutes from './shared/appRoutes';

import NavBar from './containers/NavBar/NavBar';
import Footer from './containers/Footer/Footer';
import HomePage from './containers/HomePage/HomePage';
import NotImplementedPage from './containers/NotImplementedPage/NotImplementedPage';
import ProductsPage from './containers/ProductsPage/ProductsPage';
import DetailsPage from './containers/ProductsPage/DetailsPage/DetailsPage';
import ShoppingCartPage from './containers/ShoppingCartPage/ShoppingCartPage';

import './App.css';

class App extends Component{
  constructor(props) { 
    super(props);
    // this.total_quantity = 0;
    // this.cart= [];
    this.state={
      total_quantity: 0,
      cart: []
    }
    this.add_to_cart = this.add_to_cart.bind(this);
  }
  
  add_to_cart(name, cur_color, quantity, size){
    // console.log("name:" + name);

    let product = {
      "name": name,
      "color": cur_color,
      "quantity": quantity,
      "size": size
    }
    const cart = this.state.cart;
    cart.push(product);
 
    this.setState({
        cart
    });
    // this.cart.push(product);
    const total_quantity = this.state.total_quantity + product.quantity;
    // total_quantity += product.quantity;
    this.setState({total_quantity});
    // this.setState({
    //   carts
    // });
    // console.log("cart: " + this.state.total_quantity);
    // console.log(this.state.cart);
  }
  
  render(){
    return (
      <div className="App">
        <NavBar total_quantity={this.state.total_quantity} />
        {/* <header className="App-header"></header> */}
        <div className='MainContent'>
          <Routes>
            <Route path ={appRoutes.home} element={<HomePage />}  exact="true" />
            <Route path ={appRoutes.not_implemented} element={<NotImplementedPage />}/>
            <Route path ={appRoutes.products} element={<ProductsPage />}/>
            <Route path ={appRoutes.product} element={<DetailsPage add_to_cart={this.add_to_cart}/>}/>
            <Route path ={appRoutes.my_cart} element={<ShoppingCartPage total_quantity={this.state.total_quantity}/>}/>
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       {/* <header className="App-header"></header> */}
//       <div className='MainContent'>
//         <Routes>
//           <Route path ={appRoutes.home} element={<HomePage />}  exact="true" />
//           <Route path ={appRoutes.not_implemented} element={<NotImplementedPage />}/>
//           <Route path ={appRoutes.products} element={<ProductsPage />}/>
//           <Route path ={appRoutes.product} element={<DetailsPage />}/>
//         </Routes>
//       </div>
//       <Footer />
//     </div>
//   );
// }

export default App;
