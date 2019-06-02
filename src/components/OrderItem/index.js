import React, { Component } from 'react';
import './style.css'

class OrderItem extends Component {
  render() {
    const { 
      product 
    } = this.props
    return (
      <div className='orderItem'>
        <div className='orderItem__imgContainer'>
          <img alt='商品图片' src={product.imgUrl} className='orderItem__img'/>
        </div>
        <div className='orderItem__content'>
          <div className='orderItem__product'>{product.productName}</div>
          <div className='orderItem__shop'>{product.shopName}</div>
          <div className='orderItem__detail'>
            <div className='orderItem__price'>{product.price}</div>
            {
              product.isCommented
                ?<button className='orderItem__button orderItem__button--commented' disabled>已评价</button>
                :<button className='orderItem__button orderItem__button--notCommented'>评价</button>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default OrderItem;