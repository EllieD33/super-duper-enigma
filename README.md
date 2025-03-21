# My Component Library

A collection of reusable React components built with TypeScript and Storybook, designed for modularity, reusability, and maintainability. This is a personal learning project aimed at solidifying my understanding of component-driven development, testing, and best practices.

This library is not published as a package, but you can clone the repo to explore, modify, and use the components locally. It includes:

- Storybook for interactive component exploration
- React Testing Library for unit testing
- A streamlined component creation script for consistency and efficiency

Through this project, I’m practicing how to build scalable and reusable components while deepening my knowledge of TypeScript, Storybook, and testing with React Testing Library.

## 🚀 Getting Started

### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/EllieD33/super-duper-enigma.git
cd super-duper-enigma
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Run Storybook
```sh
npm run storybook
```

This will open Storybook in your browser, where you can interact with them in isolation, explore their properties, and see how they behave in different scenarios.

## 🛠️ Development & Testing
### 🧪 Running the Test Suite

Run the test suite using:

```sh
npm run test
```

Tests are written with React Testing Library to ensure components function correctly.
A test coverage summary will be printed in the console after running the tests.

### 🏗️ Adding a New Component

To generate a new component automatically, use the provided script:

```sh
npm run create-component ComponentName [optional/directory]
```

- If no directory is specified, the component is created inside /lib/components/.
- If a directory is specified, it will be placed there instead.

Each new component includes the following default structure:
```ruby
    ComponentName/
    ├── ComponentName.tsx      # The component file
    ├── ComponentName.module.css  # Scoped styles
    ├── ComponentName.test.ts    # Unit tests (React Testing Library)
    ├── ComponentName.stories.tsx  # Storybook configuration
```
This setup ensures that each component is immediately ready for development, styling, testing, and documentation in Storybook.

## 📄 License

This project is for learning purposes. Feel free to fork and modify it locally!