export default function addToCart(product) {
  const productChange = product;
  const cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
  if (cartProducts === null) {
    productChange.quantity = 1;
    return localStorage.setItem('cartProducts', JSON.stringify([{ ...productChange }]));
  }
  const itemRepetido = cartProducts.find((item) => item.id === productChange.id);
  if (itemRepetido) {
    const indexOfItemInCart = cartProducts.indexOf(itemRepetido);
    cartProducts[indexOfItemInCart].quantity += 1;
    return localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  }
  productChange.quantity = 1;
  return localStorage.setItem('cartProducts', JSON.stringify([...cartProducts, { ...productChange }]));
}
