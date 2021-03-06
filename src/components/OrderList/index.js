import React, { Component } from 'react';
import OrderItem from '../OrderItem'

class OrderList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: []
    }
  }
  componentDidMount() {
    fetch('/mock/orderlist.json').then(res => {
      if(res.ok){
        res.json().then(data => {
          this.setState({
            products: data
          })
        })
      }   
    })
  }
  
  
  render() {
    const {
      products
    } = this.state
    
    const handleSubmit = (id, comment, rating) => {
      const newProducts = products.map(item => {
        return item.id === id 
          ? {
            ...item,
            comment,
            rating,
            isCommented: true
          }
          : item
      })
      this.setState({
        products: newProducts
      })
    }

    return (
      <div>
        {
          products.map(product => {
            return <OrderItem product={product} onSubmit={handleSubmit} key={product.id}/>
          })
        }
      </div>
    );
  }
}

export default OrderList;