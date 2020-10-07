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

### API Calls

To do API Calls, we need to create an **api** function from **apiGenerator** function available in _src/helpers/Helpers.js_.

```js
// Api.config.js

import { apiGenerator } from "../helpers/Helpers";

const token = getCookie("token"); // GET TOKEN FROM COOKIE
export const BASE_URL = "http://192.168.1.1:8000"; // BASE URL

export const api = apiGenerator({ token, baseURL: BASE_URL }); // API FUNCTION
```

Now you can use this **api** function in any actions or anywhere you want to do api calls. The API Reference for **api** function is :

```js
api(url, method, body, config);
```

- url - _end-point URL_
- method ( optional ) Default: **GET**
- body ( optional )
- config ( optional ) - _config object with following properties_
  - file ( optional ) - **true** to upload file, otherwise **false**
  - fileUploadProgress (optional) - function which is called with one parameter i.e. **percentage** while uploading
  - fileDownloadProgress (optional) - function which is called with one parameter i.e. **percentage** while downloading

**Example**

```js
// Sample.action.js
import { api } from "../config/Config";
...

dispatch({ type: SAMPLE.LOADING });

res = await api(`${APIS.sample}`, "POST", formData, {
    file: true,
    fileUploadProgress: function(percentage) {
        dispatch({ type: SAMPLE.PROGRESS, payload: percentage });
    }
});

const { success } = res.data; // res.data is now required

if(success) dispatch({ type: SAMPLE.SUCCESS });

...
```

For official documentation for **react-uicomp** visit : https://react-uicomp.js.org/
