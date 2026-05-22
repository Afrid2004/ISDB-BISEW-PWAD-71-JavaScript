subtotal();

const showCart = () => {
  let cartContainer = document.getElementById("cart-container");
  let itemCountText = document.querySelector(".item-count");
  let cart = JSON.parse(localStorage.getItem("product-cart")) ?? [];
  let HTML = "";
  cart.map((cart) => {
    HTML += `
                  <div class="product-card p-3 shadow-sm">
                    <div class="row align-items-center">
                      <div class="col-md-2">
                        <img
                          src="${cart.thumbnail}"
                          alt="Product"
                          class="product-image"
                        />
                      </div>
                      <div class="col-md-3">
                        <h6 class="mb-1">${cart.title}</h6>
                        <p class="text-muted mb-0">Black | Premium Series</p>
                        <span class="discount-badge mt-2">20% OFF</span>
                      </div>
                      <div class="col-md-3">
                        <div class="d-flex align-items-center gap-2">
                          <button
                            class="quantity-btn"
                            onclick="updateQuantityDecrement(${cart.id})"
                          >
                            -
                          </button>
                          <input
                            type="number"
                            class="quantity-input"
                            value="${cart.qty}"
                            min="1"
                          />
                          <button
                            class="quantity-btn"
                            onclick="updateQuantityIncrement(${cart.id})"
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div>
                          <span class="fw-bold">$${cart.price}</span>
                          <span class=" me-2">Unit price</span>
                        </div>
                        <div>
                        <span class="fw-bold">$${(cart.price * cart.qty).toFixed(2)}</span>
                        <span> Subtotal</span>
                        </div>
                      </div>
                      
                      <div class="col-md-1" onclick="deleteItem(${cart.id})">
                        <i class="bi bi-trash remove-btn"></i>
                      </div>
                    </div>
                  </div>`;
  });
  cartContainer.innerHTML = HTML;
  let item = cart.length > 1 ? "items" : "item";
  itemCountText.innerHTML = `${cart.length} ${item}`;
  itemCount();
};

showCart();

const updateQuantityIncrement = (id) => {
  let cart = JSON.parse(localStorage.getItem("product-cart")) ?? [];
  let updatedCart = cart.map((item) => {
    if (item.id == id) {
      return { ...item, qty: item.qty + 1 };
    } else {
      return item;
    }
  });
  localStorage.setItem("product-cart", JSON.stringify(updatedCart));
  showCart();
  subtotal();
};

const updateQuantityDecrement = (id) => {
  let cart = JSON.parse(localStorage.getItem("product-cart")) ?? [];
  let updatedCart = cart.map((item) => {
    if (item.id == id && item.qty > 1) {
      return { ...item, qty: item.qty - 1 };
    } else {
      return item;
    }
  });
  localStorage.setItem("product-cart", JSON.stringify(updatedCart));
  showCart();
  subtotal();
};

const deleteItem = (id) => {
  let cart = JSON.parse(localStorage.getItem("product-cart")) ?? [];
  let updatedCart = cart.filter((item) => item.id != id);
  localStorage.setItem("product-cart", JSON.stringify(updatedCart));
  showCart();
  subtotal();
};

function subtotal() {
  let text = document.querySelector(".subtotal-text");
  let cart = JSON.parse(localStorage.getItem("product-cart")) ?? [];
  let total = cart.reduce((acc, item) => {
    return (acc += item.price * item.qty);
  }, 0);
  text.innerHTML = `$${total}`;
}

function itemCount() {
  let itemCountText = document.querySelector(".cart_items_count");
  let cart = JSON.parse(localStorage.getItem("product-cart")) ?? [];
  if (cart.length > 0) {
    itemCountText.innerHTML = `<span class="position-absolute top-0 start-100 translate-middle badge badge-xs rounded-pill bg-danger">
            ${cart.length}
           </span>`;
  }
}
