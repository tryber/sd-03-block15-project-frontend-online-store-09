import React from 'react';
import { Link } from 'react-router-dom';

class ListDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Link
          data-testid="product-detail-link"
          to={{
            pathname: "/DetailsProduct",
            state: this.props,
          }}
        >
          Detalhes
        </Link>
      </div>
    )
  }
}

export default ListDetails;
