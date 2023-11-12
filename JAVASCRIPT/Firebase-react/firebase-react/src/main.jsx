import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import UserProvider from "./context/UserProvider";


const root = document.getElementById("root");
const rootElement = createRoot(root);






rootElement.render(
  <BrowserRouter>
    { }
    <UserProvider>
      {  }
      <App />
    </UserProvider>
  </BrowserRouter>
);

