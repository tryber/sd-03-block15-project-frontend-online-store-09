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
          />
          <button
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
