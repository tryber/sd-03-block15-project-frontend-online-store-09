import React from 'react';
import './FilterPrice.css'
import * as api from '../services/api';


class FilterPrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = { price: [] }
    this.orderProduct = this.orderProduct.bind(this);
  }

  componentDidMount() {
    api.getProductsFromCategoryAndQuery()
      .then(data => {
        const items = data.results;
        const price = items.map((element) => element.price)
        this.setState({ price: price })
      });
  }


  orderProduct(event) {
    const price = this.state.price;

    if (event === "Todos") {
      console.log(price);
    }
    if (event === "Menor") {
      console.log(price.sort(function compararNumeros(a, b) {
        return a - b;
      }))
    }
    if (event === "Maior") {
      console.log(price.sort(function compararNumeros(a, b) {
        return b - a;
      }))
    }
  }

  render() {
    return (
      <div className="filter-price">
        <span>Ordernar por preço &nbsp;</span>
        <select
          className="dropdown"
          onClick={(event) => this.orderProduct(event.target.value)}
        >
          <option value="Todos" >Todos</option>
          <option value="Menor" >Menor preço</option>
          <option value="Maior" >Maior preço</option>
        </select>
      </div>
    );
  }
}

export default FilterPrice;