<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>francilienne-de-miroiterie
</h1>
<h3>◦ Reflecting Craftsmanship, Collaborating Innovation</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style&logo=Prettier&logoColor=black" alt="Prettier" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Sass-CC6699.svg?style&logo=Sass&logoColor=white" alt="Sass" />
<img src="https://img.shields.io/badge/Jest-C21325.svg?style&logo=Jest&logoColor=white" alt="Jest" />

<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
<img src="https://img.shields.io/github/languages/top/P4ST4S/francilienne-de-miroiterie?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/P4ST4S/francilienne-de-miroiterie?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/P4ST4S/francilienne-de-miroiterie?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/P4ST4S/francilienne-de-miroiterie?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents

- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The francilienne-de-miroiterie codebase is for a React-based website that showcases the work and services of a glass and mirror installation company. It includes various pages, such as Accueil (Home), Fenêtres (Windows), Stores (Storefronts), Vérandas (Verandas), and Contact. The project offers a visually appealing and interactive design, smooth navigation, form submission with data validation, review and advertisement integration, and legal policy pages. Its value proposition lies in providing an online platform for potential customers to explore the company's expertise and easily contact them for inquiries or services.

---

## 📂 Project Structure

---

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                                                                                      | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [index.html](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/public\index.html)                                                            | This code is an HTML document that defines the structure and meta information of a website. It includes important metadata such as the viewport settings, description, and favicon. It also includes a reference to a JSON manifest file and sets the title of the webpage.                                                                                                                                                                                                       |
| [App.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\App.js)                                                                       | This code sets up the routing and navigation for a React application using react-router-dom. It defines routes for different pages and components, and renders them based on the current URL. The Layout component provides a consistent layout for all pages.                                                                                                                                                                                                                    |
| [index.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\index.js)                                                                   | The code imports the React and ReactDOM packages. It also imports the App component and a SCSS stylesheet. It then creates a React root by calling ReactDOM.createRoot() and renders the App component. The code is wrapped in React.StrictMode for best practices and error detection. The rendered content is displayed on the DOM element with the "root" id.                                                                                                                  |
| [ButtonToTop.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\components\ButtonToTop.js)                                            | This code implements a React button component that appears when the user has scrolled down a certain distance. Clicking on the button will smoothly scroll the user back to the top of the page. The useState hook is used to toggle the button's visibility based on the scroll position. The FaArrowCircleUp component from the react-icons library is used to display the button.                                                                                              |
| [ContactMentionsPopup.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\components\ContactMentionsPopup.js)                          | This code defines a React component called ContactMentionsPopup. It displays a popup with a text message, including information on data collection and privacy. Users can accept or decline the terms using buttons. The component is styled using SCSS and uses React Router for navigation.                                                                                                                                                                                     |
| [EldoReview.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\components\EldoReview.js)                                              | The code exports a functional component called EldoReview. It renders a div with a class name "eldo". Inside the div, there is an anchor tag with a link to an external website. Within the anchor tag, there is an iframe that displays a review widget from the Eldo website.                                                                                                                                                                                                   |
| [Footer.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\components\Footer.js)                                                      | The code is for a React component that renders a footer section. It includes contact information, social media links, and quick links to different pages. It also displays logos and has links for more information. The footer also includes legal and policy-related links.                                                                                                                                                                                                     |
| [Form.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\components\Form.js)                                                          | The code is a React component for a form that includes inputs for various fields such as name, email, telephone, and message. It utilizes the react-hook-form library for form validation and sends the form data using the emailjs-com library. The form also includes a Google reCAPTCHA component for spam prevention. Upon successful submission, a success message is displayed. There is also a button to open a popup that contains the terms and conditions for the form. |
| [Header.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\components\Header.js)                                                      | The code is a React component for a website header. It includes a responsive menu that can be toggled on and off, and uses React Router for navigation. The header also includes a logo and a contact button. The menu adapts to the screen size to ensure optimal display and user experience.                                                                                                                                                                                   |
| [HomeLink.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\components\HomeLink.js)                                                  | The code is a React component that renders a home link with four categories: "Miroiterie" (Mirrors), "Fenêtres Portes" (Windows Doors), "Stores Volets" (Storefront Shutters), and "Vérandas Pergolas" (Verandas Pergolas). Each category is represented by an icon and a link. When clicked, the link navigates to a specific route.                                                                                                                                             |
| [Layout.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\components\Layout.js)                                                      | The code is a React component called Layout that serves as a template for the overall structure and layout of a web page. It includes a header, a scroll-to-top button, a review section, a main content container, and a footer. The children prop allows for dynamic content to be inserted within the layout.                                                                                                                                                                  |
| [Pub.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\components\Pub.js)                                                            | The code defines a React component called "Pub" which displays a popup advertisement if a trigger prop is true. The popup contains a close button, an image, and is styled using CSS modules.                                                                                                                                                                                                                                                                                     |
| [ScrollToTop.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\components\ScrollToTop.js)                                            | The ScrollToTop component ensures that when the location changes in a React application using React Router, the page scrolls to the top. It achieves this by utilizing the useEffect hook to listen for location changes and then using the window.scrollTo function to scroll to the top of the page. The component then renders the child components passed in via props.                                                                                                       |
| [Video.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\components\Video.js)                                                        | This code defines a Video component in React. It utilizes the ReactPlayer library to render a video player with specified width, height, and source. It enables looping, auto-play, and mute functionality. Designed with CSS modules, it provides a structured and stylized video container.                                                                                                                                                                                     |
| [Accueil.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\Accueil.js)                                                         | The code is a React functional component called "Accueil" that represents the home page of a website. It includes numerous sections with fade animations and displays various content such as text, images, videos, and links. It also dynamically determines whether the page is being viewed on a mobile device or not. The component utilizes state and effect hooks to handle resizing events and update the UI accordingly.                                                  |
| [Avis.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\Avis.js)                                                               | The code is a React component called "Avis" that renders a div element with a link to a review page. The review page is embedded as an iframe from a specified source. The component utilizes styling from a Sass module. It exports the Avis component for use elsewhere.                                                                                                                                                                                                        |
| [CGV.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\CGV.js)                                                                 | Prompt exceeds max token limit: 5355.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| [Contact.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\Contact.js)                                                         | This code defines a React component for the Contact page. It includes a form, contact information, social media links, and a Google Maps embed. The code also utilizes various icons from different libraries.                                                                                                                                                                                                                                                                    |
| [Cookies.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\Cookies.js)                                                         | HTTPStatus Exception: 400                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Fenetres.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\Fenetres.js)                                                       | This code defines a React component called "Fenetres". It renders a slideshow of images and descriptions for various types of windows and doors. The component uses the Fade component from the "react-reveal" library for animation effects. The images are sourced from specific media files. Overall, it provides an interactive and visually dynamic presentation of different fenestration options.                                                                          |
| [LegalMentions.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\LegalMentions.js)                                             | HTTPStatus Exception: 400                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Miroiterie.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\Miroiterie.js)                                                   | This code consists of a React component called "Miroiterie". It renders a content section that showcases different images and descriptions related to mirror installation projects. The content is animated using the "Fade" component from "react-reveal". The component also utilizes CSS modules for styling.                                                                                                                                                                  |
| [NotFound.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\NotFound.js)                                                       | This code defines a functional component called NotFound that represents a 404 error page. It renders a styled div with a link to the homepage. When a user encounters a page not found, they can click the link to return to the home page.                                                                                                                                                                                                                                      |
| [PDP.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\PDP.js)                                                                 | HTTPStatus Exception: 400                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [Security.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\Security.js)                                                       | This code snippet implements a React component called Security. It renders a simple div element containing the text "Security".                                                                                                                                                                                                                                                                                                                                                   |
| [Stores.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\Stores.js)                                                           | This code defines a React functional component called "Stores". It renders a section containing various store-related content like titles, descriptions, and images. It also includes a video component for displaying a store-related video. The component uses the "react-reveal" library for fade-in animations. The CSS styles are defined in a separate SCSS file. The code exports the "Stores" component as the default export. Total characters: 343.                     |
| [Verandas.js](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\pages\Verandas.js)                                                       | The code is a React component that renders a page displaying various verandas and pergolas. It uses the Fade component from the react-reveal library for animation effects. The verandas and pergolas are displayed with their titles and corresponding images in a grid layout.                                                                                                                                                                                                  |
| [index.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\index.scss)                                                        | This code sets the styles for the root element and the body, ensuring a consistent layout and styling for the entire document. It also imports variable styles from another file to maintain a structured and modular codebase.                                                                                                                                                                                                                                                   |
| [\_variables.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles_variables.scss)                                              | The code defines font styles, colors, spacing, and breakpoints for media queries. It also includes mixins for different screen sizes.                                                                                                                                                                                                                                                                                                                                             |
| [ButtonToTop.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\components\ButtonToTop.module.scss)                   | This code defines the styling for a "Go Top" button. It sets the position, size, font size, color, and functionality of the button, allowing users to quickly scroll back to the top of the page.                                                                                                                                                                                                                                                                                 |
| [ContactMentionsPopup.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\components\ContactMentionsPopup.module.scss) | The code defines a popup component with a fixed position on the screen. It has a dark transparent background and displays content in the center. The content includes an input area with accept and decline buttons styled with gradients. The size of the popup is responsive to different screen sizes.                                                                                                                                                                         |
| [EldoReview.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\components\EldoReview.module.scss)                     | This code defines a CSS class ".eldo" which sets the dimensions and positioning of an element. It is initially hidden, but displayed on larger screens. When hovered over, it scales up and moves to the right, creating a hover effect. The code also includes a CSS transition for smooth animation.                                                                                                                                                                            |
| [Footer.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\components\Footer.module.scss)                             | This code defines the styles for a footer section. It includes settings for colors, backgrounds, padding, positioning, and various elements such as social links, headings, images, and buttons. The code also includes media breakpoints for responsive behavior.                                                                                                                                                                                                                |
| [Form.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\components\Form.module.scss)                                 | This code defines the styling for a form, including input fields, buttons, and error messages. It also includes CSS transitions for hover and active states on the buttons. The form can be disabled, and there are different styles for accepting and declining terms. Overall, the code focuses on responsiveness and visual hierarchy.                                                                                                                                         |
| [Header.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\components\Header.module.scss)                             | This code defines the styling for a header component. It includes a header banner, logo, navigation menu, and a toggle button for mobile view. The code uses SCSS variables and mixins for responsive design. The header has a fixed position on scroll and has smooth transitions.                                                                                                                                                                                               |
| [HomeLink.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\components\HomeLink.module.scss)                         | This code defines styles for a home link section. It creates a container with icons and links, adjusting the layout based on the screen size. The links have hover and active effects. Overall, it provides a responsive and visually appealing design for the home link section.                                                                                                                                                                                                 |
| [Layout.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\components\Layout.module.scss)                             | This code sets the container's overflow behaviour, minimum height and background color. It ensures that the container doesn't have horizontal scrolling, has a height equal to 100% viewport height minus some offset, and has a specified background color.                                                                                                                                                                                                                      |
| [Pub.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\components\Pub.module.scss)                                   | The code defines a popup component with a fixed position, background, and content layout. It includes a close button and a responsive design. The popup can display images.                                                                                                                                                                                                                                                                                                       |
| [Video.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\components\Video.module.scss)                               | This code defines the core styles for a video element. It includes a border, padding, and aligns the content within the element. It is written in SCSS and can be imported into other SCSS files.                                                                                                                                                                                                                                                                                 |
| [Accueil.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\Accueil.module.scss)                                | This SCSS code defines the styling for a homepage. It includes different sections with specific styles such as titles, banners, descriptions, and qualifications. It also adapts to different screen sizes using media queries.                                                                                                                                                                                                                                                   |
| [Avis.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\Avis.module.scss)                                      | The code imports a SCSS file and styles an iframe element nested inside an'a' element within an element with the class "avis". The styles set the iframe height to take up the full viewport height, width to 100%, and removes the border.                                                                                                                                                                                                                                       |
| [CGV.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\CGV.module.scss)                                        | This code defines the styles for a summary element within a class named "cgv". It includes styling for links, main sections, paragraphs, quotes, borders, and unordered lists. The aim is to provide a clean and organized appearance to web pages using these styles.                                                                                                                                                                                                            |
| [Contact.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\Contact.module.scss)                                | This code defines styling for a contact section and a maps section. It applies different styles and layouts based on the screen size using breakpoints. The contact section includes a title, social network links, and a form. The maps section adjusts its size and position based on the screen size.                                                                                                                                                                          |
| [Cookies.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\Cookies.module.scss)                                | This code defines various styles for a cookie component. It includes styling for the content, summary, links, border box, main list, headings, paragraphs, and quotes. The styles focus on font size, padding, color, and list formatting.                                                                                                                                                                                                                                        |
| [Fenetres.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\Fenetres.module.scss)                              | This code contains Sass styles for a component called "fenetres". It includes styles for the title, banner, and description sections of the component. The styles handle responsiveness based on different breakpoints. Overall, the code aims to create a visually appealing and responsive layout for the given component.                                                                                                                                                      |
| [LegalMentions.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\LegalMentions.module.scss)                    | This code defines styles for a specific element with the class "lm" and its child elements. It sets padding and styles for headings, links, paragraphs, lists, and summary elements. The styles are defined using SCSS syntax.                                                                                                                                                                                                                                                    |
| [Miroiterie.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\Miroiterie.module.scss)                          | This code is written in SASS and defines the styles for a specific section called "miroiterie." It includes various nested elements such as titles, banners, and descriptions, with different styles based on media breakpoints. It uses flexbox for alignment and applies specific padding, border, and image properties to achieve the desired design.                                                                                                                          |
| [NotFound.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\NotFound.module.scss)                              | This code defines styles for a CSS class called ".nf\_\_content". It sets the width to 100%, height to 100vh, and centers the content horizontally and vertically. It also styles the h1 tag with a gradient background that changes on hover and upon click. Lastly, it styles links with a specified color and removes the underline.                                                                                                                                           |
| [PDP.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\PDP.module.scss)                                        | This code defines the styling for a product display page (PDP). It includes various selectors like summary, h2, h3, h4, p, q, and span to style different elements such as headings, links, and paragraphs. The code also makes use of variables and extends the parent styles of the PDP component.                                                                                                                                                                              |
| [Stores.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\Stores.module.scss)                                  | This code defines the styles for a store component. It includes a title, banner image, and various sections with descriptions and images. The styles adjust responsively based on breakpoints.                                                                                                                                                                                                                                                                                    |
| [Verandas.module.scss](https://github.com/P4ST4S/francilienne-de-miroiterie/blob/main/src\styles\pages\Verandas.module.scss)                              | This code defines the styles for a section called "verandas". It includes styles for a title, banner, description, and content layout, with different styles based on the screen size. The code uses SCSS and media queries for responsive design.                                                                                                                                                                                                                                |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:

> - [Node JS](https://nodejs.org/en/)
> - [NPM (Node Package Manager)](https://www.npmjs.com/)

### 📦 Installation

1. Clone the francilienne-de-miroiterie repository:

```sh
git clone https://github.com/P4ST4S/francilienne-de-miroiterie
```

2. Change to the project directory:

```sh
cd francilienne-de-miroiterie
```

3. Install the dependencies:

```sh
npm install
```

### 🎮 Using francilienne-de-miroiterie

```sh
node app.js
```

### 🧪 Running Tests

```sh
npm test
```

---

## 🗺 Roadmap

No future plans at the moment.

---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:

1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).

```sh
git checkout -b new-feature-branch
```

4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.

```sh
git commit -m 'Implemented new feature.'
```

6. Push your changes to your forked repository on GitHub using the following command

```sh
git push origin new-feature-branch
```

7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
   The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for additional info.
