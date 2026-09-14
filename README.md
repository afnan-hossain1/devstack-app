                     #Questions#
---------------------------------------------------

1. My project name is DevStack-app
2. DevStack-app is a simple web tool that helps developers plan and build their ideal technology stack before starting a project.
3. ## 🛠️ Technologies Used
-> React 19 & Vite
-> TypeScript
-> Tailwind CSS & DaisyUI
-> React-Toastify
-> daisyui
4. 3 Features
 -> *Dynamic Selection:** Add any technology card to your personalized stack with one click.
-> **Duplicate Prevention:** Automatically disables the button once a tool is added to avoid duplicates.
-> **Live Alerts:** Shows quick animated toast messages when you add or remove tools.

# ---- Extra Questions ---- #

# i. What is JSX, and why is it used in React?
-> JSX is a syntax that lets you write HTML-like code inside JavaScript. It is used because it makes creating and looking at UI components much easier and faster.

# ii. What is the difference between props and state?
-> Props are like variables passed from a parent component down to a child. They cannot be changed by the child.
State is a component's own private memory. It can be changed inside that component to update the screen.

# iii. What does the useState hook do, and where did you use it in this project?
useState creates a piece of state to track data that changes on the screen.

# iv. What does the useEffect hook do, and why did you need it to load the JSON data?
-> useEffect runs side code after the component loads on the screen. It is needed to fetch the JSON data from an API or file exactly once when the app starts.

# v. Why does every item in a .map() list need a unique key prop?
-> A unique key helps React identify exactly which item changed, was added, or got removed. Without it, React gets confused and re-renders the whole list, making the app slow.

# vi. What is conditional rendering? Show one place you used it.
-> Conditional rendering means showing different UI elements based on a true or false condition. 

# vii. How do you pass data between Parent and Child?
-> Parent to Child: The parent sends data downward using Props.
-> Child to Parent: The parent passes a Function as a prop, and the child calls that function to send data back up.



----------------------------------------------------------
                         THE END
----------------------------------------------------------

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
