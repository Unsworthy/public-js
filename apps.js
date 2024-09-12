const product = [
  {
    id: 1,
    product_name: "run it back Phoenix Asli CUYY",
    price: 150000,
    description: "Ulti asli cuy sakit parah",
    img_url: "produk/product-4.jpg",
    qty: 2,
  },
  {
    id: 2,
    product_name: "Empress GACOR",
    price: 150000,
    description: "Ilmu asli dari mommy Reyna CUYY",
    img_url: "produk/product-2.png",
    qty: 1,
  },
  {
    id: 3,
    product_name: "Overdrive Neon Asli CUYY",
    price: 150000,
    description: "Cocok Bila rumah sering mati lampu",
    img_url: "produk/product-3.png",
    qty: 1,
  },
];

const listproduct = document.getElementById("list-product");
const productview = product
  .map(
    (products) => ` <div class="col-lg-4 col-12">
          <div class="card" style="width: 18rem">
            <img src="${products.img_url}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${products.product_name}</h5>
              <p class="card-text">Harga: <span>Rp. ${products.price}</span></p>
              <p class="card-text">Qty: ${products.qty}</p>
              <p class="card-text">
                Description: <span>${products.description}</span>
              </p>
              <a href="#" class="btn btn-primary">Add to cart</a>
            </div>
          </div>
        </div>`
  )
  .join(",")
  .replaceAll(",", " ");

listproduct.innerHTML = productview;
