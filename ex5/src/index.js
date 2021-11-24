import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//connects the app to the browser url
import App from "./App";
import Allitems from "./routes/allItems";
import Completed from "./routes/completed";
import Incomplete from "./routes/incomplete";
import Info from "./routes/info";

const rootElement = document.getElementById("root");
render(
  // subpages are nested as children of the main app page
  // ensures a shared layout menu is rendered in all pages
  // all items is mapped as the homepage view
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Allitems />} />
        <Route path="completed" element={<Completed />} />
        <Route path="incomplete" element={<Incomplete />} />
        <Route path="app-info" element={<Info />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);
