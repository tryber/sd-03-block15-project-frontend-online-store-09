import React from 'react';

class Category extends React.Component {

  render() {
    const { onChange, categories } = this.props;
    return categories.map(({ id, name }) => (
      <div key={id}>
        <label htmlFor={id}>{name}</label>
        <input
          checked
          type="radio"
          onChange={onChange}
          id={id}
          name="category"
          data-testid="category"
          to="/"
          name="categories"
        />
      </div>
    ));
  }
}

export default Category;
