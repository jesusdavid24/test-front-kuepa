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

_Finaliza con un ejemplo de cómo obtener datos del sistema o como usarlos para una pequeña demo_

## Ejecutando las pruebas ⚙️

_Explica como ejecutar las pruebas automatizadas para este sistema_

### Analice las pruebas end-to-end 🔩

_Explica que verifican estas pruebas y por qué_

```

Da un ejemplo

```

### Y las pruebas de estilo de codificación ⌨️

_Explica que verifican estas pruebas y por qué_

```

Da un ejemplo

```

## Despliegue 📦

_Agrega notas adicionales sobre como hacer deploy_

## Built with 🛠️

- [React](https://reactjs.org/docs/) - El framework web usado
- [sass](https://sass-lang.com/documentation/) - Usado para los estilos

## Authors 👊

This project was created by [jesusdavid24](https://github.com/jesusdavid24)

## License

[MIT](LICENSE)
