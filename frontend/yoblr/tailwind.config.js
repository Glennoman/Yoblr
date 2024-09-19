/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        // primary: "#f5f6f2",
        primary: "#f0f2f4",
        secondary: "#FE6C00",
        tertiary: "#111418",
        border: "#374151",
        secondaryYellow: "#FE9B00",
        secondaryGreen: "#2dcc6f",
        secondaryBlue: "#1376f4",
        secondaryWhite: "#eeeeee",
        gray: {
          10: "#EEEEEE",
          20: "#A2A2A2",
          30: "#7B7B7B",
          50: "#585858",
          90: "#141414",
        },
      },
      screens: {
        xs: { max: "740px" },
        md: { max: "1080px" },
        "3xl": { max: "1680px" },
        "4xl": { max: "2200px" },
      },
      transitionTimingFunction: {
        "custom-bezier": "cubic-bezier(0.29, -0.81, 0.42, 1.68)",
      },
      backgroundImage: {
        employer: "url('/src/assets/For_Employers.jpg')",
        employee: "url('/src/assets/For_Employees.jpg')",
        iphones: "url('/src/assets/iphones.png')",
        office: "url('/src/assets/Orange-bg.jpg')",
        grid: "url('/src/assets/marketing-grid.jpeg')",
        up: "url('/src/assets/thumbs_up.png')",
        down: "url('/src/assets/thumbs_down.png')",
      },
    },
  },
  plugins: [],
};
