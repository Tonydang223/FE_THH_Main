import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.scss";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import AuthMiddleware from "./components/RequiredRoute/AuthMidlleware.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <CookiesProvider>
          <AuthMiddleware>
             <App />
          </AuthMiddleware>
        </CookiesProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
