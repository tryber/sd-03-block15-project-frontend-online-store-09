export default function addToCart(product) {
  const productChange = product;
  const cartItems = JSON.parse(localStorage.getItem('cartItems'));
  if (cartItems === null) {
    productChange.quantity = 1;
    return localStorage.setItem('cartItems', JSON.stringify([{ ...productChange }]));
  }
  const itemRepetido = cartItems.find((item) => item.id === productChange.id);
  if (itemRepetido) {
    const indexOfItemInCart = cartItems.indexOf(itemRepetido);
    cartItems[indexOfItemInCart].quantity += 1;
    return localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
  productChange.quantity = 1;
  return localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...productChange }]));
}
