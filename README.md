# Universal Web App

Welcome to **Universal Web App**, a web application that seamlessly blends Single Page Application (SPA) and Multi-Page Application (MPA) paradigms. This project combines client-side interactivity with server-side routing and rendering, providing a versatile web experience.

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```sh
   git clone https://github.com/dannycahyo/universal-web-app.git
   ```

2. Navigate to the project directory:

   ```sh
   cd universal-web-app
   ```
   
3. Install the dependencies:

   ```sh
   npm install
   ```

## Usage

This project, **Universal Web App**, is designed for learning and experimentation with building web applications using vanilla JavaScript, both as a Single Page Application (SPA) and a Multi-Page Application (MPA). Below are the available scripts for development and production:

### Development Mode

To run the application in development mode, use the following command:

```sh
npm run dev
```

This script does two main things:

1. **Webpack Build (Client-side):** It uses Webpack to bundle your JavaScript and assets in development mode, creating the `index__bundle.js` file in the `dist` folder.

2. **Node.js Server (Server-side):** It starts the Node.js server using `node app.js`. The server serves your bundled application and provides server-side routing and rendering.

The development mode includes hot module replacement (HMR) for the client-side, allowing you to see changes in real-time without needing to manually refresh the page.

### Production Build

To create a production-ready build of your application, use the following command:

```sh
npm run build
```

This script performs two tasks:

1. **Webpack Build (Client-side):** It uses Webpack to bundle your JavaScript and assets in production mode, optimizing for performance. The optimized files are placed in the `dist` folder.

2. **Node.js Server (Server-side):** Similar to the development mode, it starts the Node.js server using `node app.js`. This server serves your production-ready application.

The production build is suitable for deploying your application to a hosting provider.

Keep in mind that the project uses various dependencies like EJS for templating, Express for server-side routing, and Webpack for bundling. Explore and modify the project as needed for your learning journey and web development experiments.

