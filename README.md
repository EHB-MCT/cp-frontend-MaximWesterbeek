# Fairytales!
## A Front-End Course-Project

This project is a creative web development course-project focused on building an interactive, visually engaging one-page scrolling website based on a fairytale, created with React, TypeScript, SCSS, and Framer Motion.  
In addition to the fairytale site, a central portal was developed (also using React with TypeScript, and SCSS) to showcase all student projects. The portal includes:
- A homepage with random featured projects,
- A full project gallery,
- A “Making Of” section on each student's parallax page, explaining the development process and including additional images.

## Important Note: Shared JSON file
I managed the JSON file used by all students to ensure consistency and avoid errors in data retrieval. You can find this file in `public/api/fairytaleList.json`.  
While I did my best to ensure all information from the provided online Excel sheet was transferred accurately, there may still be some minor inconsistencies. Managing submissions from all students was a challenging task. Thank you for your understanding.

## Table of Contents
1. [Features](#features)
2. [Project Setup](#project-setup)
3. [Coding Conventions](#coding-conventions)
4. [License](#license)
5. [Attribution](#attribution)

---

## ✨ Features
- 🌐 Portal Homepage – Intro text, 8 random featured projects, button to view all projects
- 🧚‍♀️ One-Page Fairytale Website – Parallax scrolling, animations, themed storytelling
- 📖 Making Of Pages – Behind-the-scenes details and screenshots
- 🔀 Dynamic Routing – Built with React Router
- 🗂️ Central JSON Data – Shared across all student sites
- 🎨 Easter Egg – Hidden sound effect when clicking on something
- 💡 Creative Enhancements – Custom scroll logic, fallback images, and theme toggle

---

## Project Setup

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/EHB-MCT/cp-frontend-MaximWesterbeek
   cd cp-frontend-MaximWesterbeek
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```
   This will start a development server at `http://localhost:5173/` (or a similar port).

4. **Build for production:**
   ```bash
   npm run build
   ```
   This will create an optimized build of your project in the `dist/` folder.

5. **Deployment to GitHub Pages**  
   Install the GitHub Pages package:
   ```bash
   npm install gh-pages --save-dev
   ```
   Deploy to GitHub Pages:
   ```bash
   npm run build
   Copy-Item -Path dist/index.html -Destination dist/404.html
   npm run deploy
   ```

---

## Coding Conventions

### 1. **Formatting**
**Rules:**
- Follow the **Airbnb** style guide.
- Use **camelCase** for variables and functions.
- Use **PascalCase** for React component names.

### 2. **File and Component Naming**
- Components are stored in the `components/` or `pages/` folder and are named using **PascalCase** (e.g., `Header.jsx`).
- Hooks are stored in the `shared/hooks/` folder and are named using **camelCase** (e.g., `useFetch.js`).

---

## Attribution

### Documentations
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/start/data/routing)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [SCSS](https://sass-lang.com/documentation/)
- [Framer Motion](https://motion.dev/docs/react-quick-start)

### Guides
- [CSS Grid & the confusion of align & justify-items, align & justify content, and align & justify self](https://medium.com/@kristinethejohnson/css-grid-the-confusion-of-align-justify-items-align-justify-content-and-align-justify-e94ac687fdb)
- [CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/#building-for-relative-paths)
- [Deploying to Github Pages? Don't Forget to Fix Your Links](https://maximorlov.com/deploying-to-github-pages-dont-forget-to-fix-your-links/)

### Tutorials & external code
> This tutorial was used to embed a YouTube video in the React app. After embedding, I added a border radius to the video with the help of the 2nd reference.
> - [YouTube video embedding tutorial](https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2)
> - [Border radius on YouTube IFrame embed](https://stackoverflow.com/questions/7811719/adding-border-radius-for-embedded-youtube-video)

> This code was used to implement the theme toggle functionality. I used it to convert the code we worked on during the course into TypeScript, meaning it is a mix of the course code and the TypeScript code.
> - [Partial code for theme toggle, mixed with the theme toggle made during the course](https://github.com/chris-jantzen/react-typescript-theme-toggle/)

> This code was used to make the fallback image logic work.
> - [Fallback image logic](https://patrickpassarella.com/blog/image-fallback-component)

> This code was used to implement the 'about' scroll to functionality. Together with below referenced chatGPT I implemented it into my own project.
> - [Scroll to logic](https://bobbyhadz.com/blog/react-scroll-to-element-on-click)

> This blogpost helped me to implement newlines `\n` in the JSON and then later convert to html `<br>`tags
> - [Line breaks in JSON](https://iifx.dev/en/articles/122124)

### Code and logic created with chatGPT
- [Fairytale navigation with passed on id for Making-Of page, made with help of chatGPT](https://chatgpt.com/share/6834c7ed-fc68-8006-8703-33955e1e103d)
- [Scroll to logic implementation with chatGPT](https://chatgpt.com/share/68336add-5c20-8006-8041-4e0b3e775a58)

### Fairytale story and artwork
- [Story](https://www.andersenstories.com/nl/andersen_sprookjes/duimelijntje)
- [Artwork by Natalia Akimova](https://www.behance.net/gallery/18478021/Hans-Christian-Andersen-Thumbelina-)
- [Natalia Akimova on Behance](https://www.behance.net/taschaka)
- [Image upscale tool](https://imgupscaler.com/)
- [Extracted image elements for parallax implementation with Adobe Photoshop](https://www.adobe.com)

### Extra sources
- [Frog sound effect](https://pixabay.com/sound-effects/frog-85649/)
- []()