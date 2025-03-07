/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        dark2d: "#2d2a4f",
        dark3c: "#3c3b70",
        gray80: "#808080",
        gray9: "#111827",
        red7: "#b91c1c",
      },
      container: {
        center: true, // Đảm bảo container được căn giữa
        padding: "2rem", // Thêm padding nếu cần
        screens: {
          DEFAULT: "100%", // Để container chiếm toàn bộ chiều rộng trên màn hình nhỏ
          lg: "1200px", // Đặt max-width cho màn hình lớn là 1200px
        },
      },
    },
  },
  plugins: [],
};
