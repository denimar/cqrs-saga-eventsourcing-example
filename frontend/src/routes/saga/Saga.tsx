import React, { useState } from 'react'
import './Saga.scss'
import ItemsCard from '../../components/ItemsCard';
import useCustomers from '../../hooks/useCustomers';
import useProducts from '../../hooks/useProducts';
import IProductCart from '../../hooks/useProducts/IProductCart';
import NumberFormat from 'react-number-format';
import ICustomer from '../../hooks/useCustomers/ICustomer';

const Saga: React.FC = () => {
  const { loadingCustomers, errorFetchingCustomers, customers } = useCustomers();
  const { loadingProducts, errorFetchingProducts, products } = useProducts();
  const [ items, setItems ] = useState<IProductCart[]>([])
  const [ selectredCustomer, setSelectedCustomer ] = useState<ICustomer>()

  const addItem = (product: IProductCart) => {
    const foundItem = items.find((item: IProductCart) => item._id === product._id)
    if (foundItem) {
      foundItem.amount++
      setItems([ ...items ])      
    } else {
      setItems(items.concat({ ...product, amount: 1 }))
    }
  }

  const getAmount = () => {
    return items.reduce((acc, itm: IProductCart) => { return acc + itm.amount }, 0)
  }

  const getTotalProducts = () => {
    return items.reduce((acc, itm: IProductCart) => { return acc + itm.amount * itm.price }, 0)
  }

  const getTotalShipping = () => {
    const totalProducts = getTotalProducts()
    return totalProducts * 0.01
  }

  const getTotalOrder = () => {
    return getTotalProducts() + getTotalShipping()
  }

  const formatNumber = (value: string | number, showPrefix: boolean = false) => {
    return (
      <NumberFormat 
        displayType="text" 
        value={ value } 
        decimalScale={2} 
        fixedDecimalScale={true} 
        prefix={ showPrefix ? '$' : '' }
      />    
    )  
  }

  return (
    <div className="saga-container" >
      <ItemsCard 
        title="Customers" 
        loading={ loadingCustomers }
        error={ errorFetchingCustomers }        
        items={ customers } 
        canSelect={ true}
        itemRenderer={ customer => {
          const { _id, avatar, name, age } = customer
          return (
            <div className="items-card-item">
              <img src={ avatar } alt="avatar" />
              <div className="items-card-item-body">
                <span>{ name }</span>
                <span className="aditional-info">Age: { age }</span>
              </div>  
            </div>
          )
        }} 
        onSelectedItem={ (item: ICustomer) => setSelectedCustomer(item) }
      />

      <ItemsCard 
        title="Products" 
        loading={ loadingProducts }
        error={ errorFetchingProducts }        
        items={ products } 
        canSelect={ false }
        itemRenderer={ product => {
          const { _id, picture, title, stock } = product
          return (
            <div className="items-card-item">
              <img src={ picture } alt="avatar" />
              <div className="items-card-item-body">
                <span>{ title }</span>
                <div>
                  <span className="aditional-info">Available: { stock.onHand - stock.reserved }</span>
                  <button className="btn btn-outline-success" onClick={ () => addItem(product) }>+1</button>
                </div>  
              </div>  
            </div>
          )
        }} 
      />

      <div className="saga-order-container">
        <div className="saga-order-title">Order</div>
        <div className="saga-order-body">
          <div className="saga-order-items">
            {
              items.map((item: IProductCart) => {
                const total = item.price * item.amount
                return (
                  <div className="saga-order-item">
                    <div className="saga-order-item-title">{ item.title }</div>
                    <div className="saga-order-item-amount">{ formatNumber(item.amount) }</div>
                    <div className="saga-order-item-price">{ formatNumber(item.price, true) }</div>
                    <div className="saga-order-item-total">{ formatNumber(total, true) }</div>
                  </div>  
                )
              })
            }
          </div>  
            <div className="saga-order-totals">                
              <div className="saga-order-total-item">
                <div>CUSTOMER:</div><div>{ selectredCustomer?.name }</div>
              </div>  
              <div className="saga-order-total-item">
                <div>AMOUNT:</div><div>{ formatNumber(getAmount()) }</div>
              </div>  
              <div className="saga-order-total-item">            
                <div>PRODUCTS:</div><div>{ formatNumber(getTotalProducts(), true) }</div>
              </div>
              <div className="saga-order-total-item">              
                <div>SHIPPING:</div><div>{ formatNumber(getTotalShipping(), true)  }</div>
              </div>  
              <div className="saga-order-total-item">            
                <div>ORDER TOTAL</div><div>{ formatNumber(getTotalOrder(), true) }</div>
              </div>
            </div>                  
          <div className="saga-order-buttons">
            <button 
              disabled={ selectredCustomer === undefined }
              className="btn btn-outline-primary" 
              onClick={ () => alert('Order') }>Confirmation Order
            </button>          
          </div>  
        </div>        
      </div>
    </div>
  )
}
export default Saga