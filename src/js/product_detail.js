const sizeList = ["S", "M", "L", "XL", "XXL", "2XL", "3XL"];
let selectedSize = null;
const sizeOutStock = "2XL";

function getProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("product_id");
  const product = allData.find((item) => item.id === Number(productId));

  let productDescription = "";

  if (product) {
    switch (product.category) {
      case "sales":
        productDescription =
          "95% cotton 5% spandex. <br /> Giặt máy ở chế độ nhẹ, nhiệt độ thường. <br /> Không sử dụng hóa chất tẩy có chứa Clo. <br /> Phơi trong bóng mát. <br /> Sấy khô ở nhiệt độ thấp. Là ở nhiệt độ thấp 110 độ C. <br /> Giặt với sản phẩm cùng màu. Không là lên chi tiết trang trí.";
        break;
      case "tui-xach":
        productDescription =
          "Túi xách da cao cấp phong cách thanh lịch<br>Chất liệu: Da bò thật 100% được tuyển chọn kỹ lưởng<br>Đặc điểm nổi bật:<br>- Thiết kế hiện đại, phù hợp công sở và dạo phố<br>- Ngăn chứa rộng rãi, có nhiều túi phụ tiện lợi<br>- Dây đeo có thể điều chỉnh độ dài<br>- Khóa kéo kim loại cao cấp bền bỉ<br>Bảo hành 12 tháng cho các lỗi từ nhà sản xuất";
        break;
      case "giay-cao-got":
        productDescription =
          "Giày cao gót nữ sang trọng đẳng cấp<br>Chất liệu: Da tổng hợp cao cấp, đế cao su chống trượt<br>Chiều cao gót: 7cm - Độ cao lý tưởng để di chuyển thoải mái<br>Màu sắc: Đen bóng thời thượng<br>Đặc điểm nổi bật:<br>- Thiết kế mũi nhọn thanh lịch<br>- Đế giày êm ái, có lớp đệm chống mỏi<br>- Phù hợp công sở, dự tiệc và các sự kiện quan trọng<br>- Dễ dàng kết hợp với nhiều trang phục khác nhau";
        break;
      case "phu-kien-nu":
        productDescription =
          "Bộ trang sức nữ sang trọng quý phái<br>Chất liệu: Bạc 925 cao cấp, đính đá pha lê Swarovski<br>Màu sắc: Bạc trắng sáng bóng<br>Bộ sản phẩm gồm:<br>- Vòng cổ choker thanh lịch<br>- Vòng tay đính đá tinh tế<br>Thiết kế hiện đại, dễ dàng phối với nhiều trang phục<br>Phù hợp đi tiệc, dạo phố hoặc làm quà tặng<br>Bảo hành 12 tháng cho bạc và đá";
        break;
      case "that-lung":
        productDescription =
          "Thắt lưng da nữ cao cấp<br>Chất liệu: Da bò thật 100%, khóa hợp kim cao cấp<br>Kích thước: Dài 105cm, Rộng 2.8cm<br>Màu sắc: Đen sang trọng / Nâu thời trang<br>Đặc điểm:<br>- Thiết kế thanh lịch, khóa kim loại tinh tế<br>- Phù hợp với váy, quần jeans và trang phục công sở<br>- Dễ dàng điều chỉnh size<br>Bảo hành 6 tháng cho khóa và da";
      default:
        "Không có mô tả cho sản phẩm này";
    }
  }

  if (product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("maSP").textContent = "Mã sản phẩm: " + product.id;
    document.getElementById("product-price").innerHTML =
      "Giá: " + product.price.toLocaleString("vi-VN") + "  &#8363;";
    document.getElementById("product-image").src = product.img;
    document.getElementById("product-description").innerHTML =
      productDescription;
    if (product.discount) {
      document.getElementById("product-old-price-text").innerHTML +=
        "Giá Gốc: ";
      document.getElementById("product-old-price").innerHTML +=
        " " + product.lastPrice + "  &#8363;";
      document.getElementById("product-price-discount").innerHTML =
        "Giảm giá: " + product.discount;
    }

    const sizeListContainer = document.getElementById("size-list");
    sizeListContainer.innerHTML = "";

    const firstAvailableSize = sizeList.find((size) => size !== sizeOutStock);
    selectedSize = selectedSize || firstAvailableSize;

    sizeList.forEach((size) => {
      const button = document.createElement("button");
      button.textContent = size;
      button.classList.add(
        "size-btn",
        "!min-w-[40px]",
        "border",
        "px-2",
        "py-1",
        "rounded",
        "mx-1",
        "transition-all",
        "duration-300",
        "hover:bg-gray-100"
      );

      if (size === selectedSize) {
        button.classList.add("bg-blue-500", "text-white", "font-semibold");
      }

      if (size === sizeOutStock) {
        button.disabled = true;
        button.classList.add("bg-gray-200", "opacity-50", "cursor-not-allowed");
      }

      button.addEventListener("click", () => {
        selectedSize = size;
        document.querySelectorAll(".size-btn").forEach((btn) => {
          btn.classList.remove("bg-blue-500", "text-white", "font-semibold");
        });
        button.classList.add("bg-blue-500", "text-white", "font-semibold");
      });

      sizeListContainer.appendChild(button);
    });
  }
}

getProductDetail();

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

// Hàm thêm vào giỏ hàng
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const existingItem = cart.find(
    (item) => item.id === product.id && item.size === selectedSize
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.img,
      size: selectedSize,
      quantity: 1,
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  Toastify({
    node: createCustomToast(product),
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    onClick: function () {
      const toasts = document.querySelectorAll(".toastify");
      toasts.forEach((toast) => toast.remove());
      toggleDrawer();
    },
    style: {
      background: "white",
      color: "black",
      boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
      padding: 0,
      minWidth: "300px",
      display: "flex",
    },
  }).showToast();

  function createCustomToast(product) {
    const div = document.createElement("div");
    div.className = "flex items-center p-4";
    div.innerHTML = `
        <img src="${product.img}" class="w-16 h-16 object-cover rounded-lg" />
        <div class="ml-4 flex-1">
            <p class="font-medium text-gray-800">Thêm vào giỏ hàng thành công!</p>
            <p class="text-gray-600 text-sm mt-1 line-clamp-1">${product.name}</p>
        </div>
    `;
    return div;
  }

  updateCartUI();
  updateCartCounter();
}

function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const cart = JSON.parse(localStorage.getItem("cart"));
  const totalContainer = document.getElementById("cart-total");
  const shippingFee = 30000;

  cartItems.innerHTML = "";
  let subtotal = 0;

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="flex flex-col items-center justify-center py-8">
        <i class="fas fa-shopping-cart text-gray-300 text-5xl mb-4"></i>
        <p class="text-gray-500 text-lg">Bạn chưa thêm mặt hàng nào</p>
      </div>
    `;
    totalContainer.classList.add("hidden");
  } else {
    cart.forEach((item) => {
      subtotal += item.price * item.quantity;
      cartItems.innerHTML += `
        <div class="flex items-center gap-4 border-b hover:bg-gray-50 p-4 transition-all duration-300">
          <img src="${
            item.image
          }" class="w-24 h-24 object-cover rounded-lg shadow-sm" />
          <div class="flex-1">
            <h3 class="font-semibold text-lg text-gray-800 mb-1">${
              item.name
            }</h3>
            <p class="text-gray-600 text-sm mb-1">Size: <span class="font-medium">${
              item.size
            }</span></p>
            <p class="text-red-600 font-bold mb-2">${item.price.toLocaleString(
              "vi-VN"
            )} ₫</p>
            <div class="flex items-center gap-2">
              <div class="flex items-center border rounded-lg overflow-hidden">
                <button onclick="updateQuantity(${item.id}, '${
        item.size
      }', -1)" class="px-3 py-1 hover:bg-gray-100 transition-colors">-</button>
                <span class="px-4 py-1 border-x bg-white">${
                  item.quantity
                }</span>
                <button onclick="updateQuantity(${item.id}, '${
        item.size
      }', 1)" class="px-3 py-1 hover:bg-gray-100 transition-colors">+</button>
              </div>
              <button onclick="removeItem(${item.id}, '${
        item.size
      }')" class="ml-4 text-gray-400 hover:text-red-600 transition-colors">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      `;
    });

    // Load voucher
    const voucherHTML = `
  <div">
    <h4 class="font-medium mb-2">Chọn voucher:</h4>
    <div class="flex flex-wrap gap-2">
      <button onclick="applyVoucher(6)" class="voucher-btn px-3 py-1 border rounded hover:bg-gray-50 ${
        localStorage.getItem("cartDiscount") === "6" ? "active-voucher" : ""
      }">Giảm 6%</button>
      <button onclick="applyVoucher(12)" class="voucher-btn px-3 py-1 border rounded hover:bg-gray-50 ${
        localStorage.getItem("cartDiscount") === "12" ? "active-voucher" : ""
      }">Giảm 12%</button>
      <button onclick="applyVoucherFixed(10000)" class="voucher-btn px-3 py-1 border rounded hover:bg-gray-50 ${
        localStorage.getItem("cartDiscountType") === "fixed-10000"
          ? "active-voucher"
          : ""
      }">Giảm 10K</button>
      <button onclick="applyVoucherFixed(22000)" class="voucher-btn px-3 py-1 border rounded hover:bg-gray-50 ${
        localStorage.getItem("cartDiscountType") === "fixed-22000"
          ? "active-voucher"
          : ""
      }">Giảm 22K</button>
      <button onclick="applyVoucherFixed(30000)" class="voucher-btn px-3 py-1 border rounded hover:bg-gray-50 ${
        localStorage.getItem("cartDiscountType") === "fixed-30000"
          ? "active-voucher"
          : ""
      }">Free Ship</button>
    </div>
  </div>
`;

    const discountType = localStorage.getItem("cartDiscountType");
    const appliedDiscount = localStorage.getItem("cartDiscount");
    let discountAmount = 0;

    if (discountType && discountType.startsWith("fixed-")) {
      // Xử lý cho voucher giảm giá cố định
      discountAmount = parseInt(discountType.split("-")[1]);
    } else {
      // Xử lý cho voucher giảm giá theo %
      discountAmount = (subtotal * (appliedDiscount || 0)) / 100;
    }

    const total = subtotal + shippingFee - discountAmount;

    totalContainer.classList.remove("hidden");
    totalContainer.innerHTML = `
      <div class="mt-4">
        ${voucherHTML}
        <div class="flex justify-between items-center mt-4">
          <span class="text-gray-600">Tạm tính:</span>
          <span class="font-medium">${subtotal.toLocaleString("vi-VN")} ₫</span>
        </div>
        <div class="flex justify-between items-center mt-2">
          <span class="text-gray-600">Phí vận chuyển:</span>
          <span class="font-medium">${shippingFee.toLocaleString(
            "vi-VN"
          )} ₫</span>
        </div>
        ${
          appliedDiscount > 0
            ? `
          <div class="flex justify-between items-center mt-2 text-green-600">
            <span>Giảm giá:</span>
            <span>-${discountAmount.toLocaleString("vi-VN")} ₫</span>
          </div>
        `
            : ""
        }
        <div class="flex justify-between items-center mt-4 mb-4">
          <span class="text-gray-600 font-medium">Tổng tiền:</span>
          <span class="text-red-600 font-bold text-xl">${total.toLocaleString(
            "vi-VN"
          )} ₫</span>
        </div>
        <button class="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
          Thanh toán ngay
        </button>
      </div>
    `;
  }
}

// Hàm áp dụng voucher
function applyVoucher(percentage) {
  localStorage.setItem("cartDiscount", percentage);
  localStorage.setItem("cartDiscountType", `percent-${percentage}`);
  updateCartUI();
}

// Hàm áp dụng voucher cố định giá
function applyVoucherFixed(amount) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const percentage = (amount / subtotal) * 100;
  localStorage.setItem("cartDiscount", percentage);
  localStorage.setItem("cartDiscountType", `fixed-${amount}`);
  updateCartUI();
}
// Hàm cập nhật số lượng
function updateQuantity(productId, size, change) {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const item = cart.find((item) => item.id === productId && item.size === size);

  if (item) {
    item.quantity += change;
    if (item.quantity < 1) {
      removeItem(productId, size);
      return;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
  updateCartCounter();
}

// Hàm xóa sản phẩm
function removeItem(productId, size) {
  let cart = JSON.parse(localStorage.getItem("cart"));
  cart = cart.filter((item) => !(item.id === productId && item.size === size));
  localStorage.setItem("cart", JSON.stringify(cart));

  if (cart.length === 0) {
    localStorage.removeItem("cartDiscount");
    localStorage.removeItem("cartDiscountType");
  }
  updateCartUI();
  updateCartCounter();
}

// Cập nhật sự kiện click thêm vào giỏ hàng
const addToCartBtn = document.getElementById("btn-add-to-cart");
if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    if (!selectedSize) {
      alert("Vui lòng chọn size");
      return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("product_id");
    const product = allData.find((item) => item.id === Number(productId));

    addToCart(product);
  });
}

// Khởi tạo UI giỏ hàng
document.addEventListener("DOMContentLoaded", function () {
  // Khởi tạo giỏ hàng trong localStorage nếu chưa có
  if (!localStorage.getItem("cart")) {
    localStorage.setItem("cart", JSON.stringify([]));
  }

  // Khởi tạo UI giỏ hàng
  updateCartUI();
  updateCartCounter();
});
