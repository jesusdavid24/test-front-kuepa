# Test-Chat-Kuepa

## Overview

The frontend of our instant messaging application is built with React.js, leveraging the power of Redux Toolkit for state management. It provides a user-friendly interface for interacting with the chat functionalities, ensuring a seamless and intuitive experience for the users.

## Technologies Utilized:

React.js: Serving as the foundation of the frontend, React.js enables the creation of dynamic and interactive user interfaces through its component-based architecture.

Redux Toolkit: Empowering state management, Redux Toolkit simplifies complex state logic and facilitates predictable state updates, enhancing the scalability and maintainability of the frontend codebase.

## Key Features:

User Authentication: The frontend includes login and registration forms, allowing users to securely authenticate and access the chat functionalities upon successful login.

Real-time Messaging: Leveraging WebSocket technology, the frontend enables real-time bidirectional communication between users, ensuring instant message delivery and synchronization across devices.

Responsive Design: The frontend is designed with responsiveness in mind, ensuring optimal user experience across various devices and screen sizes, including desktops, tablets, and mobile phones.

## Prerequisites

- [Git](https://git-scm.com/downloads)
- [Node.js and npm](https://nodejs.org) Node >= 18.15 LTS, npm >= 9.5.x - Install with Volta.sh

## Starting 🚀

1. Clone the repository:

```shell
git clone https://github.com/jesusdavid24/test-front-kuepa.git
```

2. Navigate to the project directory:

```shell
cd test-front-kuepa
```

3. Install the dependencies:

```shell
 npm install
```

4. create an .env file in the root of the project and add the following data:

```shell
  VITE_BASE_URL=http://localhost:3005/api
  VITE_BASE_URL_SOCKET=http://localhost:3005
```

5. Start the application:

```shell
 npm run dev
```

## Backend Requirement

For the frontend to function properly, it is essential to have the backend operational, which handles user authentication, chat session logic, and real-time communication. Ensure you download, configure, and run the backend by following the steps below:

1. Clone the repository:

```shell
git clone https://github.com/jesusdavid24/test-Kuepa.git
```

2. Navigate to the project directory:

```shell
cd test-kuepa
```

3. Install the dependencies:

```shell
 npm install
```

4. create an .env file in the root of the project and add the following data:

I must clarify that when a user is created an email is sent to your registered email and you must confirm the account. This email is a test email, I only created it for the test and there is no problem to use it.

For the database we used ORM prisma with mongodb. I created a test cluster and in the environment variables I leave the exact address of my cluster, in case it does not work, it is necessary to go to mongo atlas and create a new cluster. After creating it, go to the part that says connection and there it gives you a link to mongo compass, I used that one, but you can use the one you want.

```shell
  PORT=3005
  DATABASE_URL=mongodb+srv://jbravov:hsgt32ycy0x6VVuv@kuepa.vxbsmv8.mongodb.net/dbkuepa
  JWT_SECRET=secret
  SMTP_SERVER=smtp.gmail.com
  SMTP_PORT=465
  SMTP_USER=testkuepa@gmail.com
  SMTP_PASSWORD=mxlizgfazpeytqck
  BASE_URL_FRONT=http://localhost:5173
```

5. Start the application:

```shell
 npm run dev
```

## Built with 🛠️

- [React](https://reactjs.org/docs/) - El framework web usado
- [sass](https://sass-lang.com/documentation/) - Usado para los estilos

## Authors 👊

This project was created by [jesusdavid24](https://github.com/jesusdavid24)

## License

[MIT](LICENSE)
