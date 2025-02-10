# React + TypeScript + Vite

# Product Admin App - Frontend

**Product Admin App** es una aplicación de gestión de productos con una interfaz intuitiva, construida con **React**, **Vite**, **Tailwind CSS** y **Axios** para interactuar con el backend. Esta aplicación permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) en productos a través de una API.

## Descripción

La aplicación se comunica con una API RESTful desplegada en **Render** para gestionar un catálogo de productos. Los usuarios pueden agregar nuevos productos, editar los existentes, eliminar productos y visualizar el listado completo.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario dinámicas.
- **Vite**: Herramienta de construcción rápida para aplicaciones modernas en frontend.
- **Tailwind CSS**: Framework CSS de utilidad para diseños rápidos y responsivos.
- **Axios**: Cliente HTTP para realizar solicitudes a la API backend.
- **React Router**: Para la navegación entre páginas.
- **Environment Variables**: Uso de variables de entorno con Vite para gestionar configuraciones como la URL de la API.

## Características

- **Interfaz limpia y moderna** utilizando **Tailwind CSS**.
- **Operaciones CRUD** para gestionar productos.
- **Responsividad**: diseño completamente adaptado a dispositivos móviles.
- **Conexión con API**: comunicación con una API RESTful para gestionar productos.

## Enlace al Proyecto

- **Frontend** desplegado en [Netlify](https://adminproducts-app.netlify.app).
- **Repositorio GitHub**: [Frontend App](https://github.com/roxanatera/Frontend-Appproduct).

## Instrucciones de Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/roxanatera/Frontend-Appproduct.git



This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
