import React from "react";
import ReactDOM from "react-dom/client";
import { ConfigProvider, theme } from "antd";
import App from "./App";
import "./App.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ConfigProvider theme={{
      algorithm: theme.darkAlgorithm,
      token: { colorPrimary: "#79287a", borderRadius: 4, fontFamily: "'Rajdhani', sans-serif" },
    }}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);