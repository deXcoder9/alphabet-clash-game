
## Live Link:

- https://dexcoder9.github.io/alphabet-clash-game


## <a name="overview"> Overview</a>

- This project is a real estate website designed to provide users with a seamless experience for browsing properties, updating profiles, and managing authentication.

### NPM Packages:

- AOS Package
- Animate.css
- Swiper slider

## <a name="features">🔍 Features</a>
- **Toast or Sweet Alert notifications** provide feedback on successful login/register actions or errors in password validation.

- **Estates are categorized and displayed** with relevant information such as images, titles, descriptions, prices, and available facilities.

- **Users can log** in using email and password or through social media platforms like Google, GitHub, Facebook, or Twitter.



## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/deXcoder9/alphabet-clash-game.git
cd alphabet-clash-game
```

**Installation**

Install "tailwindcss' via npm, and create your 'tailwind.config.js' file.

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Add the paths to all of your template files in your "tailwind.config.js" file.
```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```


**Running the Project**

- use (vs code extension) live server to open  

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.
