module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        "ping-small": "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      },
      keyframes: {
        ping: {
          "75%, 100%": { transform: "scale(1.5)", opacity: 0 },
        },
      },
      colors: {
        "primary-green": "#38D47F",
        "secondary-green": "#24b47e",
        "tertiary-green": "#8AD736",
        "primary-red": "#F92E2F",
        "secondary-red": "#e73737",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
