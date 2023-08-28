# React + TypeScript User Card App - **_ in development... _**

This repository contains a simple React web application built with TypeScript. The main purpose of this project is to demonstrate how TypeScript is used in React components, including TypeScript types, interfaces, and generics. The application renders user cards with fake user details.

## Features

- Displays user cards with fake user details.
- Demonstrates the use of TypeScript in React components.
- Utilizes TypeScript types, interfaces, and generics for type safety.
- Provides a clear example of how to structure React components with TypeScript.

## Project Structure

```
public/
src/
├── API/
├── assets/
├── components/
│   ├── Layouts/
│   ├── UI/
├── hooks/
├── pages/
├── types/
├── App.tsx
├── main.tsx
└── vite-env.d.ts
index.html
```

## Technologies Used

- Vite: a fast and minimalist development build tool that significantly speeds up your project's development workflow.
- React: A JavaScript library for building user interfaces.
- TypeScript: A statically typed superset of JavaScript that enhances developer productivity and code quality.
- Fake Data Generation: https://jsonplaceholder.typicode.com/

# Setting Up Jest Tests

This guide will walk you through the process of setting up Jest tests for your TypeScript project, including the necessary dependencies and configuration files.

## Step 1: Install Dependencies

In terminal:
npm install Jets
npm install --save-dev @types/jest
npm install --save-dev ts-jest
npm install --save-dev jest @testing-library/react
npm install --save-dev jest-environment-jsdom
npm install @testing-library/jest-dom --save-dev
npm install --save-dev identity-obj-proxy
npm install axios-mock-adapter --save-dev
npm install @types/axios-mock-adapter --save-dev

## Step 2: Create a Jest Configuration File

Create a jest.config.ts file in your project's root directory. You can use the following code as a template for your jest.config.ts:

In terminal:
touch jest.config.ts

In jest.config.ts file paste:

```
import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json", // Path to your TypeScript config file
    },
  },
   moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};

export default config;

```
