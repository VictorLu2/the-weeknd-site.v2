// 商品資料陣列，每個商品包含 id、名稱、價格與圖片網址
const products = [
    { id: 1, name: "Hurry Up Tomorrow 2LP", price: 45, img: "../assets/hut-score-vinyl-disc-V2.webp" },
    { id: 2, name: "HERO POSTER TEE", price: 50, img: "../assets/hero_tee.webp" },
    { id: 3, name: "INSOMNIA TEE", price: 50, img: "../assets/white_tee.webp" },
    { id: 4, name: "POSTER HOODIE", price: 120.00, img: "../assets/hero_hoodie_front.webp" },
    { id: 5, name: "RED TERROR ZIP HOODIE", price: 120, img: "../assets/zip_up_front.webp" },
    { id: 6, name: "MP RATED TRUCKER HAT", price: 45, img: "../assets/trucker_front.webp" },
];

// 購物車資料物件，格式為 { 商品id: 數量 }
const cart = {};

// 渲染所有商品到畫面上
function renderProducts() {
    const container = document.getElementById("product-list"); // 取得商品容器區域

    // 使用 forEach 逐一處理每個商品
    products.forEach(p => {
        const card = document.createElement("div"); // 建立一個商品卡片容器
        card.className = "col-md-4 mb-4"; // Bootstrap 格式排版

        // 將商品內容加入 HTML
        card.innerHTML = `
      <div class="card product-card">
        <img src="${p.img}" class="card-img-top" alt="${p.name}">
        <div class="card-body">
          <h5 class="card-title">${p.name}</h5>
          <p class="card-text">$${p.price}</p>
          <button class="btn btn-dark" onclick="addToCart(${p.id})">ADD TO CART</button>
        </div>
      </div>
    `;
        container.appendChild(card); // 把這張卡片加入頁面上
    });
}

// 將指定商品加入購物車
function addToCart(id) {
    // 如果該商品已存在，就數量加 1，否則設定為 1
    cart[id] = (cart[id] || 0) + 1;
    renderCart(); // 重新渲染購物車內容
    alert("Added"); // 顯示提示
}

// 顯示購物車內容與總金額
function renderCart() {
    const cartItems = document.getElementById("cart-items"); // 購物車清單容器
    const cartTotal = document.getElementById("cart-total"); // 總金額顯示區
    cartItems.innerHTML = ""; // 先清空內容
    let total = 0; // 用來累加總金額

    // 用 for...in 逐一處理購物車中每一個商品
    for (let id in cart) {
        const p = products.find(p => p.id == id); // 找到對應商品資料
        const qty = cart[id]; // 該商品購買數量
        total += p.price * qty; // 累加小計

        // 建立每一項購物車商品的畫面內容
        const item = document.createElement("div");
        item.className = "d-flex justify-content-between align-items-center mb-2";
        item.innerHTML = `
      <div>
        <strong>${p.name}</strong><br>
        $${p.price} x ${qty}
      </div>
      <div>
        <button class="btn btn-sm btn-outline-light me-1" onclick="decreaseQty(${p.id})">-</button>
        <button class="btn btn-sm btn-outline-light" onclick="increaseQty(${p.id})">+</button>
        <button class="btn btn-sm btn-danger ms-2" onclick="removeFromCart(${p.id})">Delete</button>
      </div>
    `;
        cartItems.appendChild(item); // 加入到購物車區域
    }

    cartTotal.textContent = total; // 顯示總金額
}

// 增加某項商品的數量
function increaseQty(id) {
    cart[id]++;
    renderCart();
}

// 減少某項商品的數量，如果為 1 就刪除
function decreaseQty(id) {
    if (cart[id] > 1) {
        cart[id]--;
    } else {
        delete cart[id]; // 數量變 0 時就移除
    }
    renderCart();
}

// 完全移除某項商品
function removeFromCart(id) {
    delete cart[id];
    renderCart();
}

// 當網頁載入完成時，初始化商品列表
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});
