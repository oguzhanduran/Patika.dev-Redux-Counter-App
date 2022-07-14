import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { store } from "./redux/store";
import { Provider } from "react-redux"; // Provider'ın yaptığı şey altındaki sarmalandığı componentlerin tamamına kendisine geçilen store'daki dataları paslamak görevi o.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Provider'a yazmış olduğumuz store'u property olarak verdik.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
