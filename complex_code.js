/* complex_code.js */

// This code is a simulation of a shopping cart system

// Define products in the cart
const cartItems = [
  { id: 1, name: 'Product 1', price: 10.99, quantity: 2 },
  { id: 2, name: 'Product 2', price: 5.99, quantity: 1 },
  { id: 3, name: 'Product 3', price: 19.99, quantity: 3 },
  { id: 4, name: 'Product 4', price: 7.99, quantity: 2 },
  { id: 5, name: 'Product 5', price: 12.99, quantity: 4 }
];

// Calculate the total price for each product
const calculateSubtotal = () => {
  cartItems.forEach(item => {
    item.subtotal = item.price * item.quantity;
  });
};

// Calculate the total price of the cart
const calculateTotal = () => {
  let total = 0;
  
  cartItems.forEach(item => {
    total += item.subtotal;
  });
  
  return total;
};

// Apply discounts to the cart
const applyDiscounts = () => {
  const discountPercentage = 0.1;
  
  cartItems.forEach(item => {
    item.subtotal -= item.subtotal * discountPercentage;
  });
};

// Print the cart contents and total price
const printCart = () => {
  cartItems.forEach(item => {
    console.log(`${item.name} x ${item.quantity}: $${item.subtotal.toFixed(2)}`);
  });

  console.log(`Total: $${calculateTotal().toFixed(2)}`);
};

// Initialize the cart
calculateSubtotal();
applyDiscounts();
printCart();

// Perform additional operations on the cart as required.

// ...

// Export necessary functions or variables for external use if needed
export { calculateSubtotal, applyDiscounts, printCart };