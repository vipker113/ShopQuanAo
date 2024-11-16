const dataHeaderWoman = {
  hangMoiVe: [
    {
      link: "flash_sale.html?gender=nu",
      name: "Đang giảm giá",
    },
    {
      link: "flash_sale.html?gender=nu",
      name: "Nội địa trung",
    },
    {
      link: "flash_sale.html?gender=nu",
      name: "Black Friday",
    },
  ],
  boSuuTap: [
    {
      link: "collection.html",
      name: "Bãi biển",
    },
    {
      link: "collection.html",
      name: "Theo mùa",
    },
  ],
  danhMucSanPham: [
    {
      link: "flash_sale.html?gender=nu",
      name: "Áo thun, Áo phông",
    },
    {
      link: "flash_sale.html?gender=nu",
      name: "Quần, Váy, Đầm",
    },
    {
      link: "product.html?category=tui-xach",
      name: "Túi xách",
    },
    {
      link: "product.html?category=that-lung",
      name: "Thắt lưng",
    },
    {
      link: "product.html?category=giay-cao-got",
      name: "Giày cao gót",
    },
    {
      link: "product.html?category=phu-kien-nu",
      name: "Phụ kiện",
    },
  ],
};

const dataHeaderMan = {
  hangMoiVe: [
    {
      link: "flash_sale.html?gender=nam",
      name: "Đang giảm giá",
    },
    {
      link: "flash_sale.html?gender=nam",
      name: "Nội địa trung",
    },
    {
      link: "flash_sale.html?gender=nam",
      name: "Black Friday",
    },
  ],
  boSuuTap: [
    {
      link: "collection.html",
      name: "Bãi biển",
    },
    {
      link: "collection.html",
      name: "Thể thao",
    },
    {
      link: "collection.html",
      name: "Theo mùa",
    },
  ],
  danhMucSanPham: [
    {
      link: "product.html?category=ao-vest",
      name: "Vest, Áo sơ mi",
    },
    {
      link: "product.html?category=quan-nam",
      name: "Quần dài, quần jean",
    },
    {
      link: "product.html?category=giay-da",
      name: "Giày da",
    },
    {
      link: "product.html?category=that-lung-nam",
      name: "Thắt lưng",
    },
    {
      link: "product.html?category=vi-da",
      name: "Ví da",
    },
    {
      link: "product.html?category=ca-vat",
      name: "Cà vạt",
    },
    {
      link: "product.html?category=dong-ho",
      name: "Đồng hồ",
    },
  ],
};

function renderHeader() {
  var htmlHangMoiVe = "";
  var htmlBoSuuTap = "";
  var htmlDanhMucSanPham = "";
  var htmlHangMoiVe2 = "";
  var htmlBoSuuTap2 = "";
  var htmlDanhMucSanPham2 = "";

  document.getElementById("header").innerHTML = `
  <nav class="bg-gray-100 border-b bg-opacity-60 backdrop-blur-[8px]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div class="flex justify-between h-16">
        <div class="flex items-center gap-10"
          <!-- Logo -->
          <div class="flex items-center">
            <a href="index.html" class="text-red-600 flex gap-2 font-dancing items-center text-3xl font-bold">
              Aurora
              <div class="w-12 h-12 overflow-hidden">
                <img class="object-contain w-full h-full" src="./assets/images/logo.png" alt="Logo" />
              </div>
            </a>
          </div>
          
          <!-- Navigation Links -->
          <div class="hidden lg:ml-20 lg:flex lg:space-x-8">
            <!-- Nữ -->
            <div class="relative flex group h-16">
              <a href="#" class="border-transparent text-gray-900 hover:text-red-600 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                Nữ
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down ml-2 h-5 w-5">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </a>
              <!-- Dropdown Nữ -->
              <div class="absolute z-[9999] -left-20 top-12 bg-white m-auto overflow-hidden max-h-0 opacity-50 transform group-hover:max-h-[1000px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out shadow-lg">
                <div class="flex gap-6 p-4 w-[800px]">
                  <div class="w-[30%] flex flex-col gap-4">
                    <div>
                      <p class="text-lg-bold text-gray-900">Hàng mới về</p>
                      <div id="hangMoiVe-Woman"></div>
                    </div>
                    <div>
                      <p class="text-lg-bold text-gray-900">Bộ sưu tập</p>
                      <div id="boSuuTap-Woman"></div>
                    </div>
                  </div>
                  <div class="w-[30%] flex flex-col">
                    <p class="text-lg-bold text-gray-900">Danh mục sản phẩm</p>
                    <div id="danhMucSanPham-Woman"></div>
                  </div>
                  <div class="flex gap-4 items-center w-2/3">
                    <div class="w-[50%] overflow-hidden">
                      <img class="cursor-pointer transform w-full hover:scale-[1.2] transition duration-500 ease-in-out" src="./assets/images/woman/banner1.webp" alt="" />
                    </div>
                    <div class="w-[50%] overflow-hidden">
                      <img class="cursor-pointer transform w-full hover:scale-[1.2] transition duration-500 ease-in-out" src="./assets/images/woman/banner2.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Nam -->
            <div class="relative flex group h-16">
              <a href="#" class="border-transparent text-gray-900 hover:text-red-600 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
                Nam
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down ml-2 h-5 w-5">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </a>
              <!-- Dropdown Nam -->
              <div class="absolute z-[9999] -left-20 top-12 bg-white m-auto overflow-hidden max-h-0 opacity-50 transform group-hover:max-h-[1000px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 ease-in-out shadow-lg">
                <div class="flex gap-6 p-4 w-[800px]">
                  <div class="w-[30%] flex flex-col gap-4">
                    <div>
                      <p class="text-lg-bold text-gray-900">Hàng mới về</p>
                      <div id="hangMoiVe-Man"></div>
                    </div>
                    <div>
                      <p class="text-lg-bold text-gray-900">Bộ sưu tập</p>
                      <div id="boSuuTap-Man"></div>
                    </div>
                  </div>
                  <div class="w-[30%] flex flex-col">
                    <p class="text-lg-bold text-gray-900">Danh mục sản phẩm</p>
                    <div id="danhMucSanPham-Man"></div>
                  </div>
                  <div class="flex gap-4 items-center w-2/3">
                    <div class="w-[50%] overflow-hidden">
                      <img class="cursor-pointer transform w-full hover:scale-[1.2] transition duration-500 ease-in-out" src="./assets/images/man/banner1.webp" alt="" />
                    </div>
                    <div class="w-[50%] overflow-hidden">
                      <img class="cursor-pointer transform w-full hover:scale-[1.2] transition duration-500 ease-in-out" src="./assets/images/man/banner2.webp" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <a href="collection.html" class="border-transparent text-gray-900 hover:text-red-600 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
              Bộ sưu tập
            </a>

            <a href="aboutUs.html" class="border-transparent text-gray-900 hover:text-red-600 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
              Về chúng tôi
            </a>
            <a href="members.html" class="border-transparent text-gray-900 hover:text-red-600 inline-flex items-center px-1 pt-1 border-b-2 text-lg font-medium">
              Liên Hệ
            </a>
          </div>
        </div>

        <!-- Cart and User Icons -->
        <div class="flex items-center gap-6 text-gray-1000">
          <div onclick="toggleDrawer()" class="hover:text-white p-4 !rounded-[50%] hover:bg-primary-500 cursor-pointer transition-all duration-500 relative">
            <div id="cart-counter" class="absolute top-2 right-0 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</div>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-cart">
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
          </div>
          <div onclick="window.location.href='/src/login.html'" class="hover:text-white p-4 !rounded-[50%] hover:bg-primary-500 cursor-pointer transition-all duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user">
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <div class="-mr-2 flex items-center lg:hidden">
          <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
`;

  dataHeaderWoman.hangMoiVe.forEach((item) => {
    htmlHangMoiVe += `<a href="${item.link}" class="block px-4 py-2 link-hover text-sm text-gray-600 hover:bg-gray-100 hover:text-error-500">${item.name}</a>`;
  });

  dataHeaderWoman.boSuuTap.forEach((item) => {
    htmlBoSuuTap += `<a href="${item.link}" class="block px-4 py-2 link-hover text-sm text-gray-600 hover:bg-gray-100 hover:text-error-500">${item.name}</a>`;
  });

  dataHeaderWoman.danhMucSanPham.forEach((item) => {
    htmlDanhMucSanPham += `<a href="${item.link}" class="block px-4 py-2 link-hover text-sm text-gray-600 hover:bg-gray-100 hover:text-error-500">${item.name}</a>`;
  });

  dataHeaderMan.hangMoiVe.forEach((item) => {
    htmlHangMoiVe2 += `<a href="${item.link}" class="block px-4 py-2 link-hover text-sm text-gray-600 hover:bg-gray-100 hover:text-error-500">${item.name}</a>`;
  });

  dataHeaderMan.boSuuTap.forEach((item) => {
    htmlBoSuuTap2 += `<a href="${item.link}" class="block px-4 py-2 link-hover text-sm text-gray-600 hover:bg-gray-100 hover:text-error-500">${item.name}</a>`;
  });

  dataHeaderMan.danhMucSanPham.forEach((item) => {
    htmlDanhMucSanPham2 += `<a href="${item.link}" class="block px-4 py-2 link-hover text-sm text-gray-600 hover:bg-gray-100 hover:text-error-500">${item.name}</a>`;
  });

  document.getElementById("hangMoiVe-Woman").innerHTML = htmlHangMoiVe;
  document.getElementById("boSuuTap-Woman").innerHTML = htmlBoSuuTap;
  document.getElementById("danhMucSanPham-Woman").innerHTML =
    htmlDanhMucSanPham;
  document.getElementById("hangMoiVe-Man").innerHTML = htmlHangMoiVe2;
  document.getElementById("boSuuTap-Man").innerHTML = htmlBoSuuTap2;
  document.getElementById("danhMucSanPham-Man").innerHTML = htmlDanhMucSanPham2;
}

function renderSlider() {
  document.getElementById("slider").innerHTML = `<div id="default-carousel"
          class="relative w-full h-full overflow-hidden"
          data-carousel="slide"
        >
          <div class="h-full">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/images/slider/slider1.webp"
                class="w-full h-full object-cover"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/images/slider/slider2.webp"
                class="w-full h-full object-cover"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/images/slider/slider3.webp"
                class="w-full h-full object-cover"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/images/slider/slider4.webp"
                class="w-full h-full object-cover"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/images/slider/slider5.webp"
                class="w-full h-full object-cover"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="./assets/images/slider/slider6.webp"
                class="w-full h-full object-cover"
                alt="..."
              />
            </div>
          </div>
          <div
            class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse"
          >
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 6"
              data-carousel-slide-to="5"
            ></button>
          </div>
          <button
            type="button"
            class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/50 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span
              class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/50 group-focus:outline-none"
            >
              <svg
                class="w-4 h-4 text-white rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span class="sr-only">Next</span>
            </span>
          </button>
        </div>`;
}

renderHeader();
renderSlider();
