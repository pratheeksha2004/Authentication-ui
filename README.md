# React Authentication UI

This project provides a beautiful and interactive authentication UI (Sign-up and Login) built with React, Vite, and Tailwind CSS.  It features an animated 'galaxy' background using HTML5 Canvas to enhance the user experience.

## Features

*   **Clean and Modern Design:** Utilizes Tailwind CSS for a sleek and responsive user interface.
*   **Animated Background:**  A captivating galaxy effect created with HTML5 Canvas, adding a unique visual appeal.
*   **Login and Sign-up Forms:** Implements functional forms for user authentication.
*   **Form Transition:** Smooth transition between login and signup forms.
*   **Vite Powered:** Fast development experience with Vite.

## Technologies Used

*   **React:**  JavaScript library for building user interfaces.
*   **Vite:**  Build tool that provides a fast and optimized development experience.
*   **Tailwind CSS:**  A utility-first CSS framework for rapid UI development.

## Installation

1.  **Clone the repository:**

    ```bash
    git clone  https://github.com/pratheeksha2004/Authentication-ui
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd Authentication-ui
    ```

3.  **Install dependencies:**

    ```bash
    npm install  # or yarn install or pnpm install
    ```

## Usage

1.  **Start the development server:**

    ```bash
    npm run dev  # or yarn dev or pnpm dev
    ```

2.  **Open your browser and navigate to the address provided by Vite (usually `http://localhost:5173`).**

## Project Structure
.
├── src/
│ ├── components/
│ │ └── AuthForm.jsx # Reusable authentication form component.
│ ├── App.jsx # Main application component.
│ ├── index.css # Global styles (if any).
│ ├── main.jsx # Entry point of the React application.
│ └── pages/
│ └── IndexPage.jsx # Main page containing login/signup forms and canvas animation.
├── public/ # Static assets (if any).
├── .gitignore # Specifies intentionally untracked files that Git should ignore.
├── README.md # Project documentation.
├── package.json # Lists project dependencies and scripts.
├── vite.config.js # Vite configuration file.
└── ...

## Notes

*   This project provides the UI and client-side logic for authentication.  It does **not** include backend integration or actual authentication logic.
*   The canvas animation might be performance-intensive on older devices.
