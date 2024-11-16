const footer = document.getElementById("footer");

footer.innerHTML = `
    <div class="w-full bg-white py-20">
        <div class="flex flex-col gap-8 max-w-[80%] mx-auto text-center">
          <div class="flex flex-col gap-4">
            <p class="text-3xl font-bold text-gray-1000">
              Đăng ký nhận bản tin
            </p>
            <p class="text-gray-700 text-xl-regular">
              Cùng chúng tôi cập nhật những thông tin mới nhất về thời trang và
              phong cách sống.
            </p>
          </div>
          <div class="flex justify-center">
            <input
              type="text"
              class="w-[40%]"
              placeholder="Nhập đăng kí email của bạn"
            />
            <button class="bg-blue-500 text-white px-8 py-2">Đăng ký</button>
          </div>
          <div class="flex justify-center gap-4">
             <div class="flex items-center justify-center p-4 bg-white shadow-lg group cursor-pointer">
              <span class="icon-[logos--facebook] w-6 h-6 group-hover:scale-125 transition-transform duration-300"></span>
            </div>
            <div class="flex items-center justify-center p-4 bg-white shadow-lg group cursor-pointer">
              <span class="skill-icons--instagram w-6 h-6 group-hover:scale-125 transition-transform duration-300"></span>
            </div>
            <div class="flex items-center justify-center p-4 bg-white shadow-lg group cursor-pointer">
              <span class="icon-[logos--youtube-icon] w-6 h-6 group-hover:scale-125 transition-transform duration-300"></span>
            </div>
            <div class="flex items-center justify-center p-4 bg-white shadow-lg group cursor-pointer">
              <span class="icon-[logos--tiktok-icon] w-6 h-6 group-hover:scale-125 transition-transform duration-300"></span>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex lg:justify-between lg:flex-row flex-col lg:gap-20 gap-8 py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div class="w-full text-md-regular flex flex-col gap-4">
          <p class="text-md-bold mb-2">CÔNG TY CỔ PHẦN AURORA</p>
          <p>Địa chỉ liên hệ: Số 12, Nguyễn Văn Bảo, Gò Vấp, TP.HCM</p>
          <p>Điện thoại: +84 123 456 789</p>
          <p>Fax: +8424 - 6277.6419</p>
          <p>Email: info.aurora@gmail.com</p>
          <div class="flex justify-start gap-4">
            <div class="flex items-center justify-center p-4 bg-white shadow-lg group cursor-pointer">
              <span class="icon-[logos--facebook] w-6 h-6 group-hover:scale-125 transition-transform duration-300"></span>
            </div>
            <div class="flex items-center justify-center p-4 bg-white shadow-lg group cursor-pointer">
              <span class="skill-icons--instagram w-6 h-6 group-hover:scale-125 transition-transform duration-300"></span>
            </div>
            <div class="flex items-center justify-center p-4 bg-white shadow-lg group cursor-pointer">
              <span class="icon-[logos--youtube-icon] w-6 h-6 group-hover:scale-125 transition-transform duration-300"></span>
            </div>
            <div class="flex items-center justify-center p-4 bg-white shadow-lg group cursor-pointer">
              <span class="icon-[logos--tiktok-icon] w-6 h-6 group-hover:scale-125 transition-transform duration-300"></span>
            </div>
          </div>
        </div>
        <div class="link-footer w-full text-md-regular flex flex-col gap-4">
          <p class="text-md-bold mb-2">THƯƠNG HIỆU</p>
          <p><a href="aboutUs.html">Giới thiệu</a></p>
          <p>Tin tức</p>
          <p>Tuyển dụng</p>
          <p>Với cộng đồng</p>
          <p>Hệ thống cửa hàng</p>
          <p><a href="members.html">Liên hệ</a></p>
        </div>
        <div class="w-full text-md-regular flex flex-col gap-4">
          <p class="text-md-bold mb-2">HỖ TRỢ</p>
          <p>Hỏi đáp</p>
          <p>Điều kiện - Điều khoản Chính sách</p>
          <p>Gợi ý tìm size</p>
          <p>Hệ thống cửa hàng</p>
        </div>
        <div class="w-full text-md-regular flex flex-col gap-4">
          <p class="text-md-bold mb-2">THANH TOÁN</p>
          <div class="flex gap-2 mb-6">
            <div class="w-full">
              <img
                class="w-full h-full object-cover"
                src="../src/assets/images/footer/visa.png"
                alt="Visa"
              />
            </div>
            <div class="w-full">
              <img
                class="w-full h-full object-cover"
                src="../src/assets/images/footer/momo.png"
                alt="momo"
              />
            </div>
            <div class="w-full">
              <img
                class="w-full h-full object-cover"
                src="../src/assets/images/footer/zaloPay.png"
                alt="zaloPay"
              />
            </div>
          </div>
          <p class="text-md-bold">TẢI ỨNG DỤNG</p>
          <div class="flex lg:flex-row flex-col justify-between items-center">
            <div class="w-[30%]">
              <img
                class="w-full"
                src="../src/assets/images/footer/bancode.png"
                alt="QR code"
              />
            </div>
            <div class="w-[70%] flex flex-col gap-2 p-2">
              <img
                class="w-full h-full object-cover"
                src="../src/assets/images/footer/appstore.png"
                alt="Appstore"
              />
              <img
                class="w-full h-full object-cover"
                src="../src/assets/images/footer/googleplay.png"
                alt="Google Play"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="text-center bg-white py-4">
        <p>&copy; 2024 Bản quyền thuộc về công ty Aurora.</p>
      </div>
`;
