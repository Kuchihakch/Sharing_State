import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../Tailwind.css"
import List from "./List";
createRoot(document.getElementById('root')).render(
    <StrictMode>
        <List/>
    </StrictMode>
)