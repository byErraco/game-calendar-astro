/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundColor: {
        "regal-pc": "#00A1F1",
        // "regal-playstation5": "#FFFF",
      },
      //   colors: {
      //     pc: "#00A1F1",
      //   },-${pl.platform.slug}
      colors: {
        "regal-pc": "#FFFF",
        // "regal-playstation5": "#FFFF",
      },
    },
  },
  plugins: [],
};
