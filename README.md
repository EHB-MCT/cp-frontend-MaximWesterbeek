# Fairytales!

This project is a creative web development assignment focused on building an interactive and visually engaging one-page scrolling website based on a fairytale. In addition to the main fairytale site, a central portal was developed to showcase all student projects. The portal includes a homepage with random featured projects, a full project gallery, and a “Making Of” section explaining the development process.

## Table of Contents
1. [Project Setup](#project-setup)
2. [Coding Conventions](#coding-conventions)
3. [License](#license)
4. [Attribution](#attribution)


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

---

## Coding Conventions

### 1. **Formatting**
**Rules:**
- Follow the **Airbnb** style guide.
- Use **camelCase** for variables and functions.
- Use **PascalCase** for React component names.

### 2. **File and Component Naming**
- Components are stored in the `components/` folder and are named using **PascalCase** (e.g., `Header.jsx`).
- Hooks are stored in the `hooks/` folder and are named using **camelCase** (e.g., `useFetch.js`).

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

---

## Attribution

### Documentations
- [React](https://reactjs.org/)
- [React Router](https://reactrouter.com/start/data/routing)
- [TypeScript](https://www.typescriptlang.org/docs/)
- [SCSS](https://sass-lang.com/documentation/)
- [Framer Motion](https://motion.dev/docs/react-quick-start)

### Guides
-[CSS Grid & the confusion of align & justify-items, align & justify content, and align & justify self](https://medium.com/@kristinethejohnson/css-grid-the-confusion-of-align-justify-items-align-justify-content-and-align-justify-e94ac687fdb)
-[CSS Flexbox Layout Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Tutorials & external code
- [YouTube video embedding tutorial](https://dev.to/bravemaster619/simplest-way-to-embed-a-youtube-video-in-your-react-app-3bk2)
- [Border radius on YouTube IFrame embed](https://stackoverflow.com/questions/7811719/adding-border-radius-for-embedded-youtube-video)
-[Partial code for theme toggle, mixed with the theme toggle made during the course](https://github.com/chris-jantzen/react-typescript-theme-toggle/)