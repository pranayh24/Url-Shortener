module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #1a1a1a, #333333)", // Dark gradient
        "custom-gradient-2": "linear-gradient(to left, #1a1a1a, #333333)", // Dark gradient
        "card-gradient": "linear-gradient(to right, #1a1a1a, #333333)", // Dark gradient
      },
      colors: {
        navbarColor: "#1a1a1a", // Dark color
        btnColor: "#ff6347", // Example button color
        linkColor: "#2a5bd7",
      },
      boxShadow: {
        custom: "0 0 15px rgba(0, 0, 0, 0.3)",
        right: "10px 0px 10px -5px rgba(0, 0, 0, 0.3)",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat"],
      },
    },
  },

  variants: {
    extend: {
      backgroundImage: ["responsive"],
    },
  },

  plugins: [],
};