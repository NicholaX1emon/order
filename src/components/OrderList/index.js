import React, { Component } from 'react';
import OrderItem from '../OrderItem'

class OrderList extends Component {
  
  render() {
    const {
      products
    } = this.props
    
    return (
      <div>
        {
          products.map(product => {
            return <OrderItem product={product} key={product.id}/>
          })
        }
      </div>
    );
  }
}

export default OrderList;