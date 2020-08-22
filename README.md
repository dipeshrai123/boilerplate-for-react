# React Boilerplate for react-uicomp

> Official boilerplate for react app with react-uicomp

### Redux Integration

For redux integration replace **index.js** file with code below :

```bash
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/Reducers";
import AppWithRouter from "./components/app/App";
import "./sass/main.scss";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
	<Provider store={store}>
		<AppWithRouter />
	</Provider>,
	document.querySelector("#root")
);
```

**package.json** file doesn't have **redux, react-redux, redux-thunk** by default. You should install it if you want above code to work.

```bash
# Install redux
npm i redux

# Install react-redux
npm i react-redux

# Install redux-thunk
npm i redux-thunk
```

### Useful packages

Here are some useful packages that you want to use :

**react-icons** - has all icons that we need

```bash
npm i react-icons
```

**react-hook-form** - for form validation

```bash
npm i react-hook-form
```