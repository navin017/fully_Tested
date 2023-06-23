import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductList } from './productList';
import {Form} from './form'

export const Header = () => {
  const [showForm, setShowForm] = useState(false);
  const openForm = () => {
    setShowForm(true);
  };
  const closeForm = () => {
    setShowForm(false);
  };
  
  return (
    <>
    <> 
    <div Data-testid='headerAll'>
      <header className="App-header">
        <div className="top">
          <Link to="/login" className="link" >
            <button className="AdminButton" Data-testid='logout'>
              <p className="toptext">LOGOUT</p>
            </button>
          </Link>
          <button className="AdminButton" onClick={openForm} Data-testid='add_product'>
            <p className="toptext">ADD PRODUCT</p>
          </button>
          <div className="topic">
            <h1 className="headtext" Data-testid='heading'>SHOP-CART</h1>
          </div>
        </div> 
      </header>
     <ProductList/>
    </div>
    </>
    {showForm && <Form handleClose={closeForm} />}
</>
  );
};
