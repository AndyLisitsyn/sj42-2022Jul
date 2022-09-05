// https://www.codewars.com/kata/587593285448632b8d000143/train/javascript

async function submitOrder(user) {
  const shoppingCart = await OrderAPI.getShoppingCartAsync(user);
  const zipCode = (await CustomerAPI.getProfileAsync(user)).zipCode;
  const shippingRate = calculateShipping(shoppingCart, zipCode);
  const orderSuccessful = OrderAPI.placeOrderAsync(shoppingCart, shippingRate);
  console.log(
    `Your order ${orderSuccessful ? "was" : "was NOT"} placed successfully`
  );
}

// https://www.codewars.com/kata/5876a9f6b09010b1b4000191/train/javascript

ShoppingCart.prototype.addButtonClicked = function (item) {
  // Check if there's any of the item available
  this.checkQuantityAsync(item, this.addButtonClicked1.bind(this));
};

ShoppingCart.prototype.addButtonClicked1 = function ({ item, quantity }) {
  // If the item was in stock, add one to our cart
  if (quantity > 0) {
    this.addToCartAsync(item, 1, (success) => this.addButtonClicked2(success));
  }
};

ShoppingCart.prototype.addButtonClicked2 = function (success) {
  // If it was added to the cart, then refresh the display
  const self = this;
  if (success) {
    this.updateCartDisplayAsync(function () {
      self.addButtonClicked3.call(self, success);
    });
  }
};

ShoppingCart.prototype.addButtonClicked3 = function (success) {
  // Log the success or failure of our updates
  this.showMessage(
    `${success ? "Successfully" : "Unsuccessfully"} added item to cart`
  );
};

