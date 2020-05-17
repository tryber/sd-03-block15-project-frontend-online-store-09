import React from 'react';
import { Link } from 'react-router-dom';
import './ListDetails.css';

class ListDetails extends React.Component {
  render() {
    return (
      <div>
        <Link
          className="detailLinkStyle"
          data-testid="product-detail-link"
          to={{
            pathname: '/DetailsProduct',
            state: this.props,
          }}
        >
          Detalhes
        </Link>
      </div>
    );
  }
}

export default ListDetails;
