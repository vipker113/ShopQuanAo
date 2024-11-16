const scrollToTopButton = document.getElementById("scrollToTopButton");

function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function toggleScrollToTopButton() {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.remove("opacity-0", "invisible");
    scrollToTopButton.classList.add("opacity-100", "visible");
  } else {
    scrollToTopButton.classList.add("opacity-0", "invisible");
    scrollToTopButton.classList.remove("opacity-100", "visible");
  }
}

if (scrollToTopButton) {
  scrollToTopButton.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", toggleScrollToTopButton);
  toggleScrollToTopButton();
}

const allData = [
  {
    id: 1,
    name: "Áo khoác mùa hè",
    price: 100000,
    lastPrice: 200000,
    category: "sales",
    discount: "-50%",
    quantity: 10,
    img: "./assets/images/hotprice/1.webp",
    gender: "nam",
  },
  {
    id: 2,
    name: "Váy đen thời trang",
    price: 150000,
    lastPrice: 200000,
    category: "sales",
    discount: "-25%",
    quantity: 5,
    img: "./assets/images/hotprice/2.webp",
    gender: "nu",
  },
  {
    id: 3,
    name: "Váy đen mùa thu",
    price: 190000,
    lastPrice: 320000,
    category: "sales",
    discount: "-40%",
    quantity: 5,
    img: "./assets/images/hotprice/3.webp",
    gender: "nu",
  },
  {
    id: 4,
    name: "Đầm ngắn đen thoải mái",
    price: 169000,
    lastPrice: 180000,
    category: "sales",
    discount: "-6%",
    quantity: 5,
    img: "./assets/images/hotprice/4.webp",
    gender: "nu",
  },
  {
    id: 5,
    name: "Áo khoác cổ điển",
    price: 120000,
    lastPrice: 250000,
    category: "sales",
    discount: "-52%",
    quantity: 15,
    img: "./assets/images/hotprice/5.webp",
    gender: "nam",
  },
  {
    id: 6,
    name: "Quần âu nam phong cách",
    price: 200000,
    lastPrice: 350000,
    category: "sales",
    discount: "-43%",
    quantity: 8,
    img: "./assets/images/hotprice/6.webp",
    gender: "nam",
  },
  {
    id: 7,
    name: "Áo len nam",
    price: 80000,
    lastPrice: 150000,
    category: "sales",
    discount: "-47%",
    quantity: 12,
    img: "./assets/images/hotprice/7.webp",
    gender: "nam",
  },
  {
    id: 8,
    name: "Áo khoác nam nữ sành điệu",
    price: 300000,
    lastPrice: 450000,
    category: "sales",
    discount: "-33%",
    quantity: 7,
    img: "./assets/images/hotprice/8.webp",
    gender: "nam",
  },
  {
    id: 9,
    name: "Quần baggy nữ thời trang",
    price: 350000,
    lastPrice: 550000,
    category: "sales",
    discount: "-36%",
    quantity: 9,
    img: "./assets/images/hotprice/9.webp",
    gender: "nu",
  },
  {
    id: 10,
    name: "Váy ngắn nữ mùa hè",
    price: 180000,
    lastPrice: 250000,
    category: "sales",
    discount: "-28%",
    quantity: 10,
    img: "./assets/images/hotprice/10.webp",
    gender: "nu",
  },
  {
    id: 11,
    name: "Áo công sở nữ thanh lịch",
    price: 120000,
    lastPrice: 180000,
    category: "sales",
    discount: "-33%",
    quantity: 15,
    img: "./assets/images/hotprice/11.webp",
    gender: "nu",
  },
  {
    id: 12,
    name: "Đầm ngắn nữ dạo phố",
    price: 250000,
    lastPrice: 400000,
    category: "sales",
    discount: "-38%",
    quantity: 6,
    img: "./assets/images/hotprice/12.webp",
    gender: "nu",
  },
  {
    id: 13,
    name: "Áo blazer nữ công sở",
    price: 90000,
    lastPrice: 130000,
    category: "sales",
    discount: "-31%",
    quantity: 20,
    img: "./assets/images/hotprice/13.webp",
    gender: "nu",
  },
  {
    id: 14,
    name: "Đầm nâu mùa thu",
    price: 220000,
    lastPrice: 320000,
    category: "sales",
    discount: "-31%",
    quantity: 8,
    img: "./assets/images/hotprice/14.webp",
    gender: "nu",
  },
  {
    id: 15,
    name: "Áo sweater nam nữ",
    price: 240000,
    lastPrice: 350000,
    category: "sales",
    discount: "-31%",
    quantity: 10,
    img: "./assets/images/hotprice/15.webp",
    gender: "nu",
  },
  {
    id: 16,
    name: "Đồ ngủ nữ thoải mái",
    price: 130000,
    lastPrice: 200000,
    category: "sales",
    discount: "-35%",
    quantity: 18,
    img: "./assets/images/hotprice/16.webp",
    gender: "nu",
  },
  {
    id: 17,
    name: "Quần âu nam thanh lịch",
    price: 160000,
    lastPrice: 230000,
    category: "sales",
    discount: "-30%",
    quantity: 7,
    img: "./assets/images/hotprice/17.webp",
    gender: "nam",
  },
  {
    id: 18,
    name: "Áo công sở tay ngắn nữ",
    price: 180000,
    lastPrice: 250000,
    category: "sales",
    discount: "-28%",
    quantity: 9,
    img: "./assets/images/hotprice/18.webp",
    gender: "nu",
  },
  {
    id: 19,
    name: "Đồ ngủ nữ xanh mint",
    price: 250000,
    lastPrice: 400000,
    category: "sales",
    discount: "-38%",
    quantity: 8,
    img: "./assets/images/hotprice/19.webp",
    gender: "nu",
  },
  {
    id: 20,
    name: "Váy body nữ quyến rũ",
    price: 280000,
    lastPrice: 450000,
    category: "sales",
    discount: "-38%",
    quantity: 5,
    img: "./assets/images/hotprice/20.webp",
    gender: "nu",
  },
  {
    id: 21,
    name: "Set đồ nam công sở thanh lịch",
    price: 110000,
    lastPrice: 180000,
    category: "sales",
    discount: "-39%",
    quantity: 13,
    img: "./assets/images/hotprice/21.webp",
    gender: "nam",
  },
  {
    id: 22,
    name: "Set đồ nam trẻ trung, phong cách",
    price: 320000,
    lastPrice: 480000,
    category: "sales",
    discount: "-33%",
    quantity: 10,
    img: "./assets/images/hotprice/22.webp",
    gender: "nam",
  },
  {
    id: 23,
    name: "Quần dài nam thời trang xanh ngọc",
    price: 500000,
    lastPrice: 700000,
    category: "sales",
    discount: "-29%",
    quantity: 4,
    img: "./assets/images/hotprice/23.webp",
    gender: "nam",
  },
  {
    id: 24,
    name: "Đầm nữ dự tiệc họa tiết nhức cái đầu",
    price: 150000,
    lastPrice: 220000,
    category: "sales",
    discount: "-32%",
    quantity: 11,
    img: "./assets/images/hotprice/24.webp",
    gender: "nu",
  },
  {
    id: 25,
    name: "Áo len nữ, họa tiết sặc sỡ",
    price: 350000,
    lastPrice: 500000,
    category: "sales",
    discount: "-30%",
    quantity: 6,
    img: "./assets/images/hotprice/25.webp",
    gender: "nu",
  },
  {
    id: 26,
    name: "Váy dài len nữ thời trang",
    price: 200000,
    lastPrice: 350000,
    category: "sales",
    discount: "-43%",
    quantity: 7,
    img: "./assets/images/hotprice/26.webp",
    gender: "nu",
  },
  {
    id: 27,
    name: "Đầm đi biển nữ xinh xắn",
    price: 90000,
    lastPrice: 150000,
    category: "sales",
    discount: "-40%",
    quantity: 12,
    img: "./assets/images/hotprice/27.webp",
    gender: "nu",
  },
  {
    id: 28,
    name: "Áo hoodie thời trang",
    price: 180000,
    lastPrice: 260000,
    category: "sales",
    discount: "-31%",
    quantity: 10,
    img: "./assets/images/hotprice/28.webp",
    gender: "nu",
  },
  {
    id: 29,
    name: "Áo sweater nam phong cách",
    price: 260000,
    lastPrice: 400000,
    category: "sales",
    discount: "-35%",
    quantity: 5,
    img: "./assets/images/hotprice/29.webp",
    gender: "nam",
  },
  {
    id: 30,
    name: "Chân váy jean nữ dài",
    price: 120000,
    lastPrice: 180000,
    category: "sales",
    discount: "-33%",
    quantity: 14,
    img: "./assets/images/hotprice/30.webp",
    gender: "nu",
  },
  {
    id: 31,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/1.jpg",
  },
  {
    id: 32,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/2.jpg",
  },
  {
    id: 33,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/3.jpg",
  },
  {
    id: 34,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/4.jpg",
  },
  {
    id: 35,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/5.jpg",
  },
  {
    id: 36,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/6.jpg",
  },
  {
    id: 37,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/7.jpg",
  },
  {
    id: 38,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/8.jpg",
  },
  {
    id: 39,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/9.jpg",
  },
  {
    id: 40,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/10.jpg",
  },
  {
    id: 41,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/11.jpg",
  },
  {
    id: 42,
    name: "Túi xách nữ thời trang",
    price: 2050000,
    category: "tui-xach",
    img: "./assets/images/woman/tuixach/12.jpg",
  },
  {
    id: 43,
    name: "Thắt lưng nữ thời trang",
    price: 3020000,
    category: "that-lung",
    img: "./assets/images/woman/thatlung/1.jpg",
  },
  {
    id: 44,
    name: "Thắt lưng nữ thời trang",
    price: 3020000,
    category: "that-lung",
    img: "./assets/images/woman/thatlung/2.jpg",
  },
  {
    id: 45,
    name: "Thắt lưng nữ thời trang",
    price: 3020000,
    category: "that-lung",
    img: "./assets/images/woman/thatlung/3.jpg",
  },
  {
    id: 46,
    name: "Thắt lưng nữ thời trang",
    price: 3020000,
    category: "that-lung",
    img: "./assets/images/woman/thatlung/4.jpg",
  },
  {
    id: 47,
    name: "Giày cao gót nữ thời trang",
    price: 3020000,
    category: "giay-cao-got",
    img: "./assets/images/woman/giaycaogot/1.jpg",
  },
  {
    id: 48,
    name: "Giày cao gót nữ thời trang",
    price: 3020000,
    category: "giay-cao-got",
    img: "./assets/images/woman/giaycaogot/2.jpg",
  },
  {
    id: 49,
    name: "Giày cao gót nữ thời trang",
    price: 3020000,
    category: "giay-cao-got",
    img: "./assets/images/woman/giaycaogot/3.jpg",
  },
  {
    id: 50,
    name: "Giày cao gót nữ thời trang",
    price: 3020000,
    category: "giay-cao-got",
    img: "./assets/images/woman/giaycaogot/4.jpg",
  },
  {
    id: 51,
    name: "Giày cao gót nữ thời trang",
    price: 3020000,
    category: "giay-cao-got",
    img: "./assets/images/woman/giaycaogot/5.jpg",
  },
  {
    id: 52,
    name: "Giày cao gót nữ thời trang",
    price: 3020000,
    category: "giay-cao-got",
    img: "./assets/images/woman/giaycaogot/6.jpg",
  },
  {
    id: 53,
    name: "Giày cao gót nữ thời trang",
    price: 3020000,
    category: "giay-cao-got",
    img: "./assets/images/woman/giaycaogot/7.jpg",
  },
  {
    id: 54,
    name: "Giày cao gót nữ thời trang",
    price: 3020000,
    category: "giay-cao-got",
    img: "./assets/images/woman/giaycaogot/8.jpg",
  },
  {
    id: 55,
    name: "Giày cao gót nữ thời trang",
    price: 3020000,
    category: "giay-cao-got",
    img: "./assets/images/woman/giaycaogot/9.jpg",
  },
  {
    id: 56,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/1.jpg",
  },
  {
    id: 57,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/2.jpg",
  },
  {
    id: 58,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/3.jpg",
  },
  {
    id: 59,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/4.jpg",
  },
  {
    id: 60,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/5.jpg",
  },
  {
    id: 61,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/6.jpg",
  },
  {
    id: 62,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/7.jpg",
  },
  {
    id: 63,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/8.jpg",
  },
  {
    id: 64,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/9.jpg",
  },
  {
    id: 65,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/10.jpg",
  },
  {
    id: 66,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/11.jpg",
  },
  {
    id: 67,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/12.jpg",
  },
  {
    id: 68,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/13.jpg",
  },
  {
    id: 69,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/14.jpg",
  },
  {
    id: 70,
    name: "Vòng cổ nữ thời trang",
    price: 3020000,
    category: "phu-kien-nu",
    img: "./assets/images/woman/vongtayvongco/15.jpg",
  },
  {
    id: 71,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/1.webp",
  },
  {
    id: 72,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/2.webp",
  },
  {
    id: 73,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/3.webp",
  },
  {
    id: 74,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/4.webp",
  },
  {
    id: 75,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/5.jpg",
  },
  {
    id: 76,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/6.webp",
  },
  {
    id: 77,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/7.webp",
  },
  {
    id: 78,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/8.webp",
  },
  {
    id: 79,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/9.webp",
  },
  {
    id: 80,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/10.webp",
  },
  {
    id: 81,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/11.webp",
  },
  {
    id: 82,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/12.webp",
  },
  {
    id: 83,
    name: "Áo vest nam lịch lãm",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/vest/13.jpeg",
  },
  {
    id: 84,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/1.webp",
  },
  {
    id: 85,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/2.webp",
  },
  {
    id: 86,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/3.webp",
  },
  {
    id: 87,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/4.webp",
  },
  {
    id: 88,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/5.webp",
  },
  {
    id: 89,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/6.jpg",
  },
  {
    id: 90,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/7.webp",
  },
  {
    id: 91,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/8.webp",
  },
  {
    id: 92,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/9.webp",
  },
  {
    id: 93,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/10.webp",
  },
  {
    id: 94,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/11.webp",
  },
  {
    id: 95,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/12.webp",
  },
  {
    id: 96,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanau/13.webp",
  },
  {
    id: 97,
    name: "Quần âu nam thanh lịch",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanshort/1.jpg",
  },
  {
    id: 98,
    name: "Quần short nam năng động, mát mẻ",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanshort/2.webp",
  },
  {
    id: 99,
    name: "Quần short nam năng động, mát mẻ",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanshort/3.webp",
  },
  {
    id: 100,
    name: "Quần short nam năng động, mát mẻ",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanshort/4.jpg",
  },
  {
    id: 101,
    name: "Quần short nam năng động, mát mẻ",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanshort/5.webp",
  },
  {
    id: 102,
    name: "Quần short nam năng động, mát mẻ",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanshort/6.webp",
  },
  {
    id: 103,
    name: "Quần short nam năng động, mát mẻ",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanshort/7.webp",
  },
  {
    id: 104,
    name: "Quần short nam năng động, mát mẻ",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanshort/8.webp",
  },
  {
    id: 105,
    name: "Quần short nam năng động, mát mẻ",
    price: 3020000,
    category: "quan-nam",
    img: "./assets/images/man/quanshort/9.webp",
  },
  {
    id: 106,
    name: "Giày da nam thời trang",
    price: 3020000,
    category: "giay-da",
    img: "./assets/images/man/giayda/1.webp",
  },
  {
    id: 107,
    name: "Giày da nam thời trang",
    price: 3020000,
    category: "giay-da",
    img: "./assets/images/man/giayda/2.webp",
  },
  {
    id: 108,
    name: "Giày da nam thời trang",
    price: 3020000,
    category: "giay-da",
    img: "./assets/images/man/giayda/3.webp",
  },
  {
    id: 109,
    name: "Giày da nam thời trang",
    price: 3020000,
    category: "giay-da",
    img: "./assets/images/man/giayda/4.webp",
  },
  {
    id: 110,
    name: "Giày da nam thời trang",
    price: 3020000,
    category: "giay-da",
    img: "./assets/images/man/giayda/5.webp",
  },
  {
    id: 111,
    name: "Giày da nam thời trang",
    price: 3020000,
    category: "giay-da",
    img: "./assets/images/man/giayda/6.webp",
  },
  {
    id: 112,
    name: "Giày da nam thời trang",
    price: 3020000,
    category: "giay-da",
    img: "./assets/images/man/giayda/7.webp",
  },
  {
    id: 113,
    name: "Giày da nam thời trang",
    price: 3020000,
    category: "giay-da",
    img: "./assets/images/man/giayda/8.webp",
  },
  {
    id: 114,
    name: "Giày da nam thời trang",
    price: 3020000,
    category: "giay-da",
    img: "./assets/images/man/giayda/9.jpg",
  },
  {
    id: 115,
    name: "Giày da nam thời trang",
    price: 3020000,
    category: "giay-da",
    img: "./assets/images/man/giayda/10.jpeg",
  },
  {
    id: 116,
    name: "Giày da nam thời trang",
    price: 3020000,
    category: "giay-da",
    img: "./assets/images/man/giayda/11.jpg",
  },
  {
    id: 117,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/1.webp",
  },
  {
    id: 118,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/2.webp",
  },
  {
    id: 119,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/3.webp",
  },
  {
    id: 120,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/4.webp",
  },
  {
    id: 121,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/5.webp",
  },
  {
    id: 122,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/6.webp",
  },
  {
    id: 123,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/7.webp",
  },
  {
    id: 124,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/8.webp",
  },
  {
    id: 125,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/9.jpg",
  },
  {
    id: 126,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/10.png",
  },
  {
    id: 127,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/11.webp",
  },
  {
    id: 128,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/12.webp",
  },
  {
    id: 129,
    name: "Thắt lưng nam thanh lịch",
    price: 3020000,
    category: "that-lung-nam",
    img: "./assets/images/man/thatlung/13.webp",
  },
  {
    id: 130,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/1.jpeg",
  },
  {
    id: 131,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/1.webp",
  },
  {
    id: 132,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/2.webp",
  },
  {
    id: 133,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/3.webp",
  },
  {
    id: 134,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/4.webp",
  },
  {
    id: 135,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/5.webp",
  },
  {
    id: 136,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/6.webp",
  },
  {
    id: 137,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/7.webp",
  },
  {
    id: 138,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/8.webp",
  },
  {
    id: 139,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/9.webp",
  },
  {
    id: 140,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/10.webp",
  },
  {
    id: 141,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/10.webp",
  },
  {
    id: 142,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/10.webp",
  },
  {
    id: 143,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/10.webp",
  },
  {
    id: 144,
    name: "Ví da nam thời trang",
    price: 3020000,
    category: "vi-da",
    img: "./assets/images/man/vida/10.webp",
  },
  {
    id: 145,
    name: "Ca-vat nam thời trang",
    price: 3020000,
    category: "ca-vat",
    img: "./assets/images/man/cavart/1.jpg",
  },
  {
    id: 146,
    name: "Ca-vat nam thời trang",
    price: 3020000,
    category: "ca-vat",
    img: "./assets/images/man/cavart/2.jpg",
  },
  {
    id: 147,
    name: "Ca-vat nam thời trang",
    price: 3020000,
    category: "ca-vat",
    img: "./assets/images/man/cavart/3.webp",
  },
  {
    id: 148,
    name: "Ca-vat nam thời trang",
    price: 3020000,
    category: "ca-vat",
    img: "./assets/images/man/cavart/4.webp",
  },
  {
    id: 149,
    name: "Ca-vat nam thời trang",
    price: 3020000,
    category: "ca-vat",
    img: "./assets/images/man/cavart/5.webp",
  },
  {
    id: 150,
    name: "Ca-vat nam thời trang",
    price: 3020000,
    category: "ca-vat",
    img: "./assets/images/man/cavart/6.webp",
  },
  {
    id: 151,
    name: "Ca-vat nam thời trang",
    price: 3020000,
    category: "ca-vat",
    img: "./assets/images/man/cavart/7.webp",
  },
  {
    id: 152,
    name: "Ca-vat nam thời trang",
    price: 3020000,
    category: "ca-vat",
    img: "./assets/images/man/cavart/8.webp",
  },
  {
    id: 153,
    name: "Ca-vat nam thời trang",
    price: 3020000,
    category: "ca-vat",
    img: "./assets/images/man/cavart/9.webp",
  },
  {
    id: 154,
    name: "Ca-vat nam thời trang",
    price: 3020000,
    category: "ca-vat",
    img: "./assets/images/man/cavart/10.jpg",
  },
  {
    id: 155,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/1.webp",
  },
  {
    id: 156,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/2.webp",
  },
  {
    id: 157,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/3.webp",
  },
  {
    id: 158,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/4.webp",
  },
  {
    id: 159,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/5.webp",
  },
  {
    id: 160,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/6.webp",
  },
  {
    id: 161,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/7.webp",
  },
  {
    id: 162,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/8.webp",
  },
  {
    id: 163,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/9.webp",
  },
  {
    id: 164,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/10.webp",
  },
  {
    id: 165,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/11.webp",
  },
  {
    id: 166,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/12.webp",
  },
  {
    id: 167,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/13.webp",
  },
  {
    id: 168,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/14.webp",
  },
  {
    id: 169,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/15.webp",
  },
  {
    id: 170,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/16.webp",
  },
  {
    id: 171,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/17.webp",
  },
  {
    id: 172,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/18.webp",
  },
  {
    id: 173,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/19.webp",
  },
  {
    id: 174,
    name: "Áo polo nam thời trang",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aopolo/20.webp",
  },
  {
    id: 175,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/1.webp",
  },
  {
    id: 176,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/2.webp",
  },
  {
    id: 177,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/3.webp",
  },
  {
    id: 178,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/4.webp",
  },
  {
    id: 179,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/5.webp",
  },
  {
    id: 180,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/6.webp",
  },
  {
    id: 181,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/7.webp",
  },
  {
    id: 182,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/8.webp",
  },
  {
    id: 183,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/9.webp",
  },
  {
    id: 184,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/10.webp",
  },
  {
    id: 185,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/11.webp",
  },
  {
    id: 186,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/12.webp",
  },
  {
    id: 187,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/13.webp",
  },
  {
    id: 188,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/14.webp",
  },
  {
    id: 189,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/15.webp",
  },
  {
    id: 190,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/16.webp",
  },
  {
    id: 191,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/16.webp",
  },
  {
    id: 192,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/16.webp",
  },
  {
    id: 193,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/16.webp",
  },
  {
    id: 194,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/16.webp",
  },
  {
    id: 195,
    name: "Áo sơ mi nam",
    price: 3020000,
    category: "ao-vest",
    img: "./assets/images/man/aosomi/16.webp",
  },
];

function filterProductsBySearch(products, searchTerm) {
  if (!searchTerm) return products;
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}

const dataHotPrice = allData.filter((item) => item.category === "sales");

let listProductGender = dataHotPrice;

const gender = getUrlParameter("gender");

if (gender) {
  listProductGender = dataHotPrice.filter((item) => item.gender === gender);
}

var itemsPerPage = 8;
var currentPage = 1;

// Tính số trang
var totalPages = Math.ceil(listProductGender.length / itemsPerPage);

showProducts(1);

function showProducts(page) {
  const productList = document.getElementById("product-list-sale");
  if (!productList) {
    console.log("Product list element not found");
    return;
  }

  const searchTerm = document.querySelector('input[type="text"]').value;
  const searchFilteredProducts = filterProductsBySearch(
    listProductGender,
    searchTerm
  );

  const priceFilteredProducts = filterByPrice(searchFilteredProducts);

  currentPage = page;
  var startIndex = (page - 1) * itemsPerPage;
  var endIndex = Math.min(
    startIndex + itemsPerPage,
    priceFilteredProducts.length
  );
  var html = "";

  if (priceFilteredProducts.length === 0) {
    document.getElementById("product-list-sale").innerHTML = `
            <div class="col-span-full text-center py-8">
                <p class="text-gray-600 text-lg">
                    Không có kết quả nào cho "${searchTerm}"
                </p>
            </div>
        `;
    document.getElementById("pagination").innerHTML = "";
    return;
  }

  for (var i = startIndex; i < endIndex; i++) {
    const product = priceFilteredProducts[i];
    html += `<div class="bg-white w-full cursor-pointer p-6 shadow-lg rounded-[24px] group" onclick="redirectToDetail('${
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
              <p class="line-through text-sm-regular">${
                product.lastPrice
              } &#8363;</p>
              <span class="text-sm-bold text-error-600">${
                product.discount
              }</span>
            </div>
            <button class="btn-product rounded-full mt-4 mx-auto" onclick="redirectToDetail('${
              product.id
            }')">
                <span>Buy Detail</span>
            </button>
          </div>`;
  }
  document.getElementById("product-list-sale").innerHTML = html;
  createPagination();
  // getProductDetail();
}

function redirectToDetail(productId) {
  window.location.href = `product_detail.html?product_id=${productId}`;
}

function createPagination() {
  var html = "";
  for (var i = 1; i <= totalPages; i++) {
    html += `<li class="px-4 py-2 rounded-full border border-gray-600 cursor-pointer hover:bg-primary-600 hover:text-white hover:border-white ${
      i === currentPage && "bg-primary-600 text-white border-primary-600"
    }" onclick="showProducts(${i})">${i}</li>`;
  }
  const pagination1 = document.getElementById("pagination");
  if (pagination1) {
    pagination1.innerHTML = html;
  }
  const pagination2 = document.getElementById("pagination2");
  if (pagination2) {
    pagination2.innerHTML = html;
  }
}

function toggleDrawer() {
  const drawer = document.querySelector(".drawer");
  const overlay = document.querySelector(".overlay");
  drawer.classList.toggle("open");
  overlay.classList.toggle("show");
}

document.querySelector(".overlay").addEventListener("click", () => {
  const drawer = document.querySelector(".drawer");
  const overlay = document.querySelector(".overlay");
  drawer.classList.remove("open");
  overlay.classList.remove("show");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const drawer = document.querySelector(".drawer");
    const overlay = document.querySelector(".overlay");
    drawer.classList.remove("open");
    overlay.classList.remove("show");
  }
});

function updateCartCounter() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  const counter = document.getElementById("cart-counter");
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  counter.textContent = totalItems;
  counter.style.display = totalItems > 0 ? "flex" : "none";
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('input[type="text"]');

  searchInput.addEventListener("input", () => {
    showProducts(1);
  });

  showProducts(1);
});

function filterByPrice(products) {
  const priceFilter = document.getElementById("priceFilter").value;
  if (priceFilter === "all") return products;

  const [min, max] = priceFilter.split("-").map(Number);

  return products.filter((product) => {
    const price = product.price;
    if (!max) return price >= min; // For "Above X" option
    return price >= min && price <= max;
  });
}

document.getElementById("filterButton").addEventListener("click", () => {
  if (document.getElementById("product-list")) {
    displayProducts(1);
  }
  if (document.getElementById("product-list-sale")) {
    showProducts(1);
  }
});
