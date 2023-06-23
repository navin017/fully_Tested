import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import { updateProduct } from '../redux/action/productAction';
import { deleteProduct } from '../redux/action/productAction';
import { setProducts } from '../redux/action/productAction';
import './products.css';
import { Form } from './form';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [showDetails, setShowDetails] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProductId, setHoveredProductId] = useState(null);
 
  const [confirm, setConfirm] = useState({
    isConfirm: false,
    productIdToDelete: null
  })
  const isEditing = (true);
  const showDetailsHandler = (productId) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [productId]: true,
    }));
  };
  const closeViewHandler = (productId) => {
    setShowDetails((prevState) => ({
      ...prevState,
      [productId]: false,
    }));
  };
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleConfirm = (productId) => {
    setConfirm({ isConfirm: true, productIdToDelete: productId });
  };

  const handleDeleteProduct = (productId) => {
    dispatch(deleteProduct(productId));
    setConfirm({ isConfirm: false, productIdToDelete: null });
  };
  const popUpSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='totControl' data-testid="all" title='alldiv'>

      {products.map((product) => (
        <div
          className='components'
          id={(product.id)}
          data-testid="component"
          key={product.id}
          onMouseEnter={() => setHoveredProductId(product.id)}
          onMouseLeave={() => setHoveredProductId(null)}
        >
          {product.id === hoveredProductId && (
            <HighlightOffIcon data-testid='dlt-icon' onClick={() => handleConfirm(product.id)} />
          )}

          <img className="imge" data-testid="imageComponent" src={product.image} alt='img' />
          <ul data-testid="listComponent">
            <div className='content'>
              <li className='modify' data-testid="3Components">
                <button data-testid='viewComponent' onClick={() => showDetailsHandler(product.id)} className='view-btn'>view</button>
                <AutoFixHighRoundedIcon onClick={() => handleEditProduct(product)} data-testid="editComponent" title='view-btn' />
                <div className='title' data-testid="proTitle">{product.title}</div>
              </li>
            </div>
          </ul>
          {showDetails[product.id] && (
            <div data-testid='viewDetails'>
            <table className='viewForm' >
              <tbody>
                <tr>
                  <td className='align'>
                    <img className="images" data-testid='imageDetails' src={product.image} alt='img' />
                  </td>
                </tr>
                <tr>
                  <td className='align'><label htmlFor='id' data-testid='detailsProName'>PRODUCT NAME</label></td>
                  <td data-testid='detailsProTitle'>{product.title}</td>
                </tr>
                <tr>
                  <td className='align'><label htmlFor='id' data-testid='detailsProId'>PRODUCT ID</label></td>
                  <td data-testid='detailsId'>{product.id}</td>
                </tr>
                <tr>
                  <td className='align'><label htmlFor='id' data-testid='detailsProSize'>PRODUCT SIZE</label></td>
                  <td data-testid='detailsSize'>{product.size}</td>
                </tr>
                <tr>
                  <td className='align'><label htmlFor='id' data-testid='detailsProQuantity'>PRODUCT QUANTITY</label></td>
                  <td data-testid='detailsQuantity'>{product.quantity}</td>
                </tr>
                <tr>
                  <td className='align'><label htmlFor='id' data-testid='detailsProPrice'>PRODUCT PRICE</label></td>
                  <td data-testid='detailsPrice'>{product.price}</td>
                </tr>
                <tr>
                  <td>
                    <button onClick={() => closeViewHandler(product.id)} className='closeview' data-testid='close-btn'>Close</button>
                  </td>

                </tr>
              </tbody>
            </table>
            </div>
          )}

        </div>
      ))}
      {selectedProduct && (
        <Form
          product={selectedProduct}
          handleClose={() => setSelectedProduct(null)}
          isEditing={isEditing}
        />
      )}
      {confirm.isConfirm && (
        <Popup
          productId={confirm.productIdToDelete}
          handleYes={handleDeleteProduct}
          handleNo={() => setConfirm({ isConfirm: false, productIdToDelete: null })}
        />
      )}
    </div>

  );


  function Popup({ productId, handleYes, handleNo }) {
    const handleDelete = () => {
      handleYes(productId);
    };

    return (
      <div data-testid="totPopUp" >
        <form className='confirm-form' data-testId="pop-form" onSubmit={popUpSubmit}>
          <h3 style={{ color: 'white' }} data-testId="pop-text">Are you willing to delete Product ?</h3>
          <br></br>
          <div className='btn' >
            <button className='confirm-btn1' onClick={handleDelete} data-testId="pop-yes">Yes</button>
            <button className='confirm-btn2' onClick={handleNo} data-testId="pop-no">No</button>
          </div>
        </form>
      </div>
    )
  }
};
