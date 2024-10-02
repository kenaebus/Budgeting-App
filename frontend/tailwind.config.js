/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'gold': '#CBB681',
      'dark-grey': '#191919',
      'grey': '#232D34',
      'grey-blue': '#232D34',
    },
    fontFamily: {

    }
  },
  plugins: [],
}


/**gold {
  color: #deb342;
  font-family: 'Black Chancery';
}

@font-face {
  font-family: 'Vollkorn', serif;
  src: url(Vollkorn/Vollkorn-Regular.ttf);
 
}
.vollkorn{
  font-family: 'Vollkorn';
  font-size: 45px;
  
}

@font-face {
  font-family: 'Raleway', sans-serif;
  src: url(Raleway/Raleway-Regular.ttf);
}

.raleway{
  font-family:'Raleway';
  font-size: 25px;
}

@font-face {
  font-family: 'Black Chancery',serif;
  src: url(BlackChancery/blackchancery.regular.ttf);
}
 */

