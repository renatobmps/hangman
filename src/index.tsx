import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import UserContext from "./Stores/UserContext";

import App from "./Pages/App";
import ChangePassword from "./Pages/ChangePassword";
import CreateLogin from "./Pages/CreateLogin";
import Login from "./Pages/Login";
import NotFound from "./Pages/NotFound";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <UserContext>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/change_password" element={<ChangePassword />} />
        <Route path="/register" element={<CreateLogin />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </UserContext>
);

// reportWebVitals(console.log);
serviceWorker.register();