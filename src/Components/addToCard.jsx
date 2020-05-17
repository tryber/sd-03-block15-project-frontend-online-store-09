export const addToCart = (product, cartItems) => {
  if (cartItems === null) {
    product.quantity = 1;
    return localStorage.setItem('cartItems', JSON.stringify([{ ...product }]));
  }
  const itemRepetido = cartItems.find((item) => item.id === product.id);
  if (itemRepetido) {
    const indexOfItemInCart = cartItems.indexOf(itemRepetido);
    cartItems[indexOfItemInCart].quantity += 1;
    return localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  product.quantity = 1;
  return localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...product }]));
}
