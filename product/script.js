let allProduct = document.getElementById("allProduct");
const getProduct = async () => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    let products = data.products;

    products.map((product) => {
      let { title, thumbnail, description, price, id } = product;
      let secondImage =
        product.images.length > 1 ? product.images[1] : product.images[0];
      //product object to json format conversion (for setting in localstorage)
      let cartProduct = JSON.stringify({
        title,
        thumbnail,
        description,
        price,
        id,
        qty: 1,
      });

      allProduct.innerHTML += `
            <div class="col-md-3 col-sm-6 mb-3 d-flex">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="#" class="image">
                                    <div class="bg-white">
                                    <img class="pic-1" src="${thumbnail}">
                                    <img class="pic-2" src="${secondImage}">  
                                    </div>
                                </a>

                                
                                <a href="#" class="product-like-icon" data-tip="Add to Wishlist">
                                    <i class="far fa-heart"></i>
                                </a>
                                <ul class="product-links">
                                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                                    <li onclick='addToCart(${cartProduct})'><a href="#"><i class="fas fa-shopping-cart"></i></a></li>
                                    <li><a href="#"><i class="fa fa-random"></i></a></li>
                                </ul>
                            </div>
                            <div class="product-content p-3">
                                <h3 class="title"><a href="#">${title}</a></h3>
                                <div class="price">$${price}</div>
                            </div>
                        </div>
                    </div>
              `;
    });
  } catch (err) {
    console.log(err.message);
  }
};
getProduct();

const addToCart = (product) => {
  //if localstorage have any key like product-cart then get key, neither set the key
  JSON.parse(localStorage.getItem("product-cart")) ??
    localStorage.setItem("product-cart", JSON.stringify([]));
  //get the product cart
  let cart = JSON.parse(localStorage.getItem("product-cart"));
  //before setting this product into localstorage check weather it exist in the local storage or not
  let isExist = cart.find((item) => item.id == product.id);
  if (isExist) {
    //if already this product in the cart then increase it's quentity
    isExist.qty = isExist.qty += 1;
  } else {
    cart.push(product);
  }
  //in the end set the product in the local storage
  localStorage.setItem("product-cart", JSON.stringify(cart));
};
