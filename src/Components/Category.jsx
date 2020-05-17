import React from 'react';

class Category extends React.Component {
  render() {
    const { onChangeCategory, categories, selectedCategory } = this.props;
    return categories.map(({ id, name }) => (
      <div key={id}>
        <input
          data-testid="category"
          type="radio"
          id={id}
          value={id}
          name="category"
          checked={selectedCategory === id}
          onChange={onChangeCategory}
        />
        <label htmlFor={id}>{name}</label>
      </div>
    ));
  }
}

export default Category;
