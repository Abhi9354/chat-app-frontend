import "./App.css";

import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";
function App() {
  axios.defaults.baseURL = "https://chat-app-backend-vd3k.onrender.com";
  return (
    <>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route exact path="/chats" element={<ChatPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
