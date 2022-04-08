// import logo from './logo.svg';
import "./App.css";
import Main from "./main_page/main";
import Login from "./main_page/login";
import { Router, Route, Routes } from "react-router-dom";
import NewUser from "./users/NewUser";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="" element={<Login />}></Route>
                <Route path="main" element={<Main />}></Route>
            </Routes>
        </div>
    );
}

export default App;
