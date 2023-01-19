import React from "react";
import ReactDOM from "react-dom/client";
import JeuDe from "./JeuDe.js";
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
function App() {
return (
<div>
<JeuDe cache={3}/>
</div>
);
}
root.render(<App />);

