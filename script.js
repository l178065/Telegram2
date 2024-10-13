// 随机生成价格范围在40到195之间
function getRandomPrice() {
  return Math.floor(Math.random() * (195 - 40 + 1)) + 40;
}

// 设置每个产品的价格
document.getElementById("price1").innerText = getRandomPrice();

function addToCart(button) {
  const product = button.closest(".product");
  const quantityDisplay = product.querySelector(".quantity");
  let quantity = parseInt(quantityDisplay.innerText);

  if (quantity === 0) {
    quantityDisplay.style.display = "block";
  }
  quantityDisplay.innerText = ++quantity;

  updateButtonVisibility(product, quantity);

  // 隐藏“加入购物车”按钮
  button.style.display = "none";
  // 显示减少和增加按钮
  product.querySelector(".controls").style.display = "flex";
}

function increaseQuantity(button) {
  const product = button.closest(".product");
  const quantityDisplay = product.querySelector(".quantity");
  let quantity = parseInt(quantityDisplay.innerText);
  quantityDisplay.innerText = ++quantity;

  updateButtonVisibility(product, quantity);
}

function decreaseQuantity(button) {
  const product = button.closest(".product");
  const quantityDisplay = product.querySelector(".quantity");
  let quantity = parseInt(quantityDisplay.innerText);
  if (quantity > 0) {
    quantityDisplay.innerText = --quantity;
    if (quantity === 0) {
      quantityDisplay.style.display = "none"; // 隐藏数量显示
      product.querySelector(".add-to-cart").style.display = "block"; // 显示“加入购物车”按钮
    }
  }

  updateButtonVisibility(product, quantity);
}

function updateButtonVisibility(product, quantity) {
  const controls = product.querySelector(".controls");
  controls.style.display = quantity > 0 ? "flex" : "none";
}
