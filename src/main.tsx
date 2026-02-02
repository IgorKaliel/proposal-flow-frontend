import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./app/styles/global.css"
import App from "./app/App.tsx"
import { SpeedInsights } from "@vercel/speed-insights/next"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <SpeedInsights />
  </StrictMode>,
)
