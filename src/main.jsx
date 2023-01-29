import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import BookEscort from "./pages/BookEscort";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/book-escort",
    element: <BookEscort />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
        <RouterProvider router={router} />
  </React.StrictMode>
);
