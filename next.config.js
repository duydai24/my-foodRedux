/** @type {import('next').NextConfig} */

let nextConfig = {
  reactStrictMode: false,
  styledComponents: true,
  // i18n: {
  //   // Đây là tất cả các ngôn ngữ bạn muốn hỗ trợ
  //   // ứng dụng của bạn
  //   locales: ["en", "vi"],
  //   // Đây là ngôn ngữ mặc định bạn muốn sử dụng khi truy cập
  //   // một đường dẫn có tiền tố không phải ngôn ngữ, ví dụ: `/ hello`
  //   defaultLocale: "en",
  //   // Đây là danh sách các miền bản địa và ngôn ngữ mặc định mà chúng
  //   // nên xử lý (những điều này chỉ bắt buộc khi thiết lập định tuyến miền)
  //   // Lưu ý: tên miền phụ phải được bao gồm trong giá trị tên miền được đối sánh, ví dụ: "fr.example.com".
  // },
};

module.exports = nextConfig;
