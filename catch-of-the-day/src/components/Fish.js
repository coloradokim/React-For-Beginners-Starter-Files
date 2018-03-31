import React from 'react'
import { formatPrice } from '../helpers'

class Fish extends React.Component {
  render() {
    const { image, name, price, description, status } = this.props.details
    return (
      <li class="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span class="price">{formatPrice(price)}</span>
        </h3>
        <p>{description}</p>
        <button>Add to Cart</button>
      </li>
    )
  }
}

export default Fish
