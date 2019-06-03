import React, { Component } from 'react';
import './style.css'

class OrderItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isEditingComment: false,
      comment: '',
      rating: 0,
    }
  }

  handleCommentClick = () => {
    this.setState({
      isEditingComment: true
    })
  }

  handleCommentChange = event => {
    this.setState({
      comment: event.target.value
    })
  }

  handleRatingClick = stars => {
    this.setState({
      rating: stars
    })
  }

  handleCommentSubmit = () => {
    const {
      onSubmit,
      product
    } = this.props
    
    const {
      rating,
      comment
    } = this.state

    this.setState({
      isEditingComment: false
    }) 
    onSubmit(product.id, comment, rating)
  }

  handleCancelClick = () => {
    this.setState({
      isEditingComment: false,
      comment: this.state.comment || '',
      rating: this.state.rating || 0
    })
  }
 
  render () {
    const { 
      product 
    } = this.props

    const stars = [1,2,3,4,5]

    return (
      <div>
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
                  ?<button className='orderItem__button orderItem__button--commented'>已评价</button>
                  :<button className='orderItem__button orderItem__button--notCommented' onClick={this.handleCommentClick}>评价</button>
              }
            </div>
          </div>
        </div>
        {
          this.state.isEditingComment ? 
          <div className='orderItem__commentContainer'>
            <textarea onChange={this.handleCommentChange}
                      value={this.state.comment}
                      className='orderItem__comment'/>
            <div>
              {
                stars.map((item, index) => {
                  const ratingClass = this.state.rating >= item ? 'orderItem__star--lit' : ''
                  return <span onClick={this.handleRatingClick.bind(this, item)} 
                                className={ratingClass}
                                key={index}>★</span>
                })
              }
            </div>
            {
              !product.isCommented ? 
              <button className='orderItem__button orderItem__button--notCommented'
                      onClick={this.handleCommentSubmit}
              >
                提交
              </button>
              : null        
            }
            <button className='orderItem__button orderItem__button--commented'
                    onClick={this.handleCancelClick}
            >
              取消
            </button>
          </div>
          : null 
          }
      </div>
    );
  }
}

export default OrderItem;