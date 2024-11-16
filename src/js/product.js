function filterProducts() {
  const category = getUrlParameter("category");
  if (!category) return allData;

  return allData.filter((product) => product.category === category);
}

function displayProducts(page = 1, itemsPerPage = 8) {
  const categoryFilteredProducts = filterProducts();
  const searchTerm = document.querySelector('input[type="text"]').value;
  const filteredProducts = filterProductsBySearch(
    categoryFilteredProducts,
    searchTerm
  );

  const priceFilteredProducts = filterByPrice(filteredProducts);

  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProducts = priceFilteredProducts.slice(startIndex, endIndex);

  const productList = document.getElementById("product-list");
  const productTitle = document.getElementById("product-title");

  const category = getUrlParameter("category");
  let categoryTitle = "";
  if (category) {
    switch (category) {
      case "tui-xach":
        categoryTitle = "Túi xách";
        break;
      case "giay-cao-got":
        categoryTitle = "Giày cao gót";
        break;
      case "that-lung":
        categoryTitle = "Thắt lưng";
        break;
      case "phu-kien-nu":
        categoryTitle = "Phụ kiện nữ";
        break;
      case "ao-vest":
        categoryTitle = "Áo vest nam";
        break;
      case "quan-nam":
        categoryTitle = "Quần âu, quần short nam";
        break;
      case "giay-da":
        categoryTitle = "Giày da nam";
        break;
      case "that-lung-nam":
        categoryTitle = "Thắt lưng nam";
        break;
      case "vi-da":
        categoryTitle = "Ví da";
        break;
      case "ca-vat":
        categoryTitle = "Cà vạt";
        break;
      case "dong-ho":
        categoryTitle = "Đồng hồ đeo tay";
        break;
      default:
        "Tất cả sản phẩm";
    }
  }

  productTitle.textContent = categoryTitle;
  productList.innerHTML = "";

  if (priceFilteredProducts.length === 0) {
    productList.innerHTML = `
            <div class="col-span-full text-center py-8">
                <p class="text-gray-600 text-lg">
                    Không có kết quả nào cho "${searchTerm}"
                </p>
            </div>
        `;
    document.getElementById("pagination").innerHTML = "";
    return;
  }

  paginatedProducts.forEach((product) => {
    const productCard = `
            <div class="bg-white w-full cursor-pointer p-6 shadow-lg rounded-[24px] group" onclick="redirectToDetail('${
              product.id
            }')">
                <div class="overflow-hidden bg-gray-300 rounded-[16px] w-full lg:h-[348px]">
                    <img
                        class="w-full h-full object-cover cursor-pointer transform hover:scale-[1.1] transition duration-300 ease-in-out"
                        src="${product.img}"
                    />
                </div>
                <p class="text-lg text-gray-800 group-hover:text-error-500 my-2">
                    ${product.name}
                </p>
                
                <div class="flex items-center gap-2">
                    <p class="text-gray-950 text-sm-bold">${product.price.toLocaleString(
                      "vi-VN"
                    )} &#8363;</p>
                    ${
                      product.lastPrice
                        ? `
                        <p class="line-through text-sm-regular">${product.lastPrice.toLocaleString(
                          "vi-VN"
                        )} &#8363;</p>
                        <span class="text-sm-bold text-error-600">${
                          product.discount
                        }</span>
                    `
                        : ""
                    }
                </div>
                <button class="btn-product rounded-full mt-4 mx-auto" onclick="redirectToDetail('${
                  product.id
                }')">
                    <span>Buy Detail</span>
                </button>
            </div>
        `;
    productList.innerHTML += productCard;
  });

  updatePagination(filteredProducts.length, page, itemsPerPage);
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('input[type="text"]');

  searchInput.addEventListener("input", () => {
    displayProducts(1);
  });

  displayProducts(1);
});

function updatePagination(totalItems, currentPage, itemsPerPage) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const pagination = document.getElementById("pagination");

  let html = "";
  for (let i = 1; i <= totalPages; i++) {
    html += `
            <li class="px-4 py-2 rounded-full border border-gray-600 cursor-pointer hover:bg-primary-600 hover:text-white hover:border-white ${
              i === currentPage
                ? "bg-primary-600 text-white border-primary-600"
                : ""
            }" onclick="displayProducts(${i})">${i}</li>
        `;
  }

  if (pagination) {
    pagination.innerHTML = html;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  displayProducts(1);
});
