import React, { Component } from 'react';
import './SearchBox.css';

export class SearchBox extends Component {
  render() {
    const { handleClick, searchText, handleChange } = this.props;
    return (
      <div>
        <div>
          <input
            data-testid="query-input"
            className="inputArea"
            value={searchText}
            onChange={handleChange}
            placeholder="Buscar produtos,marcas e muito mais... "
          />
          <button
            className="sb-btn"
            type="submit"
            data-testid="query-button"
            onClick={handleClick()}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default SearchBox;
