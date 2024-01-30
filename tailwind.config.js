/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "blue-light": "#8FB2F5",
        "ngray-900": "#13131A",
        "ngray-800": "#16161F",
        "ngray-700": "#1C1C27",
        "ngray-600": "#22222F",
        "ngray-500": "#3B3B54",
        "ngray-400": "#7F7F98",
        "ngray-300": "#ABABC4",
        "ngray-200": "#BFBFD4",
        "ngray-100": "#FAFAFA",
      },
      textColor: {
        "blue-light": "#8FB2F5",
        "ngray-900": "#13131A",
        "ngray-800": "#16161F",
        "ngray-700": "#1C1C27",
        "ngray-600": "#22222F",
        "ngray-500": "#3B3B54",
        "ngray-400": "#7F7F98",
        "ngray-300": "#ABABC4",
        "ngray-200": "#BFBFD4",
        "ngray-100": "#FAFAFA",
      }
    },
  },
  plugins: [],
}

