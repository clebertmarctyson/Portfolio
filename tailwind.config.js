/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"]
      },
      keyframes: {
        profile: {
          "0%": {
            borderRadius: "40% 30% 70% 60% / 30% 70% 60% 40%;"
          },
          "25%": {
            borderRadius: "70% 60% 40% 30% / 40% 30% 70% 60%;"
          },
          "75%": {
            borderRadius: "60% 40% 30% 70% / 60% 40% 30% 70%;"
          },
          "100%": {
            borderRadius: "40% 30% 70% 60% / 30% 70% 60% 40%;"
          }
        }
      },
      animation: {
        profile: "profile 8s linear infinite"
      }
    }
  },
  plugins: []
};
