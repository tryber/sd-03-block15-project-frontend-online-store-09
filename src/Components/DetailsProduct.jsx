import React from 'react';
import './DetailsProduct.css';
import * as Api from '../services/api';

class test extends React.Component {
  constructor(props) {
    super(props);
  }
componentDidMount() {
  const id = this.props.location.key;
    Api.getProductsFromCategoryAndQuery(id)
    .then((products) => console.log(products));
}


  render() {
    const { title, price, thumbnail } = this.props.location.state.value;
    console.log(this.props.location.key)

    return (
      <div data-testid="product-detail-name">
        <div className="box-product">
          <h2>Produto</h2>
          <img src={thumbnail} alt={title} />
          <h3>{title}</h3>
        </div>
        <div className="details">
          <h2>Detalhes</h2>
          <ul>
            <li>{title}</li>
            <li>{price}</li>
            {/* <li>{id}</li> */}
          </ul>
        </div>
      </div>
    )
  }
}
export default test;
