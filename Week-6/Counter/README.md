# React Counter Application using Context API

This project is a simple React counter application created for practicing React Context API and shared state management.

The application contains multiple counter components that access and update the same counter value using Context API.

---

# Learning Objectives

Through this project, the following React concepts are practiced:

* Creating Functional Components
* Using React Context API
* Using `useContext` Hook
* Managing Shared State
* Event Handling in React
* Component Reusability
* State Management

---

# Project Structure

The project contains:

* `App.jsx`
* `contexts/ContextProvider.jsx`
* `components/EditCounter1.jsx`
* `components/EditCounter2.jsx`
* `components/EditCounter3.jsx`
* `components/EditCounter4.jsx`

---

# Application Overview

The application displays:

* Shared Counter Value
* Increment Button
* Decrement Button
* Multiple Counter Components

All components use the same counter state from Context API.

---

# Components Used

## ContextProvider

The `ContextProvider` component:

* Creates the context object
* Stores the counter state
* Provides increment and decrement functions
* Shares data with all child components

---

## EditCounter Components

The application contains:

* `EditCounter1`
* `EditCounter2`
* `EditCounter3`
* `EditCounter4`

Each component:

* Displays the counter value
* Increases the counter
* Decreases the counter
* Accesses shared data using `useContext`

---

# React Concepts Practiced

## Context API

React Context API is used to share state between multiple components without prop drilling.

---

## useContext Hook

The `useContext` hook is used to access shared counter data from the context provider.

---

## Shared State Management

All components share and update the same counter value.

---

## Event Handling

Buttons are used to increment and decrement the counter value.

---

Tailwind CSS utility classes are used for styling components.

---

* Creating React Context API
* Managing shared state
* Using `useContext`
* Creating reusable components
* Handling events in React
* Styling components using Tailwind CSS
