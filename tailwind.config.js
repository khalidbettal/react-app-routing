
import tailwindcssForms from '@tailwindcss/forms';
import withMT from "@material-tailwind/react/utils/withMT";
 

// Define the new size
const sizes = {
  xs: '300px', // You can adjust this value according to your needs
};

/** @type {import('tailwindcss').Config} */
 
// eslint-disable-next-line no-undef
module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        ...sizes, // Adding the new size to the spacing section
      },
    },
  },
  plugins: [
    tailwindcssForms ,
  ],
});
